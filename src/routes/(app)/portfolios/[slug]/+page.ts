import { error } from "@sveltejs/kit"
import { getCollectionEntry } from "$lib/markdown/collections"

export async function load({ params }) {
    const portfolio = await getCollectionEntry("portfolios", params.slug)

    if (!portfolio) {
        error(404)
    }

    return {
        ...portfolio.frontmatter,
        slug: params.slug,
        content: portfolio.content,
    }
}
