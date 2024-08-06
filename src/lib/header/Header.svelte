<script lang="ts">
    import { page } from "$app/stores"
    import DocsMenuToggle from "$lib/docs/DocsMenuToggle.svelte"
    import TocMenuToggle from "$lib/Sidebar/TocMenuToggle.svelte"
    import { isBlogTocSidebarOpen } from "$lib/stores/blog"
    import { isDocsTocSidebarOpen } from "$lib/stores/docs"
    import MainMenuDesktop from "./MainMenu/MainMenuDesktop.svelte"
    import MainMenuMobile from "./MainMenu/MainMenuMobile.svelte"
    import MainMenuMobileToggle from "./MainMenu/MainMenuMobileToggle.svelte"

    $: isHome = $page.url.pathname === "/"
</script>

<header
    class="sticky top-0 z-50 h-[--header-h] border-b border-gray-800 bg-gray-900"
>
    <div class="container flex h-full justify-between px-0">
        <svelte:element
            this={!isHome ? "a" : "div"}
            class="header-btn font-mono font-bold"
            href={!isHome ? "/" : undefined}
            aria-label={!isHome ? "Go to home page" : undefined}
        >
            BABAKFP
        </svelte:element>

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
