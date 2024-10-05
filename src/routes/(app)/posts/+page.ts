import { getPosts } from "$lib/utils/getPosts.js"

export const load = async () => {
    const posts = await getPosts()
    return { posts }
}
