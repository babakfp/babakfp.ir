<script lang="ts">
    import PostCard from "$lib/cards/PostCard.svelte"
    export let data
</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<h2 class="text-center text-4xl font-bold uppercase text-gray-50">Blog</h2>

<ul class="mt-8 grid gap-4">
    {#each data.posts as post}
        <li>
            <PostCard {...post} />
        </li>
    {/each}
</ul>
