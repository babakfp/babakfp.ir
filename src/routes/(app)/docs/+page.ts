import { collections } from "$lib/markdown/collections.js"
import { docsSchema } from "$lib/markdown/schemas.js"

export const load = async () => {
    const entries = collections.getEntries("docs", docsSchema)
    const docs = entries.filter((entry) => entry.slug.split("/").length === 1)
    return { docs }
}
