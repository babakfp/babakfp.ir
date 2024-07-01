import { z } from "zod"

export const PostsFrontmatterSchema = z.object({
    title: z
        .string({ message: 'Post "title" field must be a string.' })
        .min(1, 'Post "title" field is required.'),
    description: z
        .string({ message: 'Post "description" field must be a string.' })
        .min(1, 'Post "description" field is required.'),
    update: z
        .string({ message: 'Post "update" field must be a string.' })
        .min(1, 'Post "update" field is required.'),
    create: z
        .string({ message: 'Post "create" field must be a string.' })
        .min(1, 'Post "create" field is required.'),
})

export type Post = z.input<typeof PostsFrontmatterSchema> & {
    slug: string
}

export const DocsFrontmatterSchema = z.object({
    title: z
        .string({ message: 'Doc "title" field must be a string.' })
        .min(1, 'Doc "title" field is required.'),
})

export type Doc = z.input<typeof DocsFrontmatterSchema> & {
    slug: string
}

export type Portfolio = {
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
