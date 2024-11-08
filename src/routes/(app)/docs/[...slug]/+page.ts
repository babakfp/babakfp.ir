import { error } from "@sveltejs/kit"
import { collections } from "$lib/markdown/collections.js"

export const load = async ({ params }) => {
    const doc = collections.getEntry("docs", params.slug)

    if (!doc) {
        error(404)
    }

    return { ...doc }
}
