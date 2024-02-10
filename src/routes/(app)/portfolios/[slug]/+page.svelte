<script lang="ts">
    import { fly } from "svelte/transition"
    import { page } from "$app/stores"
    import transition from "$utils/transition"
    import frontendPortfolios from "$portfolios/frontend.json"
    import IconArrowUpRightSquare from "$icons/IconArrowUpRightSquare.svelte"

    import LogoCSS from "$lib/tech/logos/LogoCSS.svelte"
    import LogoHTML from "$lib/tech/logos/LogoHTML.svelte"
    import LogoJavaScript from "$lib/tech/logos/LogoJavaScript.svelte"
    import LogoPocketBase from "$lib/tech/logos/LogoPocketBase.svelte"
    import LogoSass from "$lib/tech/logos/LogoSass.svelte"
    import LogoSvelte2 from "$lib/tech/logos/LogoSvelte2.svelte"
    import LogoTailwindCSS from "$lib/tech/logos/LogoTailwindCSS.svelte"
    import LogoTypeScript from "$lib/tech/logos/LogoTypeScript.svelte"

    export let data

    const portfolioData = frontendPortfolios.filter(
        portfolio => portfolio.slug === data.slug,
    )[0]

    const techComponents = {
        CSS: LogoCSS,
        HTML: LogoHTML,
        JavaScript: LogoJavaScript,
        PocketBase: LogoPocketBase,
        Sass: LogoSass,
        Svelte: LogoSvelte2,
        TailwindCSS: LogoTailwindCSS,
        TypeScript: LogoTypeScript,
    }
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
                class="sticky top-header-h z-1 flex flex-wrap gap-4 bg-gray-900 py-4"
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

            <div class="flex flex-wrap gap-2">
                {#each portfolioData.techNames as name}
                    {@const component = techComponents[name]}
                    {#if component}
                        <div
                            class="flex rounded bg-gray-800 p-2 text-xl sm:p-3 sm:text-2xl lg:p-4 lg:text-3xl"
                            title={name}
                        >
                            <svelte:component this={component} />
                        </div>
                    {/if}
                {/each}
            </div>

            <svelte:component this={data.content} />
        </article>
    </div>
{/key}
