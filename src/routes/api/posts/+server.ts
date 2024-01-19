import { json } from "@sveltejs/kit"
import {
    type Post,
    postMetadataSchema,
    type PostMetadataSchema,
} from "$lib/types"
import { getCollectionEntries } from "mdsvex-collections"

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}

async function getPosts() {
    const entries = await getCollectionEntries("posts", postMetadataSchema)

    const posts: Post[] = entries
        .map(entry => ({
            ...(entry.metadata as PostMetadataSchema),
            slug: entry.slug,
        }))
        .sort(
            (first, second) =>
                new Date(second.published).getTime() -
                new Date(first.published).getTime(),
        )

    return posts
}
