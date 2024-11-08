import { collections } from "$lib/markdown/collections.js"

export const load = async () => {
    const entries = collections.getEntries("docs")
    const docs = entries.filter((entry) => entry.slug.split("/").length === 1)
    return { docs }
}
