import { redirect } from "@sveltejs/kit"
import { GOOGLE_DRIVE_RESUME_URL } from "$env/static/private"

export const GET = () => {
    if (!GOOGLE_DRIVE_RESUME_URL) {
        throw new Error("GOOGLE_DRIVE_RESUME_URL is not set.")
    }
    redirect(302, GOOGLE_DRIVE_RESUME_URL)
}
