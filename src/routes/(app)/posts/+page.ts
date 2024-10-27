import { getPosts } from "$lib/utilities/getPosts.js"

export const load = async () => {
    const posts = await getPosts()
    return { posts }
}
