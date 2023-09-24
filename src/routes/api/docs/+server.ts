import { json } from "@sveltejs/kit"
import type { Doc } from "$lib/types"

export async function GET() {
    const docs = await getDocs()
    return json(docs)
}

async function getDocs() {
    const docs: Doc[] = []

    const paths = import.meta.glob("/src/docs/**/+page.md", { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split("/").at(-2)
        if (file && typeof file === "object" && "metadata" in file && slug) {
            const metadata = file.metadata as Omit<Doc, "slug">
            const doc = { ...metadata, slug } satisfies Doc
            docs.push(doc)
        }
    }

    return docs
}
