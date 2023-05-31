export interface Post {
    title: string
    description: string
    updateDate: string
    publishDate: string
    slug: string
}

export interface Package {
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
}
