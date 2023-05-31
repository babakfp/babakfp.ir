<script lang="ts">
    import { fly } from "svelte/transition"
    import { page } from "$app/stores"
    import transition from "$utils/transition"
    import { isDocsTocSidebarOpen } from "$stores/docs"
    import BackToTopBtn from "$lib/BackToTopBtn.svelte"
    import DocsMenu from "$lib/docs/DocsMenu.svelte"
    import TocMenu from "$lib/Sidebar/TocMenu.svelte"
    import { doc } from "./stores"
</script>

<svelte:head>
    {#if $doc.title}
        <title>{$doc.title}</title>
    {/if}
</svelte:head>

<main class="main xl:py-0">
    <div
        class="mx-auto max-w-prose xl:grid xl:max-w-none xl:grid-cols-[auto_1fr_auto] xl:justify-center"
    >
        <DocsMenu />

        {#key $page.url.pathname}
            <div
                class="min-w-0 xl:mr-4 xl:border-x xl:border-gray-50/5 xl:px-12 xl:pb-[--main-spacing-b] xl:pt-[--main-spacing-t]"
                in:fly={transition}
            >
                <article class="article-content">
                    {#if $doc.title}
                        <h1>{$doc.title}</h1>
                    {/if}

                    <slot />
                </article>
            </div>
        {/key}

        <TocMenu name="docs" bind:isOpen={$isDocsTocSidebarOpen} />
    </div>
</main>

<BackToTopBtn />
