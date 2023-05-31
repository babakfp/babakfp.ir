import { error } from "@sveltejs/kit"
import type { Post } from "$lib/types.js"

export async function load({ fetch, params }) {
    const res = await fetch("/api/posts")
    const posts: Post[] = await res.json()

    try {
        const post = await import(`../../../../posts/${params.slug}/+page.md`)
        return {
            posts,
            ...post.metadata,
            content: post.default,
        }
    } catch (e) {
        return error(404)
    }
}
