<script lang="ts">
    import FrontendCard from "$lib/components/cards/FrontendCard/FrontendCard.svelte"
    import RtlThemeCard from "$lib/components/cards/RtlThemeCard.svelte"
    import WordpressPluginCard from "$lib/components/cards/WordpressPluginCard.svelte"
    import Section from "$lib/components/home/Section.svelte"
    import frontendPortfolios from "$lib/portfolios/frontend.json"
    import rtlthemeProducts from "$lib/portfolios/rtltheme-products.json"
    import wordpressPlugins from "$lib/portfolios/wordpress-plugins.json"
</script>

<svelte:head>
    <title>Portfolios</title>
</svelte:head>

<h1 class="text-center text-4xl font-black text-gray-50">Portfolios</h1>

<section class="mt-8">
    <ul class="grid gap-8 sm:px-12 lg:grid-cols-2 lg:gap-6 lg:gap-y-8 xl:px-0">
        {#each frontendPortfolios as portfolio}
            <FrontendCard
                slug={portfolio.slug}
                title={portfolio.title}
                description={portfolio.description}
                poster={portfolio.poster}
                technologies={portfolio.technologies}
                isSingleRow={portfolio.title === "Angle Berry" ? true : false}
            />
        {/each}
    </ul>
</section>

<Section title="WordPress.org plugins">
    {#each wordpressPlugins as plg}
        <li>
            <WordpressPluginCard {...plg} />
        </li>
    {/each}
</Section>

<Section title="WordPress products">
    {#each rtlthemeProducts as prd}
        <li>
            <RtlThemeCard {...prd} />
        </li>
    {/each}
</Section>
