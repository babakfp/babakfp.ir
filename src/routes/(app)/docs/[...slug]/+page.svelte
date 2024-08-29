<script lang="ts">
    import { onMount } from "svelte"
    import { browser } from "$app/environment"
    import { page } from "$app/stores"
    import BackToTopBtn from "$lib/BackToTopBtn.svelte"
    import DesktopToc from "$lib/components/DesktopToc.svelte"
    import MobileToc from "$lib/components/MobileToc.svelte"
    import IconBarsBottomRight from "$lib/icons/IconBarsBottomRight.svelte"
    import IconList from "$lib/icons/IconList.svelte"
    import { getHeadings, type Headings } from "$lib/utilities/getHeadings.js"
    import DocsMenu from "./DocsMenu.svelte"

    export let data

    let isTocOpen = false
    let isMenuOpen = false

    let headings: Headings = []

    onMount(() => (headings = getHeadings()))

    $: if (browser && $page.url.pathname) {
        headings = getHeadings()
    }
</script>

<svelte:head>
    {#if data.title}
        <title>{data.title}</title>
    {/if}
    {#if data?.description}
        <meta name="description" content={data.description} />
    {/if}
</svelte:head>

<main
    class="container max-w-screen-xl xl:grid xl:grid-cols-[auto_1fr_auto] xl:gap-12"
>
    <DocsMenu
        class="xl:border-r xl:border-gray-50/5"
        bind:isOpen={isMenuOpen}
    />

    <article
        class="article-content mx-auto max-w-prose pb-[--main-pb] pt-[--main-pt] xl:mx-0 xl:min-h-[--svh-no-header]"
    >
        {#if data.title}
            <h1>{data.title}</h1>
        {/if}

        <svelte:component this={data.content} />
    </article>

    <DesktopToc
        class="hidden max-w-72 xl:block xl:border-l xl:border-gray-50/5"
        {headings}
    />
</main>

{#if !isTocOpen}
    <button
        class="btn fixed bottom-16 right-4 xl:!hidden"
        on:click={() => (isTocOpen = true)}
    >
        <IconList class="text-xl" />
    </button>
{/if}

{#if !isMenuOpen}
    <button
        class="btn fixed bottom-28 right-4 xl:!hidden"
        on:click={() => (isMenuOpen = true)}
    >
        <IconBarsBottomRight class="text-xl" />
    </button>
{/if}

<BackToTopBtn />

<MobileToc
    {headings}
    bind:isOpen={isTocOpen}
    excluderQuery="#open-mobile-toc"
/>
