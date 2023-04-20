<script lang="ts">
	import npmPackages from "$portfolios/npm-packages.json"
	import RepoCard from "$lib/cards/RepoCard.svelte"
</script>

<svelte:head>
	<title>Docs</title>
</svelte:head>

<h2 class="text-center text-4xl font-bold uppercase text-gray-50">DOCS</h2>

<ul class="mt-8 grid gap-4">
	{#each npmPackages as { name, ...rest }}
		<li>
			<RepoCard {...rest} href="/docs/{name}" />
		</li>
	{/each}
</ul>
