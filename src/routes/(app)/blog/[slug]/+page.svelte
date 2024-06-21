<script lang="ts">
    import { fly } from "svelte/transition"
    import { page } from "$app/stores"
    import BackToTopBtn from "$lib/BackToTopBtn.svelte"
    import PostCard from "$lib/cards/PostCard.svelte"
    import IconChevronRight from "$lib/icons/IconChevronRight.svelte"
    import TocMenu from "$lib/Sidebar/TocMenu.svelte"
    import { isBlogTocSidebarOpen } from "$lib/stores/blog"
    import { timeSince } from "$lib/utils/timeSince"
    import transition from "$lib/utils/transition"

    export let data

    const recommendedPosts = data.posts.filter(({ slug }) => slug !== data.slug)
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
        class="mx-auto max-w-prose xl:grid xl:max-w-none xl:grid-cols-[1fr_auto] xl:justify-center"
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
                            <h1>{data.title}</h1>
                        {/if}

                        <svelte:component this={data.content} />
                    </div>
                </article>
            {/key}

            {#if recommendedPosts.length > 0}
                <hr class="my-8" />

                <div class="[zoom:0.8]">
                    <h2 class="font-bold">OTHER BLOG POSTS</h2>

                    <ul class="mt-4 space-y-4">
                        {#each recommendedPosts as post}
                            <li>
                                <PostCard {...post} />
                            </li>
                        {/each}
                    </ul>
                </div>
            {/if}
        </div>

        <TocMenu name="blog" bind:isOpen={$isBlogTocSidebarOpen} />
    </div>
</main>

<BackToTopBtn />
