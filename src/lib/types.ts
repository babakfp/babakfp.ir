import { z } from "zod"

export const postFrontmatterSchema = z.object({
    title: z.string(),
    description: z.string(),
    updated: z.string(),
    published: z.string(),
})

export type Post = typeof postFrontmatterSchema._type & {
    slug: string
}

export const docFrontmatterSchema = z.object({
    title: z.string(),
})

export type Doc = typeof docFrontmatterSchema._type & {
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
