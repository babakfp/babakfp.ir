import { collections } from "$lib/markdown/collections.js"
import { postsSchema } from "$lib/markdown/schemas.js"

export const getPosts = async () => {
    const entries = collections.getEntries("posts", postsSchema)

    const posts = entries
        .filter((entry) => entry.slug.split("/").length === 1)
        .sort(
            (first, second) =>
                new Date(second.frontmatter.update).getTime() -
                new Date(first.frontmatter.update).getTime(),
        )

    return posts
}
