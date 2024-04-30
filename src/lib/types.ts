import * as v from "valibot"

export const PostsFrontmatterSchema = v.object({
    title: v.string(),
    description: v.string(),
    updated: v.string(),
    published: v.string(),
})

export type Post = v.Input<typeof PostsFrontmatterSchema> & {
    slug: string
}

export const DocsFrontmatterSchema = v.object({
    title: v.string(),
})

export type Doc = v.Input<typeof DocsFrontmatterSchema> & {
    slug: string
}

export type Package = {
    name: string
    description: string
    avatarUrl: string
    starsCount: number
    forksCount: number
    openIssuesCount: number
    version: string
    license: string
    fileCount: number
    unpackedSize: number
    downloadsCount: number
}
