import { error } from "@sveltejs/kit"
import { getCollectionEntry } from "$lib/markdown/collections"
import { DocsFrontmatterSchema } from "$lib/types.js"

export async function load({ params }) {
    const doc = await getCollectionEntry(
        "docs",
        params.slug,
        DocsFrontmatterSchema,
    )

    if (!doc) {
        error(404)
    }

    return {
        ...doc.frontmatter,
        slug: params.slug,
        content: doc.content,
    }
}
