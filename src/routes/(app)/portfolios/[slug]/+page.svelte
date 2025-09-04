<script lang="ts">
    import type { Component } from "svelte"
    import { page } from "$app/state"
    import { IconArrowUpRightSquare } from "$lib/components/icons"
    import {
        PocketBaseFill,
        Sass,
        Svelte,
        TailwindCss,
        TypeScript,
    } from "$lib/components/technology-logos"
    import frontendPortfolios from "$lib/portfolios/frontend.json"

    let { data } = $props()

    const portfolioData = frontendPortfolios.filter(
        (portfolio) => portfolio.slug === page.params.slug,
    )[0]

    const technologyComponents = [
        { name: "PocketBase", component: PocketBaseFill },
        { name: "Sass", component: Sass },
        { name: "Svelte", component: Svelte },
        { name: "Tailwind CSS", component: TailwindCss },
        { name: "TypeScript", component: TypeScript },
    ]
</script>

<svelte:head>
    {#if portfolioData.title}
        <title>{portfolioData.title}</title>
    {/if}
</svelte:head>

<article class="article-content pb-12 sm:pb-24">
    <h1>{portfolioData.title}</h1>

    <p class="text-xl leading-8">{portfolioData.description}</p>

    <img
        class="w-full"
        src={portfolioData.poster}
        alt={portfolioData.title}
        width="1797"
        height="1011"
    />

    {#if portfolioData.technologies.length}
        <div class="flex flex-wrap gap-2">
            {#each portfolioData.technologies as technology}
                {@const tech = technologyComponents.find(
                    (tech) => tech.name === technology,
                )}
                {#if tech?.component}
                    {@render TechnologyBox({
                        title: technology,
                        Children: tech.component,
                    })}
                {/if}
            {/each}
        </div>
    {/if}

    <data.portfolio.default />

    {#if portfolioData.gallery}
        <h2>Gallery</h2>

        {#each portfolioData.gallery as img}
            <img class="w-full" src={img} alt={portfolioData.title} />
        {/each}
    {/if}
</article>

<div
    class="fixed inset-x-0 bottom-0 container max-w-(--breakpoint-xl) border-t border-gray-800 bg-gray-900 sm:border-none"
>
    <div class="flex justify-center gap-4 pt-4 pb-8">
        <a
            class="btn btn-primary"
            href={portfolioData.urls.main}
            target="_blank"
        >
            View website
            <IconArrowUpRightSquare />
        </a>

        {#if portfolioData.urls.github}
            <a class="btn" href={portfolioData.urls.github} target="_blank">
                View repository
                <IconArrowUpRightSquare />
            </a>
        {/if}
    </div>
</div>

{#snippet TechnologyBox({
    title,
    Children,
}: {
    title: string
    Children: Component
})}
    <div class="flex rounded bg-gray-800 p-4 text-3xl" {title}>
        <Children />
    </div>
{/snippet}
