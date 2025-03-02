<script lang="ts">
    import { page } from "$app/state"
    import BackToTopBtn from "$lib/components/BackToTopBtn.svelte"
    import DesktopToc from "$lib/components/DesktopToc.svelte"
    import { IconList } from "$lib/components/icons"
    import MobileToc from "$lib/components/MobileToc.svelte"
    import { getHeadings, type Headings } from "$lib/utilities/getHeadings.js"
    import { timeSince } from "$lib/utilities/timeSince"

    let { data } = $props()

    let isTocOpen = $state(false)

    let headings: Headings = $state([])

    $effect(() => {
        if (page.url.pathname) {
            headings = getHeadings()
        }
    })
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
    class="container max-w-(--breakpoint-xl) xl:grid xl:grid-cols-[1fr_auto] xl:gap-12 xl:pl-8"
>
    <article
        class="mx-auto max-w-prose pt-(--main-pt) pb-(--main-pb) xl:mx-0 xl:min-h-(--svh-no-header) xl:max-w-none"
    >
        <ul class="flex items-center gap-2 text-sm">
            <li>
                <a class="link" href="/">Home</a>
            </li>
            <span class="text-xs text-gray-700">/</span>
            <li>
                <a class="link" href="/posts">Posts</a>
            </li>
        </ul>

        {#if data.frontmatter.update || data.frontmatter.create}
            <div
                class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400"
            >
                {#if data.frontmatter.create}
                    <span>
                        Created: <b title={data.frontmatter.create}>
                            {timeSince(new Date(data.frontmatter.create))}
                        </b>
                    </span>
                {/if}
                {#if data.frontmatter.update}
                    <span>
                        Updated: <b title={data.frontmatter.update}>
                            {timeSince(new Date(data.frontmatter.update))}
                        </b>
                    </span>
                {/if}
            </div>
        {/if}

        <div class="article-content">
            {#if data.frontmatter.title}
                <h1 class="mt-(--md-title-mt)">
                    {data.frontmatter.title}
                </h1>
            {/if}

            <data.default />
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
        class="btn fixed right-4 bottom-16 xl:hidden!"
        onclick={() => (isTocOpen = true)}
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
