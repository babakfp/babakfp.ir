<script lang="ts">
    import FrontendCard from "$lib/components/cards/FrontendCard.svelte"
    import frontendPortfolios from "$lib/portfolios/frontend.json"
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
