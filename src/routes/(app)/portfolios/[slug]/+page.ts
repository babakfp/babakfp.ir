import { error } from "@sveltejs/kit"
import { collections } from "$lib/markdown/collections.js"

export const load = async ({ params }) => {
    const portfolio = collections.getEntry("portfolios", params.slug)

    if (!portfolio) {
        error(404)
    }

    return {
        slug: params.slug,
        default: portfolio.default,
    }
}
