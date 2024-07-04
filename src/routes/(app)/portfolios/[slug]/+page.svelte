<script lang="ts">
    import { fly } from "svelte/transition"
    import { page } from "$app/stores"
    import PocketBaseFill from "$lib/components/technology-logos/PocketBaseFill.svelte"
    import Sass from "$lib/components/technology-logos/Sass.svelte"
    import Svelte from "$lib/components/technology-logos/Svelte.svelte"
    import TailwindCSS from "$lib/components/technology-logos/TailwindCSS.svelte"
    import TypeScript from "$lib/components/technology-logos/TypeScript.svelte"
    import IconArrowUpRightSquare from "$lib/icons/IconArrowUpRightSquare.svelte"
    import frontendPortfolios from "$lib/portfolios/frontend.json"
    import transition from "$lib/utils/transition"
    import TechnologyBox from "./TechnologyBox.svelte"

    export let data

    const portfolioData = frontendPortfolios.filter(
        (portfolio) => portfolio.slug === data.slug,
    )[0]

    const technologyComponents = [
        { name: "PocketBase", component: PocketBaseFill },
        { name: "Sass", component: Sass },
        { name: "Svelte", component: Svelte },
        { name: "TailwindCSS", component: TailwindCSS },
        { name: "TypeScript", component: TypeScript },
    ]
</script>

<svelte:head>
    {#if portfolioData.title}
        <title>{portfolioData.title}</title>
    {/if}
</svelte:head>

{#key $page.url.pathname}
    <div in:fly={transition}>
        <article class="article-content pb-12 sm:pb-24">
            <h1>{portfolioData.title}</h1>

            <p class="!-mt-6 text-xl leading-8">{portfolioData.description}</p>

            <img
                class="w-full"
                src={portfolioData.poster}
                alt={portfolioData.title}
            />

            {#if portfolioData.technologies.length}
                <div class="flex flex-wrap gap-2">
                    {#each portfolioData.technologies as technology}
                        {@const tech = technologyComponents.find(
                            (tech) => tech.name === technology,
                        )}
                        {#if tech?.component}
                            <TechnologyBox title={technology}>
                                <svelte:component this={tech.component} />
                            </TechnologyBox>
                        {/if}
                    {/each}
                </div>
            {/if}

            <svelte:component this={data.content} />

            {#if portfolioData.gallery}
                <h2>Gallery</h2>

                {#each portfolioData.gallery as img}
                    <img class="w-full" src={img} alt={portfolioData.title} />
                {/each}
            {/if}
        </article>

        <div
            class="container fixed inset-x-0 bottom-0 border-t border-gray-800 bg-gray-900 sm:border-none"
        >
            <div class="flex justify-center gap-4 pb-8 pt-4">
                <a
                    class="btn btn-primary"
                    href={portfolioData.urls.main}
                    target="_blank"
                >
                    View website
                    <IconArrowUpRightSquare />
                </a>

                {#if portfolioData.urls.github}
                    <a
                        class="btn"
                        href={portfolioData.urls.github}
                        target="_blank"
                    >
                        View repository
                        <IconArrowUpRightSquare />
                    </a>
                {/if}
            </div>
        </div>
    </div>
{/key}
