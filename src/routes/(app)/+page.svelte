<script lang="ts">
    import { Toaster } from "svelte-french-toast"
    import frontendPortfolios from "$portfolios/frontend.json"
    import posts from "$portfolios/posts.json"
    import packages from "$portfolios/packages.json"
    import rtlthemeProducts from "$portfolios/rtltheme-products.json"
    import wordpressPlugins from "$portfolios/wordpress-plugins.json"
    import FrontendCard from "$lib/cards/FrontendCard.svelte"
    import RepoCard from "$lib/cards/RepoCard.svelte"
    import RtlThemeCard from "$lib/cards/RtlThemeCard.svelte"
    import WordpressPluginCard from "$lib/cards/WordpressPluginCard.svelte"
    import PostCard from "$lib/cards/PostCard.svelte"
    import HeroSection from "$lib/home/HeroSection.svelte"
    import Section from "$lib/home/Section.svelte"
</script>

<HeroSection />

<section class="mt-14">
    <ul class="grid gap-8 sm:px-12 lg:grid-cols-2 lg:gap-6 lg:gap-y-8 xl:px-0">
        {#each frontendPortfolios as portfolio}
            <FrontendCard {...portfolio} />
        {/each}
    </ul>
</section>

<Section title="Recent blogs">
    {#each posts as { slug, ...rest }}
        <li>
            <PostCard {...rest} href="/blog/{slug}" />
        </li>
    {/each}
</Section>

<Section title="NPM packages">
    {#each packages as { name, ...rest }}
        <li>
            <RepoCard {...rest} href="/docs/{name}" />
        </li>
    {/each}
</Section>

<Section title="Wordpress.org plugins">
    {#each wordpressPlugins as plg}
        <li>
            <WordpressPluginCard {...plg} />
        </li>
    {/each}
</Section>

<Section title="Wordpress products">
    {#each rtlthemeProducts as prd}
        <li>
            <RtlThemeCard {...prd} />
        </li>
    {/each}
</Section>

<Toaster />
