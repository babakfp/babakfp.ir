<script lang="ts">
	import { fly } from "svelte/transition"
	import { page } from "$app/stores"
	import layoutTransition from "$utils/layoutTransition"
	import { docsSidebarItems } from "$stores/docs"
	import { isDocsTocSidebarOpen } from "$stores/docs"
	import npmPackages from "$portfolios/npm-packages.json"
	import BackToTopBtn from "$lib/BackToTopBtn.svelte"
	import DocsMenu from "$lib/docs/DocsMenu.svelte"
	import TocMenu from "$lib/Sidebar/TocMenu.svelte"

	let documentationPostData: {
		title: string
	}

	$: {
		documentationPostData = npmPackages.filter(
			({ name }) => name === $page.url.pathname.replace("/docs/", "")
		)[0]

		if (!documentationPostData) {
			$docsSidebarItems.forEach(item => {
				item.items.forEach(item => {
					item.items.forEach(item => {
						if (item.path === $page.url.pathname) {
							documentationPostData = {
								title: item.title,
							}
						}
					})
				})
			})
		}
	}
</script>

<svelte:head>
	{#if documentationPostData.title}
		<title>{documentationPostData.title}</title>
	{/if}
</svelte:head>

<main class="main xl:py-0">
	<div
		class="mx-auto max-w-prose xl:grid xl:max-w-none xl:grid-cols-[auto_1fr_auto] xl:justify-center"
	>
		<DocsMenu />

		{#key $page.url.pathname}
			<div
				id="article-wrapper"
				class="xl:mr-4 xl:border-x xl:border-gray-50/5 xl:px-12 xl:pb-[--main-spacing-b] xl:pt-[--main-spacing-t]"
				in:fly={layoutTransition}
			>
				<article class="article-content">
					<h1>{documentationPostData.title}</h1>
					<slot />
				</article>
			</div>
		{/key}

		<TocMenu name="docs" bind:isOpen={$isDocsTocSidebarOpen} />
	</div>
</main>

<BackToTopBtn />

<style lang="postcss">
	#article-wrapper {
		max-width: calc(1280px - var(--container-x) - var(--container-x) - 1rem - 14rem - 18rem);
	}
</style>
