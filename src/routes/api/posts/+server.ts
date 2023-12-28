import { json } from "@sveltejs/kit"
import type { Post } from "$lib/types"
import { getCollectionEntries } from "$utils/markdown"

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}

async function getPosts() {
    const entries = await getCollectionEntries("posts")

    const posts: Post[] = entries
        .map(entry => ({ ...entry.metadata, slug: entry.slug }))
        .sort(
            (first, second) =>
                new Date(second.published).getTime() -
                new Date(first.published).getTime(),
        )

    return posts
}
