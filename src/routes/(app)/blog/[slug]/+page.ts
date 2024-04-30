import { error } from "@sveltejs/kit"
import { type Post, PostsFrontmatterSchema } from "$lib/types.js"
import { getCollectionEntry } from "$lib/markdown/collections"

export async function load({ fetch, params }) {
    const res = await fetch("/api/posts")
    const posts: Post[] = await res.json()
    const post = await getCollectionEntry(
        "posts",
        params.slug,
        PostsFrontmatterSchema,
    )

    if (!post) {
        error(404)
    }

    return {
        ...post.frontmatter,
        slug: params.slug,
        content: post.content,
        posts,
    }
}
