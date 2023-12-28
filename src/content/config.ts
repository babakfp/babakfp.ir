import { z } from "zod"

type CollectionConfig = {
    type: "content" | "data"
    schema?: z.AnyZodObject
}

type CollectionsConfig = {
    [name: string]: CollectionConfig
}

type Config = {
    collections?: CollectionsConfig
}

export default {
    collections: {
        posts: {
            type: "content",
            schema: z.object({
                title: z.string(),
                description: z.string(),
                updated: z.string(),
                published: z.string(),
            }),
        },
    },
} satisfies Config
