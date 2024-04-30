import { json } from "@sveltejs/kit"
import { type Post, PostsFrontmatterSchema } from "$lib/types"
import { getCollectionEntries } from "$lib/markdown/collections"

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}

async function getPosts() {
    const entries = await getCollectionEntries("posts", PostsFrontmatterSchema)

    const posts: Post[] = entries
        .map(entry => ({
            ...entry.frontmatter,
            slug: entry.slug,
        }))
        .sort(
            (first, second) =>
                new Date(second.published).getTime() -
                new Date(first.published).getTime(),
        )

    return posts
}
