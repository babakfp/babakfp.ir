import {
    useTypedCollections,
    type ImportGlobMarkdownMap,
} from "mdx-collections-svelte"
import { z } from "mdx-collections-svelte/zod"

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

export const collections = useTypedCollections(pages, {
    posts: z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        update: z.string().min(1),
        create: z.string().min(1),
    }),
    docs: z.object({
        title: z.string().min(1),
        description: z.string().min(1).optional(),
    }),
    portfolios: z.object({}).default({}),
})
