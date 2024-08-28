import { getCollectionEntries } from "$lib/markdown/collections"
import { docsFrontmatterSchema } from "$lib/types"

export const load = async () => {
    const entries = await getCollectionEntries("docs", docsFrontmatterSchema)

    const docs = entries
        .filter((entry) => entry.slug.split("/").length === 1)
        .map((entry) => ({
            ...entry.frontmatter,
            slug: entry.slug,
        }))

    return { docs }
}
