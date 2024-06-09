<script lang="ts">
    import PostCard from "$lib/cards/PostCard.svelte"

    export let data
</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<h2 class="font-title text-center text-4xl text-gray-50">Blog</h2>

<ul class="mx-auto mt-8 grid max-w-prose gap-4">
    {#each data.posts as post}
        <li>
            <PostCard {...post} />
        </li>
    {/each}
</ul>
