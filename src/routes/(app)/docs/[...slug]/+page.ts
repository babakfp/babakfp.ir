import { error } from "@sveltejs/kit"

export async function load({ params }) {
    try {
        const url = `../../../../docs/${params.slug}/+page.md`
        const doc = await import(/* @vite-ignore */ url)
        return {
            ...doc.metadata,
            slug: params.slug,
            content: doc.default,
        }
    } catch {
        return error(404)
    }
}
