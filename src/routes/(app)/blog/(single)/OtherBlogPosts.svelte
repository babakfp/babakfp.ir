<script lang="ts">
    import { page } from "$app/stores"
    import posts from "$portfolios/posts.json"
    import PostCard from "$lib/cards/PostCard.svelte"

    const otherPosts = posts.filter(
        ({ slug }) => slug !== $page.url.pathname.replace("/blog/", "")
    )
</script>

{#if posts.length > 0}
    <hr class="my-8" />

    <div class="[zoom:0.8]">
        <h2 class="font-bold">OTHER BLOG POSTS</h2>

        <ul class="mt-4 space-y-4">
            {#each otherPosts as { slug, ...rest }}
                <li>
                    <PostCard {...rest} href="/blog/{slug}" />
                </li>
            {/each}
        </ul>
    </div>
{/if}
