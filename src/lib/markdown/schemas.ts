import { z } from "zod"

export const postsSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    update: z.string().min(1),
    create: z.string().min(1),
})

export const docsSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1).optional(),
})
