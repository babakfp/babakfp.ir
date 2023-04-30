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

<main class="main xl:py-0">
	<div
		class="mx-auto max-w-prose xl:grid xl:max-w-none xl:grid-cols-[auto_auto] xl:justify-center"
	>
		<div
			class="xl:mr-4 xl:border-r xl:border-gray-50/5 xl:pb-[--main-spacing-b] xl:pr-12 xl:pt-[--main-spacing-t]"
		>
			<Article {title} {updateDate} {publishDate}>
				<slot />
			</Article>

			<OtherBlogPosts />
		</div>

		<TocMenu name="blog" bind:isOpen={$isBlogTocSidebarOpen} />
	</div>
</main>

<BackToTopBtn />
