<script lang="ts">
    import FrontendCard from "$lib/cards/FrontendCard/FrontendCard.svelte"
    import PostCard from "$lib/cards/PostCard.svelte"
    import RepoCard from "$lib/cards/RepoCard.svelte"
    import RtlThemeCard from "$lib/cards/RtlThemeCard.svelte"
    import WordpressPluginCard from "$lib/cards/WordpressPluginCard.svelte"
    import Section from "$lib/home/Section.svelte"
    import frontendPortfolios from "$lib/portfolios/frontend.json"
    import rtlthemeProducts from "$lib/portfolios/rtltheme-products.json"
    import wordpressPlugins from "$lib/portfolios/wordpress-plugins.json"

    export let data
</script>

<svelte:head>
    <title>Portfolios</title>
</svelte:head>

<h2 class="font-title text-center text-4xl text-gray-50">Portfolios</h2>

<p class="mt-4 text-center">
    My portfolios are all over the place. Here are some of them. Please check
    all links to my profiles on the Home page.
</p>

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

<Section title="Blog">
    {#each data.posts as post}
        <li>
            <PostCard {...post} />
        </li>
    {/each}
</Section>

<Section title="Docs">
    {#each data.packages as pkg}
        <li>
            <RepoCard
                title={pkg.title}
                description={pkg.description}
                href="/docs/{pkg.name}"
                version={pkg.version}
                starsCount={pkg.starsCount}
                downloadsCount={pkg.downloadsCount}
            />
        </li>
    {/each}
</Section>

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
