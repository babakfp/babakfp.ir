import { error } from "@sveltejs/kit"

export async function load({ params }) {
    try {
        const doc = await import(`../../../../docs/${params.slug}/+page.md`)
        return {
            ...doc.metadata,
            slug: params.slug,
            content: doc.default,
        }
    } catch {
        return error(404)
    }
}
