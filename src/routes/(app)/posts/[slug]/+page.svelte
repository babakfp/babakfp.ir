<script lang="ts">
    import { onMount } from "svelte"
    import { browser } from "$app/environment"
    import { page } from "$app/stores"
    import BackToTopBtn from "$lib/BackToTopBtn.svelte"
    import DesktopToc from "$lib/components/DesktopToc.svelte"
    import MobileToc from "$lib/components/MobileToc.svelte"
    import IconList from "$lib/icons/IconList.svelte"
    import { getHeadings, type Headings } from "$lib/utilities/getHeadings.js"
    import { timeSince } from "$lib/utils/timeSince"

    export let data

    let isTocOpen = false

    let headings: Headings = []

    onMount(() => (headings = getHeadings()))

    $: if (browser && $page.url.pathname) {
        headings = getHeadings()
    }
</script>

<svelte:head>
    {#if data.frontmatter.title}
        <title>{data.frontmatter.title}</title>
    {/if}
    {#if data.frontmatter.description}
        <meta name="description" content={data.frontmatter.description} />
    {/if}
</svelte:head>

<main
    class="container max-w-screen-xl xl:grid xl:grid-cols-[auto_1fr_auto] xl:gap-12"
>
    <div class="hidden min-w-72 max-w-72 xl:block" />

    <article
        class="mx-auto max-w-prose pb-[--main-pb] pt-[--main-pt] xl:mx-0 xl:min-h-[--svh-no-header]"
    >
        <ul class="flex items-center gap-2 text-sm">
            <li>
                <a class="link" href="/">HOME</a>
            </li>
            <span class="text-xs text-gray-700">/</span>
            <li>
                <a class="link" href="/posts">POSTS</a>
            </li>
        </ul>

        {#if data.frontmatter.update || data.frontmatter.create}
            <div
                class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400"
            >
                {#if data.frontmatter.update}
                    <span>
                        Updated: <b title={data.frontmatter.update}>
                            {timeSince(new Date(data.frontmatter.update))}
                        </b>
                    </span>
                {/if}
                {#if data.frontmatter.create}
                    <span>
                        Created: <b title={data.frontmatter.create}>
                            {timeSince(new Date(data.frontmatter.create))}
                        </b>
                    </span>
                {/if}
            </div>
        {/if}

        <div class="article-content">
            {#if data.frontmatter.title}
                <h1 class="mt-[--md-title-mt]">
                    {data.frontmatter.title}
                </h1>
            {/if}

            <svelte:component this={data.default} />
        </div>
    </article>

    <DesktopToc
        class="hidden max-w-72 xl:block xl:border-l xl:border-gray-50/5"
        {headings}
    />
</main>

{#if !isTocOpen}
    <button
        id="open-mobile-toc"
        class="btn fixed bottom-16 right-4 xl:!hidden"
        on:click={() => (isTocOpen = true)}
    >
        <IconList class="text-xl" />
    </button>
{/if}

<BackToTopBtn />

<MobileToc
    {headings}
    bind:isOpen={isTocOpen}
    excluderQuery="#open-mobile-toc"
/>
