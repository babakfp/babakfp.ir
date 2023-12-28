import { error } from "@sveltejs/kit"
import type { Post } from "$lib/types.js"
import { getCollectionEntry } from "$utils/markdown"

export async function load({ fetch, params }) {
    const res = await fetch("/api/posts")
    const posts: Post[] = await res.json()
    const post = await getCollectionEntry("posts", params.slug)

    if (post) {
        return {
            ...post.metadata,
            slug: params.slug,
            content: post.content,
            posts,
        }
    }

    error(404)
}
