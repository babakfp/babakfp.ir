// @ts-ignore
import fs from "fs"
import { json } from "@sveltejs/kit"
import { getPackagesData } from "$utils/fetchNpmPackages"

export const prerender = true

export async function GET({ url }) {
    const packagesData = await getPackagesData([
        "svelte-outclick",
        "tailwindcss-addons",
    ])

    if (url.searchParams.has("create")) {
        fs.writeFileSync(
            "src/lib/portfolios/packages.json",
            JSON.stringify(packagesData, null, 4)
        )
    }

    return json(packagesData)
}
