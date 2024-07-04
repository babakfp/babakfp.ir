import { error } from "@sveltejs/kit"
import { getCollectionEntry } from "$lib/markdown/collections"
import { postsFrontmatterSchema } from "$lib/types.js"
import { getPosts } from "$lib/utils/getPosts.js"

export const load = async ({ params }) => {
    const post = await getCollectionEntry(
        "posts",
        params.slug,
        postsFrontmatterSchema,
    )

    if (!post) {
        error(404)
    }

    const posts = await getPosts()

    return {
        ...post.frontmatter,
        slug: params.slug,
        content: post.content,
        posts,
    }
}
