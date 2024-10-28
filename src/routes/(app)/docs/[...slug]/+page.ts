import { error } from "@sveltejs/kit"
import { getCollectionEntry } from "$lib/markdown/collections"
import { docsSchema } from "$lib/markdown/schemas.js"

export const load = async ({ params }) => {
    const doc = await getCollectionEntry("docs", params.slug, docsSchema)

    if (!doc) {
        error(404)
    }

    return { ...doc }
}
