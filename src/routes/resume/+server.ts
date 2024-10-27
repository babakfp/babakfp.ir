import { redirect } from "@sveltejs/kit"
import { GOOGLE_DRIVE_RESUME_URL } from "$env/static/private"

export const GET = () => {
    redirect(302, GOOGLE_DRIVE_RESUME_URL)
}
