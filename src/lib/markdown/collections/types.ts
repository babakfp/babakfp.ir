import type { Data } from "mdx-svelte"
import type { SvelteComponent } from "svelte"

export type ImportMetaGlob = Record<string, () => Promise<unknown>>

export type ImportMetaGlobValueResult = {
    default: typeof SvelteComponent
    mdx: Data
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
    mdx: ImportMetaGlobValueResult["mdx"]
    frontmatter?: ImportMetaGlobValueResult["mdx"]["frontmatter"]
}
