/*
TODO?: In the future, maybe get all files in /src/content and validate if any unexpected files exist.
TODO?: In the future, maybe validate the name of collections and file names.
TODO?: In the future, maybe add back pathing strategies: ("simple", "+page").
*/

import { z } from "zod"
import config from "$content-config"

const collectionNameSchema = z
    .string()
    .min(1)
    .regex(
        /^[a-z]+$/,
        "The collection name must only contain lowercase letters.",
    )

const fileFolderNameSchema = z
    .string()
    .min(1)
    .regex(
        /^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/,
        "The file/folder name must only contain letters, numbers, and a single hyphen in between them.",
    )

/**
 * Gets all markdown files located at `/src/content`.
 * @returns A record of paths and their corresponding functions. Learn more about [Glob Import](https://vitejs.dev/guide/features.html#glob-import).
 */
const getFiles = () => import.meta.glob("/src/content/*/**/*.md")

type RouteFile = {
    glob: {
        path: string
        value: () => Promise<unknown>
    }
    collection: {
        name: string
    }
    file: {
        name: string
        slug: string
    }
    slug: string
}

type RouteFiles = RouteFile[]

const validateCollectionName = (collectionName: string) => {
    const result = collectionNameSchema.safeParse(collectionName)
    if (!result.success) {
        throw new Error(result.error.issues[0].message)
    }
}

const validateFileSlug = (fileSlug: string) => {
    const result = fileFolderNameSchema.safeParse(fileSlug)
    if (!result.success) {
        throw new Error(result.error.issues[0].message)
    }
}

const validateSlugSegments = (slugSegments: string[]) => {
    slugSegments.forEach(slugSegment => {
        const result = fileFolderNameSchema.safeParse(slugSegment)
        if (!result.success) {
            throw new Error(result.error.issues[0].message)
        }
    })
}

/**
 * Gets all markdown pages.
 *
 * Filters out paths containing underscores. Users may prefer to treat markdown files as components rather than pages. To avoid generating routes for these files, users can append underscores (`_`) to the folder or file names.
 */
const getRouteFiles = async () => {
    const files = getFiles()
    const routeFiles: RouteFiles = []

    for (const [path, value] of Object.entries(files)) {
        if (!path.includes("_")) {
            const segments = path.replace("/src/content/", "").split("/")
            const collectionName = segments[0]
            const fileSlug = segments[segments.length - 1].replace(".md", "")
            const slugSegments = segments.slice(1, -1)

            validateCollectionName(collectionName)
            validateFileSlug(fileSlug)
            validateSlugSegments(slugSegments)

            routeFiles.push({
                glob: { path, value },
                collection: { name: collectionName },
                file: {
                    name: segments[segments.length - 1],
                    slug: fileSlug,
                },
                slug: segments
                    .slice(1)
                    .join("/")
                    .replace(".md", "")
                    .replace("/index", ""),
            })
        }
    }

    routeFiles.forEach(e => {
        const sameSlugFiles = routeFiles.filter(e2 => e2.slug === e.slug)
        if (sameSlugFiles.length > 1) {
            throw new Error(
                `Conflicting routes found:
                ${sameSlugFiles.map(entry => entry.glob.path).join("\n")}
                Both resolve at the same route. One must be removed.`,
            )
        }
    })

    return routeFiles
}

type GlobValueResult = {
    default: {
        render: () => {
            html: string
            css: { code: string; map: null } // TODO: Add better types for `map`.
            head: string
        }
        $$render: () => string
    }
    metadata?: Record<string, any>
}

/**
 * Gets all markdown pages located at `/src/content/<name>`.
 * @param name - The name of the collection.
 * @returns A record of paths and their corresponding functions for the specified collection. Learn more about [Glob Import](https://vitejs.dev/guide/features.html#glob-import).
 */
export const getCollectionEntries = async (name: string) => {
    const routeFiles = await getRouteFiles()
    const collectionEntries = routeFiles.filter(
        page => page.collection.name === name,
    )

    const result = await Promise.all(
        collectionEntries.map(async entry => {
            const globValueResult =
                (await entry.glob.value()) as GlobValueResult

            config?.collections?.[
                name as keyof typeof config.collections
            ]?.schema?.parse(globValueResult.metadata)

            const metadataSchemaType =
                config?.collections?.[name as keyof typeof config.collections]
                    ?.schema._type

            const typedMetadata =
                globValueResult.metadata as typeof metadataSchemaType

            return {
                collection: entry.collection,
                file: {
                    ...entry.file,
                    path: entry.glob.path,
                },
                slug: entry.slug,
                content: globValueResult.default,
                metadata: typedMetadata,
            }
        }),
    )

    return result
}

/**
 * Gets a specific markdown page based on collection name and slug.
 * @param name - The name of the collection.
 * @param slug - The name of the file without suffix or extension.
 * @returns The content of the specified markdown file.
 * @throws An error if conflicting routes are found or if the path is invalid.
 */
export const getCollectionEntry = async (name: string, slug: string) => {
    const collectionEntries = await getCollectionEntries(name)
    const entries = collectionEntries.filter(
        entry => entry.collection.name === name && entry.slug === slug,
    )

    const page = entries[0]

    if (page) {
        return page
    }
}
