import type { Package } from "$lib/types"

export async function getPackagesData(packages: string[]) {
    let packagesData: Package[] = []

    const reposData = await getReposData(packages)
    const downloadsData = await getNpmPackagesDownloads(packages)
    const npmPackagesData = await getSomeNpmData(packages)

    if (reposData && downloadsData && npmPackagesData) {
        packages.forEach(packageName => {
            const repo = reposData.filter(pkg => pkg.name === packageName)[0]
            const downloads = downloadsData.filter(
                dl => dl.name === packageName
            )[0]
            const npmData = npmPackagesData.filter(
                pkg => pkg.name === packageName
            )[0]

            packagesData.push({
                ...repo,
                ...downloads,
                ...npmData,
                description: npmData.description || repo.description,
            })
        })
    }

    return packagesData
}

async function getReposData(packages: string[]) {
    const urls = packages.map(
        pkg => `https://api.github.com/repos/babakfp/${pkg}`
    )
    const data = await fetchAllUrls(urls)
    const someData = data.map(repo => ({
        name: repo.name as string,
        description: repo.description as string,
        avatarUrl: repo.owner.avatar_url as string,
        starsCount: repo.stargazers_count as number,
        forksCount: repo.forks as number,
        openIssuesCount: repo.open_issues_count as number,
    }))
    return someData
}

async function getSomeNpmData(packages: string[]) {
    const urls = packages.map(pkg => `https://registry.npmjs.org/${pkg}/latest`)
    const data = await fetchAllUrls(urls)
    const someData = data.map(pkg => ({
        name: pkg.name as string,
        description: pkg.description as string,
        version: pkg.version as string,
        license: pkg.license as string,
        fileCount: pkg.dist.fileCount as number,
        unpackedSize: pkg.dist.unpackedSize as number,
    }))
    return someData
}

async function getNpmPackagesDownloads(packages: string[]) {
    const urls = packages.map(
        pkg => `https://api.npmjs.org/downloads/point/last-week/${pkg}`
    )
    const data = await fetchAllUrls(urls)
    const downloads = data.map(dl => ({
        name: dl.package as string,
        downloadsCount: dl.downloads as number,
    }))
    return downloads
}

async function fetchAllUrls(urls: string[]) {
    const responses = await Promise.all(urls.map(url => fetch(url)))
    const data = await Promise.all(responses.map(async res => await res.json()))
    return data
}
