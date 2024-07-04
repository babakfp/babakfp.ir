import { error } from "@sveltejs/kit"
import { getCollectionEntry } from "$lib/markdown/collections"
import { docsFrontmatterSchema } from "$lib/types.js"

export const load = async ({ params }) => {
    const doc = await getCollectionEntry(
        "docs",
        params.slug,
        docsFrontmatterSchema,
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
