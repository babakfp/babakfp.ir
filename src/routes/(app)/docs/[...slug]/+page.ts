import { error } from "@sveltejs/kit"
import { docMetadataSchema, type DocMetadataSchema } from "$lib/types.js"
import { getCollectionEntry } from "mdsvex-collections"

export async function load({ params }) {
    const doc = await getCollectionEntry("docs", params.slug, docMetadataSchema)

    if (!doc) {
        error(404)
    }

    return {
        ...(doc.metadata as DocMetadataSchema),
        slug: params.slug,
        content: doc.content,
    }
}
