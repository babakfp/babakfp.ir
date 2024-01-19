import { z } from "zod"
import type { Config } from "mdsvex-collections"

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
        docs: {
            type: "content",
            schema: z.object({
                title: z.string(),
            }),
        },
    },
} satisfies Config
