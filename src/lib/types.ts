import { z } from "zod"

export const postFrontmatterSchema = z.object({
    title: z.string(),
    description: z.string(),
    updated: z.string(),
    published: z.string(),
})

export type PostFrontmatter = typeof postFrontmatterSchema._type

export type Post = PostFrontmatter & {
    slug: string
}

export const docFrontmatterSchema = z.object({
    title: z.string(),
})

export type DocFrontmatter = typeof docFrontmatterSchema._type

export type Doc = DocFrontmatter & {
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
