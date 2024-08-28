import { z } from "zod"

export const postsFrontmatterSchema = z.object({
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

export const docsFrontmatterSchema = z.object({
    title: z
        .string({ message: 'Doc "title" field must be a string.' })
        .min(1, 'Doc "title" field is required.'),
    description: z
        .string({ message: 'Doc "description" field must be a string.' })
        .min(1, 'Doc "description" field is required.')
        .optional(),
})

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
