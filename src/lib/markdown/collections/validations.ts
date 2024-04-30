import { error } from "@sveltejs/kit"
import * as v from "valibot"

const collectionNameSchema = v.string([
    v.minLength(1),
    v.regex(
        /^[a-z]+$/,
        "The collection name can only contain lowercase letters.",
    ),
])

export const validateCollectionName = (name: string) => {
    validateAnEntryName(collectionNameSchema, name)
}

// ---

const collectionEntryNameSchema = v.string([
    v.minLength(1),
    v.regex(
        /^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/,
        "The collection entry name can only contain letters, numbers, and a single hyphen in between them.",
    ),
])

export const validateCollectionEntryName = (name: string) => {
    validateAnEntryName(collectionEntryNameSchema, name)
}

// ---

const validateAnEntryName = (schema: v.StringSchema, name: string) => {
    const result = v.safeParse(schema, name)
    if (!result.success) {
        return error(400, result.issues[0].message)
    }
}
