<script lang="ts">
    import { fly } from "svelte/transition"
    import { page } from "$app/stores"
    import transition from "$utils/transition"
    import { timeSince } from "$utils/timeSince"
    import { isBlogTocSidebarOpen } from "$stores/blog"
    import { IconChevronRight } from "$icons"
    import BackToTopBtn from "$lib/BackToTopBtn.svelte"
    import TocMenu from "$lib/Sidebar/TocMenu.svelte"
    import PostCard from "$lib/cards/PostCard.svelte"

    export let data

    // prettier-ignore
    const {title, description, updateDate, publishDate} = data.posts.filter(({ slug }) => slug === $page.url.pathname.replace("/blog/", ""))[0]

    const otherPosts = data.posts.filter(
        ({ slug }) => slug !== $page.url.pathname.replace("/blog/", "")
    )
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
        class="mx-auto max-w-prose xl:grid xl:max-w-none xl:grid-cols-[1fr_auto] xl:justify-center"
    >
        <div
            class="min-w-0 xl:mr-4 xl:border-r xl:border-gray-50/5 xl:pb-[--main-spacing-b] xl:pr-12 xl:pt-[--main-spacing-t]"
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

                    <div
                        class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400"
                    >
                        <span>
                            Updated: <b title={updateDate}>
                                {timeSince(new Date(updateDate))}
                            </b>
                        </span>
                        <span>
                            Published: <b title={publishDate}>
                                {timeSince(new Date(publishDate))}
                            </b>
                        </span>
                    </div>

                    <div class="article-content">
                        <h1 class="mt-8">{title}</h1>

                        <slot />
                    </div>
                </article>
            {/key}

            {#if data.posts.length > 0}
                <hr class="my-8" />

                <div class="[zoom:0.8]">
                    <h2 class="font-bold">OTHER BLOG POSTS</h2>

                    <ul class="mt-4 space-y-4">
                        {#each otherPosts as { slug, ...rest }}
                            <li>
                                <PostCard {...rest} href="/blog/{slug}" />
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
