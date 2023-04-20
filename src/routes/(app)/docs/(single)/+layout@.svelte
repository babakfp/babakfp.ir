<script lang="ts">
	import { fly } from "svelte/transition"
	import { page } from "$app/stores"
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

<main class="main">
	<div class="mx-auto max-w-prose xl:max-w-none">
		<DocsMenu />

		{#key $page.url.pathname}
			<article
				class="article-content"
				in:fly={{ y: -32, duration: 500, delay: 100 }}
			>
				<h1>{documentationPostData.title}</h1>
				<slot />
			</article>
		{/key}

		<TocMenu name="docs" bind:isOpen={$isDocsTocSidebarOpen} />
	</div>
</main>

<BackToTopBtn />

<style lang="postcss">
	@screen xl {
		article {
			/* prettier-ignore */
			--container: calc( theme(maxWidth.screen-xl) - theme(spacing.container-x) );
			--total-space-between: calc(theme(spacing.16) * 2);
			--total-sidebar-width: calc(var(--sidebar-width) * 2);
			/* prettier-ignore */
			width: calc( var(--container) - (var(--total-space-between) + var(--total-sidebar-width)) );
			@apply mx-auto;
		}
	}
</style>
