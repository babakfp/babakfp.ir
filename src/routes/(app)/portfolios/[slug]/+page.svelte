<script lang="ts">
    import { fly } from "svelte/transition"
    import { page } from "$app/stores"
    import transition from "$utils/transition"
    import frontendPortfolios from "$portfolios/frontend.json"
    import IconArrowUpRightSquare from "$icons/IconArrowUpRightSquare.svelte"

    import LogoCSS from "$lib/tech/logos/LogoCSS.svelte"
    import LogoHTML from "$lib/tech/logos/LogoHTML.svelte"
    import LogoJavaScript from "$lib/tech/logos/LogoJavaScript.svelte"
    import LogoPocketBase2 from "$lib/tech/logos/LogoPocketBase2.svelte"
    import LogoSass from "$lib/tech/logos/LogoSass.svelte"
    import LogoSvelte2 from "$lib/tech/logos/LogoSvelte2.svelte"
    import LogoTailwindCSS from "$lib/tech/logos/LogoTailwindCSS.svelte"
    import LogoTypeScript from "$lib/tech/logos/LogoTypeScript.svelte"
    import TechBox from "./TechBox.svelte"

    export let data

    const portfolioData = frontendPortfolios.filter(
        portfolio => portfolio.slug === data.slug,
    )[0]

    const techComponents = [
        { name: "CSS", component: LogoCSS },
        { name: "HTML", component: LogoHTML },
        { name: "JavaScript", component: LogoJavaScript },
        { name: "PocketBase", component: LogoPocketBase2 },
        { name: "Sass", component: LogoSass },
        { name: "Svelte", component: LogoSvelte2 },
        { name: "TailwindCSS", component: LogoTailwindCSS },
        { name: "TypeScript", component: LogoTypeScript },
    ]
</script>

<svelte:head>
    {#if data.title}
        <title>{data.title}</title>
    {/if}
</svelte:head>

{#key $page.url.pathname}
    <div
        class="min-w-0 xl:mr-4 xl:border-x xl:border-gray-50/5 xl:px-12 xl:pb-[--main-spacing-b] xl:pt-[--main-spacing-t]"
        in:fly={transition}
    >
        <article class="article-content">
            <h1>{portfolioData.title}</h1>

            <div
                class="sticky top-header-h z-1 !-my-4 flex flex-wrap gap-4 bg-gray-900 py-4"
            >
                <a
                    class="btn btn-link"
                    href={portfolioData.links.main}
                    target="_blank"
                >
                    View Website
                    <IconArrowUpRightSquare />
                </a>
                {#if portfolioData.links.github}
                    <a
                        class="btn"
                        href={portfolioData.links.github}
                        target="_blank"
                    >
                        View Repository
                        <IconArrowUpRightSquare />
                    </a>
                {/if}
            </div>

            <p>{portfolioData.description}</p>

            <img
                class="w-full"
                src={portfolioData.poster}
                alt={portfolioData.title}
            />

            {#if portfolioData.techNames.length}
                <div class="flex flex-wrap gap-2">
                    {#each portfolioData.techNames as name}
                        {@const component = techComponents.find(
                            tech => tech.name === name,
                        )?.component}
                        {#if component}
                            <TechBox title={name} {component} />
                        {/if}
                    {/each}
                </div>
            {/if}

            <svelte:component this={data.content} />
        </article>
    </div>
{/key}
