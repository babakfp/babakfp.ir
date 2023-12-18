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

export async function GET() {
    let packagesData = await getPackagesData(packages.map(pkg => pkg.name))

    packagesData = packagesData.map(pkgData => {
        const pkg = packages.filter(pkg => pkg.name === pkgData.name)[0]
        return {
            title: pkg.title,
            ...pkgData,
        }
    })

    return json(packagesData)
}
