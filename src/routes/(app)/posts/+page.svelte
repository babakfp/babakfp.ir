<script lang="ts">
    import PostCard from "$lib/components/cards/PostCard.svelte"

    let { data } = $props()
</script>

<svelte:head>
    <title>Posts</title>
</svelte:head>

<h1 class="text-center text-4xl font-black text-gray-50">Posts</h1>

<ul class="mx-auto mt-8 grid max-w-prose gap-4">
    {#each data.posts as post}
        <li>
            <PostCard
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                href={post.href}
            />
        </li>
    {/each}
</ul>
