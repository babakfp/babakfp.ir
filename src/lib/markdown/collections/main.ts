import { error } from "@sveltejs/kit"
import { z } from "zod"
import type { CollectionEntry, ImportGlobMarkdownMap } from "./types"
import {
    validateCollectionEntryName,
    validateCollectionName,
} from "./validations"

/**
 * All markdown content pages.
 *
 * Paths that contain (`_`) in their name are ignored to avoid conflict between pages and components.
 *
 * [Glob Import](https://vitejs.dev/guide/features.html#glob-import).
 */
const pages = import.meta.glob(
    [
        "/src/content/*/**/*.md",
        "!/src/content/*/**/_*/*.md",
        "!/src/content/*/**/_*.md",
    ],
    { eager: true },
) satisfies ImportGlobMarkdownMap

const markdownFilesToEntries = () => {
    const markdownEntries: CollectionEntry[] = []

    for (const [path, value] of Object.entries(pages)) {
        const segments = path.replace("/src/content/", "").split("/")

        const collection = segments[0]
        validateCollectionName(collection)

        const file = segments[segments.length - 1]
        validateCollectionEntryName(file.replace(".md", ""))

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
            path,
            ...value,
            collection: collection,
            file,
            slug,
            href: `/${collection}/${slug}`,
        })
    }

    markdownEntries.forEach((entry) => {
        const sameSlugEntries = markdownEntries.filter(
            (e) => e.slug === entry.slug,
        )
        if (sameSlugEntries.length > 1) {
            throw new Error(
                `Conflicting routes found:
                ${sameSlugEntries.map((e) => e.path).join("\n")}
                Both entries resolve at the same route. One must be removed.`,
            )
        }
    })

    return markdownEntries
}

/**
 * @returns The resolved value of an entry with frontmatter.
 */
const getGlobEntryValue = <T extends z.ZodRawShape>(
    entry: CollectionEntry,
    schema?: z.ZodObject<T>,
) => {
    const validateFrontmatter = () => {
        if (schema) {
            const frontmatterParseResult = schema.safeParse(
                entry.mdx.frontmatter,
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
        ...entry.mdx.frontmatter,
    }

    return {
        collection: entry.collection,
        path: entry.path,
        file: entry.file,
        slug: entry.slug,
        default: entry.default,
        mdx: entry.mdx,
        frontmatter,
        href: entry.href,
    } satisfies CollectionEntry
}

/**
 * Gets all markdown entries of the specific collection.
 * @param name - The name of the collection.
 */
export const getCollectionEntries = <T extends z.ZodRawShape>(
    name: string,
    schema?: z.ZodObject<T>,
) => {
    const markdownEntries = markdownFilesToEntries()

    const collectionEntries = markdownEntries.filter(
        (page) => page.collection === name,
    )

    const result = collectionEntries.map((entry) =>
        getGlobEntryValue<T>(entry, schema),
    )

    return result
}

/**
 * Gets a specific markdown page based on collection name and slug.
 * @param name - The name of the collection.
 * @param slug - The name of the markdown file without the suffix (`.md`).
 */
export const getCollectionEntry = <T extends z.ZodRawShape>(
    name: string,
    slug: string,
    schema?: z.ZodObject<T>,
) => {
    const entries = markdownFilesToEntries()
    const collectionEntries = entries.filter(
        (entry) => entry.collection === name,
    )
    const entry = collectionEntries.filter(
        (entry) => entry.collection === name && entry.slug === slug,
    )[0]

    if (entry) {
        return getGlobEntryValue<T>(entry, schema)
    }
}
