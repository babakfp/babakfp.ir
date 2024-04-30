import type { SvelteComponent } from "svelte"
import type { MarkdownData } from "svelte-in-markdown"

export type ImportMetaGlob = Record<string, () => Promise<unknown>>

export type ImportMetaGlobValueResult = {
    default: typeof SvelteComponent
    markdownData_: MarkdownData
}

export type MarkdownEntry = {
    glob: {
        path: keyof ImportMetaGlob
        value: ImportMetaGlob[keyof ImportMetaGlob]
    }
    collection: {
        name: string
    }
    file: {
        name: string
    }
    slug: string
}

export type CollectionEntry = {
    collection: {
        name: string
    }
    file: {
        name: string
        path: string
    }
    slug: string
    content: ImportMetaGlobValueResult["default"]
    frontmatter: ImportMetaGlobValueResult["markdownData_"]["frontmatter"]
}
