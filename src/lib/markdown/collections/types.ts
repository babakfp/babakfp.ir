import type { SvelteComponent } from "svelte"

export type ImportGlob = Record<string, () => Promise<unknown>>

export type MarkdownEntry = {
    glob: {
        path: keyof ImportGlob
        value: ImportGlob[keyof ImportGlob]
    }
    collection: {
        name: string
    }
    file: {
        name: string
    }
    slug: string
}

export type ImportGlobItemResolved = {
    default: typeof SvelteComponent
    markdownData_: {
        frontmatter: Record<string, unknown>
    }
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
    content: ImportGlobItemResolved["default"]
    frontmatter: ImportGlobItemResolved["markdownData_"]["frontmatter"]
}
