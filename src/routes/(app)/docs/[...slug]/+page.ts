import { error } from "@sveltejs/kit"
import { getCollectionEntry } from "$utils/markdown"

export async function load({ params }) {
    const doc = await getCollectionEntry("docs", params.slug)

    if (doc) {
        return {
            ...doc.metadata,
            slug: params.slug,
            content: doc.content,
        }
    }

    error(404)
}
