import { json } from "@sveltejs/kit"
import { getPackagesData } from "$lib/utils/fetchNpmPackages"

export const prerender = true

const packages = [
    {
        title: "MDX Svelte",
        name: "mdx-svelte",
    },
    {
        title: "Svelte OutClick",
        name: "svelte-outclick",
    },
    {
        title: "TailwindCSS Addons",
        name: "tailwindcss-addons",
    },
]

export const GET = async () => {
    let packagesData = await getPackagesData(packages.map((pkg) => pkg.name))

    packagesData = packagesData.map((pkgData) => {
        const pkg = packages.filter((pkg) => pkg.name === pkgData.name)[0]
        return {
            title: pkg.title,
            ...pkgData,
        }
    })

    return json(packagesData)
}
