import { json } from "@sveltejs/kit"
import { getPackagesData } from "$utils/fetchNpmPackages/index"

export async function GET() {
	const packagesData = await getPackagesData()
	return json(packagesData)
}
