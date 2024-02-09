import { error } from "@sveltejs/kit"
import { portfoliosMetadataSchema, type DocMetadataSchema } from "$lib/types.js"
import { getCollectionEntry } from "mdsvex-collections"

export async function load({ params }) {
    const doc = await getCollectionEntry(
        "portfolios",
        params.slug,
        portfoliosMetadataSchema,
    )

    if (!doc) {
        error(404)
    }

    return {
        ...(doc.metadata as DocMetadataSchema),
        slug: params.slug,
        content: doc.content,
    }
}
