import { error } from "@sveltejs/kit"

export async function load({ params }) {
    try {
        const post = await import(`../../../../posts/${params.slug}/+page.md`)
        return {
            ...post.metadata,
            content: post.default,
        }
    } catch (e) {
        return error(404)
    }
}
