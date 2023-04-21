import packagesFallbackData from "./packagesFallbackData.json"
import reposFallbackData from "./reposFallbackData.json"
import npmFallbackData from "./npmFallbackData.json"
import downloadsFallbackData from "./downloadsFallbackData.json"

const packages = ["svelte-outclick", "tailwindcss-addons"]

export async function load({ fetch }) {
	const packagesData = await getPackagesData(fetch)
	return { packagesData }
}

async function getPackagesData(fetch) {
	try {
		let packagesData = []

		const reposData = await getReposData(fetch)
		const downloadsData = await getNpmPackagesDownloads(fetch)
		const npmPackagesData = await getSomeNpmData(fetch)

		if (reposData && downloadsData && npmPackagesData) {
			packages.forEach(packageName => {
				const repo = reposData.filter(
					pkg => pkg.name === packageName
				)[0]
				const downloads = downloadsData.filter(
					dl => dl.package === packageName
				)[0].downloadsCount
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
	} catch (error) {
		console.error(error)
		return packagesFallbackData
	}
}

async function getReposData(fetch) {
	try {
		const urls = packages.map(
			pkg => `https://api.github.com/repos/babakfp/${pkg}`
		)
		const data = await fetchAllUrls(fetch, urls)
		const someData = data.map(repo => ({
			name: repo.name,
			description: repo.description,
			avatarUrl: repo.owner.avatar_url,
			starsCount: repo.stargazers_count,
			forksCount: repo.forks,
			openIssuesCount: repo.open_issues_count,
		}))
		return someData
	} catch (error) {
		console.error(error)
		return reposFallbackData
	}
}

async function getSomeNpmData(fetch) {
	try {
		const urls = packages.map(
			pkg => `https://registry.npmjs.org/${pkg}/latest`
		)
		const data = await fetchAllUrls(fetch, urls)
		const someData = data.map(pkg => ({
			name: pkg.name,
			description: pkg.description,
			version: pkg.version,
			license: pkg.license,
			fileCount: pkg.dist.fileCount,
			unpackedSize: pkg.dist.unpackedSize,
		}))
		return someData
	} catch (error) {
		console.error(error)
		return npmFallbackData
	}
}

async function getNpmPackagesDownloads(fetch) {
	try {
		const urls = packages.map(
			pkg => `https://api.npmjs.org/downloads/point/last-week/${pkg}`
		)
		const data = await fetchAllUrls(fetch, urls)
		const downloads = data.map(dl => ({
			package: dl.package,
			downloadsCount: dl.downloads,
		}))
		return downloads
	} catch (error) {
		console.error(error)
		return downloadsFallbackData
	}
}

async function fetchAllUrls(fetch, urls) {
	const responses = await Promise.all(urls.map(url => fetch(url)))
	const data = await Promise.all(responses.map(async res => await res.json()))
	return data
}
