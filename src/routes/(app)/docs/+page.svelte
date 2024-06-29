<script lang="ts">
    import RepoCard from "$lib/cards/RepoCard.svelte"

    export let data
</script>

<svelte:head>
    <title>Docs</title>
</svelte:head>

<h2 class="font-title text-center text-4xl text-gray-50">Docs</h2>

<ul class="mx-auto mt-8 grid max-w-prose gap-4">
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
</ul>
