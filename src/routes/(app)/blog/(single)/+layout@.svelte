<script lang="ts">
	import { page } from "$app/stores"
	import posts from "$portfolios/posts.json"
	import { isBlogTocSidebarOpen } from "$stores/blog"

	import Article from "./Article.svelte"
	import OtherBlogPosts from "./OtherBlogPosts.svelte"
	import BackToTopBtn from "$lib/BackToTopBtn.svelte"
	import TocMenu from "$lib/Sidebar/TocMenu.svelte"

	// prettier-ignore
	const {title, description, updateDate, publishDate} = posts.filter(({ slug }) => slug === $page.url.pathname.replace("/blog/", ""))[0]
</script>

<svelte:head>
	{#if title}
		<title>{title}</title>
	{/if}
	{#if description}
		<meta name="description" content={description} />
	{/if}
</svelte:head>

<main class="main">
	<div class="mx-auto max-w-prose lg:grid lg:max-w-none">
		<div class="article">
			<Article {title} {updateDate} {publishDate}>
				<slot />
			</Article>

			{#if posts.length > 0}
				<hr class="my-8" />
				<OtherBlogPosts />
			{/if}
		</div>

		<TocMenu name="blog" bind:isOpen={$isBlogTocSidebarOpen} />
	</div>
</main>

<BackToTopBtn />

<style lang="postcss">
	@screen xl {
		.article {
			/* prettier-ignore */
			--container: calc( theme(maxWidth.screen-xl) - theme(spacing.container-x) );
			--total-space-between: calc(theme(spacing.16) * 1);
			--total-sidebar-width: calc(var(--sidebar-width) * 1);
			/* prettier-ignore */
			width: calc( var(--container) - (var(--total-space-between) + var(--total-sidebar-width)) );
		}
	}
</style>
