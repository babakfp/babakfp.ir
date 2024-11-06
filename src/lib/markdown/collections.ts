import {
    useCollections,
    type ImportGlobMarkdownMap,
} from "mdx-collections-svelte"

/**
 * All markdown content pages.
 *
 * Paths that contain (`_`) in their name are ignored to avoid conflict between pages and components.
 *
 * [Glob Import](https://vitejs.dev/guide/features.html#glob-import).
 */
export const pages = import.meta.glob(
    [
        "/src/content/*/**/*.md",
        "!/src/content/*/**/_*/*.md",
        "!/src/content/*/**/_*.md",
    ],
    { eager: true },
) satisfies ImportGlobMarkdownMap

export const collections = useCollections(pages)
