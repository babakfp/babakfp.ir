import { json } from "@sveltejs/kit"
import { getCollectionEntries } from "$lib/markdown/collections"
import { PostsFrontmatterSchema, type Post } from "$lib/types"

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}

async function getPosts() {
    const entries = await getCollectionEntries("posts", PostsFrontmatterSchema)

    const posts: Post[] = entries
        .filter((entry) => entry.slug.split("/").length === 1)
        .map((entry) => ({
            ...entry.frontmatter,
            slug: entry.slug,
        }))
        .sort(
            (first, second) =>
                new Date(second.create).getTime() -
                new Date(first.create).getTime(),
        )

    return posts
}
