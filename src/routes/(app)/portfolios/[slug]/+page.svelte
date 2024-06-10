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
    import TechBox from "./TechBox.svelte"

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
    {#if data.title}
        <title>{data.title}</title>
    {/if}
</svelte:head>

{#key $page.url.pathname}
    <div in:fly={transition}>
        <article class="article-content">
            <h1>{portfolioData.title}</h1>

            <p class="text-xl leading-8">{portfolioData.description}</p>

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
                            <TechBox title={technology}>
                                <svelte:component this={tech.component} />
                            </TechBox>
                        {/if}
                    {/each}
                </div>
            {/if}

            <svelte:component this={data.content} />

            <h2>Gallery</h2>

            {#if portfolioData.gallery}
                {#each portfolioData.gallery as img}
                    <img class="w-full" src={img} alt={portfolioData.title} />
                {/each}
            {/if}

            <div
                class="sticky bottom-0 !my-0 flex gap-4 bg-gray-900 pb-8 pt-4 sm:justify-center sm:pb-4"
            >
                <a
                    class="btn-primary btn"
                    href={portfolioData.urls.main}
                    target="_blank"
                >
                    View Website
                    <IconArrowUpRightSquare />
                </a>
                {#if portfolioData.urls.github}
                    <a
                        class="btn"
                        href={portfolioData.urls.github}
                        target="_blank"
                    >
                        View Repository
                        <IconArrowUpRightSquare />
                    </a>
                {/if}
            </div>
        </article>
    </div>
{/key}
