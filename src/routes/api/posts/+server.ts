import { json } from "@sveltejs/kit"
import type { Post } from "$lib/types"

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}

async function getPosts() {
    let posts: Post[] = []

    const paths = import.meta.glob("/src/posts/**/+page.md", { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split("/").at(-2)
        const metadata = file.metadata
        const post = { ...metadata, slug }
        posts.push(post)
    }

    posts = posts.sort(
        (first, second) =>
            new Date(second.publishDate).getTime() -
            new Date(first.publishDate).getTime()
    )

    return posts
}
