import { error } from "@sveltejs/kit"
import { getCollectionEntry } from "mdsvex-collections"

export async function load({ params }) {
    const doc = await getCollectionEntry("docs", params.slug)

    if (!doc) {
        error(404)
    }

    return {
        ...doc.metadata,
        slug: params.slug,
        content: doc.content,
    }
}
