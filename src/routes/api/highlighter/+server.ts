import { json } from "@sveltejs/kit"
import { highlighter } from "$utils/shiki/highlighter.js"

export const POST = async ({ request }) => {
    const { code, lang }: { code: string; lang?: string } = await request.json()
    const data = await highlighter(code, lang)
    return json(data)
}
