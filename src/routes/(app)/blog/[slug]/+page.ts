import { error } from "@sveltejs/kit"
import type { Post } from "$lib/types.js"
import { getCollectionEntry } from "mdsvex-collections"

export async function load({ fetch, params }) {
    const res = await fetch("/api/posts")
    const posts: Post[] = await res.json()
    const post = await getCollectionEntry("posts", params.slug)

    if (!post) {
        error(404)
    }

    return {
        ...post.metadata,
        slug: params.slug,
        content: post.content,
        posts,
    }
}
