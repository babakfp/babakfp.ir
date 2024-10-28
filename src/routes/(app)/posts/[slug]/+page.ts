import { error } from "@sveltejs/kit"
import { getCollectionEntry } from "$lib/markdown/collections"
import { postsSchema } from "$lib/markdown/schemas.js"
import { getPosts } from "$lib/utilities/getPosts.js"

export const load = async ({ params }) => {
    const post = await getCollectionEntry("posts", params.slug, postsSchema)

    if (!post) {
        error(404)
    }

    const posts = await getPosts()

    return { ...post, posts }
}
