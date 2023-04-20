<script lang="ts">
	import { page } from "$app/stores"
	import posts from "$portfolios/posts.json"
	import PostCard from "$lib/cards/PostCard.svelte"
</script>

<div class="[zoom:0.8]">
	<h2 class="text-sm font-medium">OTHER BLOG POSTS</h2>

	<ul class="mt-4 space-y-4">
		{#each posts.filter(({ slug }) => slug !== $page.url.pathname.replace("/blog/", "")) as { slug, ...rest }}
			<li>
				<PostCard {...rest} href="/blog/{slug}" />
			</li>
		{/each}
	</ul>
</div>
