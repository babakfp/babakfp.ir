import { getCollectionEntries } from "$lib/markdown/collections"
import { docsSchema } from "$lib/markdown/schemas"

export const load = async () => {
    const entries = await getCollectionEntries("docs", docsSchema)
    const docs = entries.filter((entry) => entry.slug.split("/").length === 1)
    return { docs }
}
