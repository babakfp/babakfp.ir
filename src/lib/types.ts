import * as v from "valibot"

export const PostsFrontmatterSchema = v.object({
    title: v.string('Post "title" field must be a string.', [
        v.minLength(1, 'Post "title" field is required.'),
    ]),
    description: v.string('Post "description" field must be a string.', [
        v.minLength(1, 'Post "description" field is required.'),
    ]),
    update: v.string('Post "update" field must be a string.', [
        v.minLength(1, 'Post "update" field is required.'),
    ]),
    create: v.string('Post "create" field must be a string.', [
        v.minLength(1, 'Post "create" field is required.'),
    ]),
})

export type Post = v.Input<typeof PostsFrontmatterSchema> & {
    slug: string
}

export const DocsFrontmatterSchema = v.object({
    title: v.string('Doc "title" field must be a string.', [
        v.minLength(1, 'Doc "title" field is required.'),
    ]),
})

export type Doc = v.Input<typeof DocsFrontmatterSchema> & {
    slug: string
}

export const PortfoliosFrontmatterSchema = v.object({})

export type Portfolio = v.Input<typeof PortfoliosFrontmatterSchema> & {
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
