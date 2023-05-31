// @ts-ignore
import fs from "fs"
import { json } from "@sveltejs/kit"
import { getPackagesData } from "$utils/fetchNpmPackages"

export const prerender = true

const packages = [
    {
        title: "Svelte OutClick",
        name: "svelte-outclick",
    },
    {
        title: "TailwindCSS Addons",
        name: "tailwindcss-addons",
    },
]

export async function GET({ url }) {
    let packagesData = await getPackagesData(packages.map(pkg => pkg.name))

    if (packagesData) {
        packagesData = packagesData.map(pkgData => {
            const pkg = packages.filter(pkg => pkg.name === pkgData.name)[0]
            return {
                title: pkg.title,
                ...pkgData,
            }
        })
    }

    if (url.searchParams.has("create")) {
        fs.writeFileSync(
            "src/lib/portfolios/packages.json",
            JSON.stringify(packagesData, null, 4)
        )
    }

    return json(packagesData)
}
