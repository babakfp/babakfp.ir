import { error } from "@sveltejs/kit"
import { collections } from "$lib/markdown/collections.js"

export const load = async ({ params }) => {
    const post = collections.getEntry("posts", params.slug)

    if (!post) {
        error(404)
    }

    return post
}
