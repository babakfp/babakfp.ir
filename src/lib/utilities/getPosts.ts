import { getCollectionEntries } from "$lib/markdown/collections"
import { postsFrontmatterSchema } from "$lib/markdown/frontmatterSchemas"

export const getPosts = async () => {
    const entries = await getCollectionEntries("posts", postsFrontmatterSchema)

    const posts = entries
        .filter((entry) => entry.slug.split("/").length === 1)
        .sort(
            (first, second) =>
                new Date(second.frontmatter.update).getTime() -
                new Date(first.frontmatter.update).getTime(),
        )

    return posts
}
