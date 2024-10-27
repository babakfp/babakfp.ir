import { error } from "@sveltejs/kit"
import { getCollectionEntry } from "$lib/markdown/collections"
import { postsFrontmatterSchema } from "$lib/types.js"
import { getPosts } from "$lib/utilities/getPosts.js"

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

    return { ...post, posts }
}
