import { error } from "@sveltejs/kit"
import { docFrontmatterSchema, type DocFrontmatter } from "$lib/types.js"
import { getCollectionEntry } from "$lib/markdown/collections"

export async function load({ params }) {
    const doc = await getCollectionEntry(
        "docs",
        params.slug,
        docFrontmatterSchema,
    )

    if (!doc) {
        error(404)
    }

    return {
        ...(doc.frontmatter as DocFrontmatter),
        slug: params.slug,
        content: doc.content,
    }
}
