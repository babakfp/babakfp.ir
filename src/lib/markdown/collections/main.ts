import { error } from "@sveltejs/kit"
import { z } from "zod"
import type {
    CollectionEntry,
    ImportMetaGlob,
    ImportMetaGlobValueResult,
    MarkdownEntry,
} from "./types"
import {
    validateCollectionEntryName,
    validateCollectionName,
} from "./validations"

/**
 * Contains all markdown files located at `src/content`.
 * Ignores files and folders containing (`_`) in their name to avoid conflict between pages and components.
 *
 * Learn more about [Glob Import](https://vitejs.dev/guide/features.html#glob-import).
 */
const markdownFiles = import.meta.glob([
    "/src/content/*/**/*.md",
    "!/src/content/*/**/_*/*.md",
    "!/src/content/*/**/_*.md",
]) satisfies ImportMetaGlob

const markdownFilesToEntries = async () => {
    const markdownEntries: MarkdownEntry[] = []

    for (const [path, value] of Object.entries(markdownFiles)) {
        const segments = path.replace("/src/content/", "").split("/")

        const collectionName = segments[0]
        validateCollectionName(collectionName)

        const fileName = segments[segments.length - 1]
        validateCollectionEntryName(fileName.replace(".md", ""))

        const slugSegments = segments.slice(1, -1)
        slugSegments.forEach((slugSegment) =>
            validateCollectionEntryName(slugSegment),
        )

        const slug = segments
            .slice(1)
            .join("/")
            .replace(".md", "")
            .replace("/index", "")

        markdownEntries.push({
            glob: { path, value },
            collection: { name: collectionName },
            file: { name: fileName },
            slug,
        })
    }

    markdownEntries.forEach((entry) => {
        const sameSlugEntries = markdownEntries.filter(
            (e) => e.slug === entry.slug,
        )
        if (sameSlugEntries.length > 1) {
            throw new Error(
                `Conflicting routes found:
                ${sameSlugEntries.map((e) => e.glob.path).join("\n")}
                Both entries resolve at the same route. One must be removed.`,
            )
        }
    })

    return markdownEntries
}

/**
 * @returns The resolved value of an entry with frontmatter.
 */
const getGlobEntryValue = async <T extends z.ZodRawShape>(
    entry: MarkdownEntry,
    schema?: z.ZodObject<T>,
) => {
    const globValueResult =
        (await entry.glob.value()) as ImportMetaGlobValueResult

    const validateFrontmatter = () => {
        if (schema) {
            const frontmatterParseResult = schema.safeParse(
                globValueResult.mdx.frontmatter,
            )

            if (!frontmatterParseResult.success) {
                return error(400, frontmatterParseResult.error.message)
            }

            return frontmatterParseResult.data
        }

        return {}
    }

    const frontmatter = {
        ...(validateFrontmatter() as z.infer<z.ZodObject<T>>),
        ...globValueResult.mdx.frontmatter,
    }

    return {
        collection: entry.collection,
        file: {
            ...entry.file,
            path: entry.glob.path,
        },
        slug: entry.slug,
        content: globValueResult.default,
        mdx: globValueResult.mdx,
        frontmatter,
    } satisfies CollectionEntry
}

/**
 * Gets all markdown entries of the specific collection.
 * @param name - The name of the collection.
 */
export const getCollectionEntries = async <T extends z.ZodRawShape>(
    name: string,
    schema?: z.ZodObject<T>,
) => {
    const markdownEntries = await markdownFilesToEntries()

    const collectionEntries = markdownEntries.filter(
        (page) => page.collection.name === name,
    )

    const result = await Promise.all(
        collectionEntries.map(
            async (entry) => await getGlobEntryValue<T>(entry, schema),
        ),
    )

    return result
}

/**
 * Gets a specific markdown page based on collection name and slug.
 * @param name - The name of the collection.
 * @param slug - The name of the markdown file without the suffix (`.md`).
 */
export const getCollectionEntry = async <T extends z.ZodRawShape>(
    name: string,
    slug: string,
    schema?: z.ZodObject<T>,
) => {
    const entries = await markdownFilesToEntries()
    const collectionEntries = entries.filter(
        (entry) => entry.collection.name === name,
    )
    const entry = collectionEntries.filter(
        (entry) => entry.collection.name === name && entry.slug === slug,
    )[0]

    if (entry) {
        return await getGlobEntryValue<T>(entry, schema)
    }
}
