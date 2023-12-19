import { error } from "@sveltejs/kit"
import type { Post } from "$lib/types.js"

export async function load({ fetch, params }) {
    const res = await fetch("/api/posts")
    const posts: Post[] = await res.json()
    const paths = import.meta.glob("/src/posts/**/+page.md")
    const path = paths[`/src/posts/${params.slug}/+page.md`]

    if (path) {
        const post = await path()
        return {
            ...post.metadata,
            slug: params.slug,
            content: post.default,
            posts,
        }
    }

    error(404)
}
