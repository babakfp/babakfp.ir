import packagesJson from "$lib/portfolios/packages.json"
import type { Package } from "$lib/types"

export const prerender = true

export const load = async ({ fetch }) => {
    if (process.env.NODE_ENV === "production") {
        const res = await fetch("/api/packages")
        const packages: (Package & { title: string })[] = await res.json()
        return { packages }
    }

    return { packages: packagesJson }
}
