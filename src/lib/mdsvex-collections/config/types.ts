import { z } from "zod"

export type CollectionConfig = {
    type: "content" | "data"
    schema?: z.AnyZodObject
}

export type CollectionsConfig = {
    [name: string]: CollectionConfig
}

export type Config = {
    collections?: CollectionsConfig
}
