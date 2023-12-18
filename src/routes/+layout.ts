import packagesJson from "$portfolios/packages.json"

export const prerender = true

export const load = async ({ fetch }) => {
    if (process.env.NODE_ENV === "production") {
        const res = await fetch("/api/packages")
        const packages = await res.json()
        return { packages }
    }

    return { packages: packagesJson }
}
