import { getCollectionEntries } from "$lib/markdown/collections"
import { postsFrontmatterSchema } from "$lib/types"

export const getPosts = async () => {
    const entries = await getCollectionEntries("posts", postsFrontmatterSchema)

    const posts = entries
        .filter((entry) => entry.slug.split("/").length === 1)
        .map((entry) => ({
            ...entry.frontmatter,
            slug: entry.slug,
        }))
        .sort(
            (first, second) =>
                new Date(second.update).getTime() -
                new Date(first.update).getTime(),
        )

    return posts
}
