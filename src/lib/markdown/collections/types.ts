import type { Data } from "mdx-svelte"
import type { ComponentType } from "svelte"

type ImportGlobMarkdown = {
    default: ComponentType
    mdx: Data
    frontmatter?: Data["frontmatter"]
}

export type ImportGlobMarkdownMap = Record<string, ImportGlobMarkdown>

export type CollectionEntry = ImportGlobMarkdown & {
    path: string
    file: string
    collection: string
    slug: string
    href: string
}
