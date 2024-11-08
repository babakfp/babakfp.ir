import { redirect } from "@sveltejs/kit"
import { env } from "$lib/constants/env"

export const GET = () => {
    redirect(302, env.PUBLIC_GOOGLE_DRIVE_RESUME_URL)
}
