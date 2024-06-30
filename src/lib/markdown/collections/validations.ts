import { error } from "@sveltejs/kit"
import { z } from "zod"

const collectionNameSchema = z
    .string()
    .min(1)
    .regex(
        /^[a-z]+$/,
        "The collection name can only contain lowercase letters.",
    )

export const validateCollectionName = (name: string) => {
    validateAnEntryName(collectionNameSchema, name)
}

// ---

const collectionEntryNameSchema = z
    .string()
    .min(1)
    .regex(
        /^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/,
        "The collection entry name can only contain letters, numbers, and a single hyphen in between them.",
    )

export const validateCollectionEntryName = (name: string) => {
    validateAnEntryName(collectionEntryNameSchema, name)
}

// ---

const validateAnEntryName = (schema: z.ZodString, name: string) => {
    const result = schema.safeParse(name)

    if (!result.success) {
        return error(400, result.error?.message)
    }
}
