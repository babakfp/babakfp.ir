import { z } from "zod"

export const collectionSchema = z
    .string()
    .min(1)
    .regex(/^[a-z]+$/)

export const slugSegmentSchema = z
    .string()
    .min(1)
    .regex(/^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/)
