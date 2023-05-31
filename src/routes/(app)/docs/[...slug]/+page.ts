import { error } from "@sveltejs/kit"
import type { Doc } from "$lib/types.js"

export async function load({ fetch, params }) {
    const res = await fetch("/api/docs")
    const docs: Doc[] = await res.json()

    try {
        const doc = await import(`../../../../docs/${params.slug}/+page.md`)
        return {
            ...doc.metadata,
            slug: params.slug,
            content: doc.default,
            docs,
        }
    } catch (e) {
        return error(404)
    }
}
