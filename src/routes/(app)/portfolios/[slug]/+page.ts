import { error } from "@sveltejs/kit"
import { getCollectionEntry } from "$lib/markdown/collections"
import { PortfoliosFrontmatterSchema } from "$lib/types.js"

export async function load({ params }) {
    const portfolio = await getCollectionEntry(
        "portfolios",
        params.slug,
        PortfoliosFrontmatterSchema,
    )

    if (!portfolio) {
        error(404)
    }

    return {
        ...portfolio.frontmatter,
        slug: params.slug,
        content: portfolio.content,
    }
}
