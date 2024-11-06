import { error } from "@sveltejs/kit"
import { collections } from "$lib/markdown/collections.js"
import { docsSchema } from "$lib/markdown/schemas.js"

export const load = async ({ params }) => {
    const doc = collections.getEntry("docs", params.slug, docsSchema)

    if (!doc) {
        error(404)
    }

    return { ...doc }
}
