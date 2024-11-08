import { PUBLIC_GOOGLE_DRIVE_RESUME_URL } from "$env/static/public"

if (!PUBLIC_GOOGLE_DRIVE_RESUME_URL) {
    throw new Error("PUBLIC_GOOGLE_DRIVE_RESUME_URL is not set.")
}

export const env = {
    PUBLIC_GOOGLE_DRIVE_RESUME_URL,
}
