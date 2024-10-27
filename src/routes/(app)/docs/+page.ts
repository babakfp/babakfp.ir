import { getCollectionEntries } from "$lib/markdown/collections"
import { docsFrontmatterSchema } from "$lib/markdown/frontmatterSchemas"

export const load = async () => {
    const entries = await getCollectionEntries("docs", docsFrontmatterSchema)
    const docs = entries.filter((entry) => entry.slug.split("/").length === 1)
    return { docs }
}
