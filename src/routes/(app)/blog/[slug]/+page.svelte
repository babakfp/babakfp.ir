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
    {#if data.title}
        <title>{data.title}</title>
    {/if}
    {#if data.description}
        <meta name="description" content={data.description} />
    {/if}
</svelte:head>

<div
    class="container max-w-screen-xl xl:grid xl:grid-cols-[1fr_auto] xl:justify-center"
>
    <main
        class="mx-auto min-h-[--svh-no-header] min-w-0 max-w-prose pb-[--main-pb] pt-[--main-pt] xl:max-w-none xl:border-r xl:border-gray-50/5 xl:pr-12"
    >
        <article>
            <ul class="flex items-center gap-2 text-sm">
                <li>
                    <a class="link" href="/">HOME</a>
                </li>
                <span class="text-xs text-gray-700">/</span>
                <li>
                    <a class="link" href="/blog">BLOG</a>
                </li>
            </ul>

            {#if data.update || data.create}
                <div
                    class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400"
                >
                    {#if data.update}
                        <span>
                            Updated: <b title={data.update}>
                                {timeSince(new Date(data.update))}
                            </b>
                        </span>
                    {/if}
                    {#if data.create}
                        <span>
                            Created: <b title={data.create}>
                                {timeSince(new Date(data.create))}
                            </b>
                        </span>
                    {/if}
                </div>
            {/if}

            <div class="article-content">
                {#if data.title}
                    <h1 class="mt-[--md-title-mt]">
                        {data.title}
                    </h1>
                {/if}

                <svelte:component this={data.content} />
            </div>
        </article>
    </main>

    <DesktopToc class="hidden max-w-72 xl:block" {headings} />
</div>

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
