import { error } from "@sveltejs/kit"

export async function load({ params }) {
    const paths = import.meta.glob("/src/docs/**/+page.md")
    const path = paths[`/src/docs/${params.slug}/+page.md`]

    if (path) {
        const doc = await path()
        return {
            ...doc.metadata,
            slug: params.slug,
            content: doc.default,
        }
    }

    throw error(404)
}
