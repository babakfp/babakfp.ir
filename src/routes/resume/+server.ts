import { redirect } from "@sveltejs/kit"
import { PUBLIC_GOOGLE_DRIVE_RESUME_URL } from "$env/static/public"

export const GET = () => {
    redirect(302, PUBLIC_GOOGLE_DRIVE_RESUME_URL)
}
