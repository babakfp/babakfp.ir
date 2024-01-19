import { z } from "zod"

export const postMetadataSchema = z.object({
    title: z.string(),
    description: z.string(),
    updated: z.string(),
    published: z.string(),
})

export type PostMetadataSchema = typeof postMetadataSchema._type

export type Post = PostMetadataSchema & {
    slug: string
}

export const docMetadataSchema = z.object({
    title: z.string(),
})

export type DocMetadataSchema = typeof docMetadataSchema._type

export type Doc = DocMetadataSchema & {
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
