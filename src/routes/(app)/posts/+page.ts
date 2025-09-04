import { getPosts } from "$lib/utilities/getPosts.js"

export const load = async () => ({
    posts: await getPosts(),
})
