<script lang="ts">
    import { fly } from "svelte/transition"
    import { page } from "$app/stores"
    import transition from "$lib/utils/transition"

    export let data

    const morePackageData = data.packages.find((pkg) => pkg.name === data.slug)
</script>

<svelte:head>
    {#if data.title}
        <title>{data.title}</title>
    {/if}
    {#if morePackageData?.description}
        <meta name="description" content={morePackageData?.description} />
    {/if}
</svelte:head>

{#key $page.url.pathname}
    <div
        class="min-w-0 xl:border-x xl:border-gray-50/5 xl:px-12 xl:pb-[--main-spacing-b] xl:pt-[--main-spacing-t]"
        in:fly={transition}
    >
        <article class="article-content">
            {#if data.title}
                <h1>{data.title}</h1>
            {/if}

            <svelte:component this={data.content} />
        </article>
    </div>
{/key}
