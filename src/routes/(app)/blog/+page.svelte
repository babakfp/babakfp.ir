<script lang="ts">
	import posts from "$portfolios/posts.json"
	import PostCard from "$lib/cards/PostCard.svelte"
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h2 class="text-center text-4xl font-bold uppercase text-gray-50">Blog</h2>

<ul class="mt-8 grid gap-4">
	{#each posts as { slug, ...rest }}
		<li>
			<PostCard {...rest} href="/blog/{slug}" />
		</li>
	{/each}
</ul>
