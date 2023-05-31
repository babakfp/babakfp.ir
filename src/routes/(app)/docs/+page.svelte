<script lang="ts">
    import packages from "$portfolios/packages.json"
    import RepoCard from "$lib/cards/RepoCard.svelte"
</script>

<svelte:head>
    <title>Docs</title>
</svelte:head>

<h2 class="text-center text-4xl font-bold uppercase text-gray-50">DOCS</h2>

<ul class="mt-8 grid gap-4">
    {#each packages as pkg}
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
</ul>
