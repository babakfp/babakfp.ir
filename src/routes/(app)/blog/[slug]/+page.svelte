<script lang="ts">
    import { fly } from "svelte/transition"
    import { page } from "$app/stores"
    import BackToTopBtn from "$lib/BackToTopBtn.svelte"
    import IconChevronRight from "$lib/icons/IconChevronRight.svelte"
    import TocMenu from "$lib/Sidebar/TocMenu.svelte"
    import { isBlogTocSidebarOpen } from "$lib/stores/blog"
    import { timeSince } from "$lib/utils/timeSince"
    import transition from "$lib/utils/transition"

    export let data
</script>

<svelte:head>
    {#if data.title}
        <title>{data.title}</title>
    {/if}
    {#if data.description}
        <meta name="description" content={data.description} />
    {/if}
</svelte:head>

<main class="main xl:py-0">
    <div
        class="mx-auto max-w-prose pb-9 xl:grid xl:max-w-none xl:grid-cols-[1fr_auto] xl:justify-center xl:pb-0"
    >
        <div
            class="min-w-0 xl:border-r xl:border-gray-50/5 xl:pb-[--main-spacing-b] xl:pr-12 xl:pt-[--main-spacing-t]"
        >
            {#key $page.url.pathname}
                <article in:fly={transition}>
                    <ul class="flex items-center gap-2 text-sm">
                        <li>
                            <a class="link" href="/">HOME</a>
                        </li>
                        <IconChevronRight class="text-xs opacity-40" />
                        <li>
                            <a class="link" href="/blog">BLOG</a>
                        </li>
                    </ul>

                    {#if data.update && data.create}
                        <div
                            class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400"
                        >
                            {#if data.update}
                                <span>
                                    Update: <b title={data.update}>
                                        {timeSince(new Date(data.update))}
                                    </b>
                                </span>
                            {/if}
                            {#if data.create}
                                <span>
                                    Create: <b title={data.create}>
                                        {timeSince(new Date(data.create))}
                                    </b>
                                </span>
                            {/if}
                        </div>
                    {/if}

                    <div class="article-content">
                        {#if data.title}
                            <h1 class="mt-[--markdown-spacing-title]">
                                {data.title}
                            </h1>
                        {/if}

                        <svelte:component this={data.content} />
                    </div>
                </article>
            {/key}
        </div>

        <TocMenu name="blog" bind:isOpen={$isBlogTocSidebarOpen} />
    </div>
</main>

<BackToTopBtn />
