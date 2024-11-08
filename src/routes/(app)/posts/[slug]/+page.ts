import { error } from "@sveltejs/kit"
import { collections } from "$lib/markdown/collections.js"
import { getPosts } from "$lib/utilities/getPosts.js"

export const load = async ({ params }) => {
    const post = collections.getEntry("posts", params.slug)

    if (!post) {
        error(404)
    }

    const posts = await getPosts()

    return { ...post, posts }
}
