import { error } from "@sveltejs/kit"
import { z } from "zod"

const collectionSchema = z
    .string()
    .min(1)
    .regex(
        /^[a-z]+$/,
        "The collection name can only contain lowercase letters.",
    )

const slugSegmentSchema = z
    .string()
    .min(1)
    .regex(
        /^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/,
        "The collection entry name can only contain letters, numbers, and a single hyphen in between them.",
    )

export const validateCollection = (name: string) => {
    const result = collectionSchema.safeParse(name)
    if (result.success) return
    return error(400, result.error.message)
}

export const validateSlugSegment = (name: string) => {
    const result = slugSegmentSchema.safeParse(name)
    if (result.success) return
    return error(400, result.error.message)
}
