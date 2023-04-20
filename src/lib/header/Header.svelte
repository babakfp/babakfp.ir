<script lang="ts">
	import { page } from "$app/stores"
	import { isBlogTocSidebarOpen } from "$stores/blog"
	import { isDocsTocSidebarOpen } from "$stores/docs"

	import MainMenuMobile from "./MainMenu/MainMenuMobile.svelte"
	import MainMenuDesktop from "./MainMenu/MainMenuDesktop.svelte"
	import MainMenuMobileToggle from "./MainMenu/MainMenuMobileToggle.svelte"
	import DocsMenuToggle from "$lib/docs/DocsMenuToggle.svelte"
	import TocMenuToggle from "$lib/Sidebar/TocMenuToggle.svelte"
</script>

<header class="sticky top-0 z-50 bg-gray-950">
	<div class="container flex h-header-h justify-between px-0">
		{#if $page.url.pathname === "/"}
			<div class="header-btn font-mono font-bold">BABAKFP</div>
		{:else}
			<a
				class="header-btn font-mono font-bold"
				href="/"
				aria-label="Go to home page"
			>
				BABAKFP
			</a>
		{/if}

		<div class="flex">
			<TocMenuToggle name="blog" bind:isOpen={$isBlogTocSidebarOpen} />
			<TocMenuToggle name="docs" bind:isOpen={$isDocsTocSidebarOpen} />

			<DocsMenuToggle />
			<MainMenuMobileToggle />
			<MainMenuDesktop />
		</div>
	</div>
</header>

<MainMenuMobile />
