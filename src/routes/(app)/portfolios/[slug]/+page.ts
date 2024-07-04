import { error } from "@sveltejs/kit"
import { getCollectionEntry } from "$lib/markdown/collections"

export const load = async ({ params }) => {
    const portfolio = await getCollectionEntry("portfolios", params.slug)

    if (!portfolio) {
        error(404)
    }

    return {
        slug: params.slug,
        content: portfolio.content,
    }
}
