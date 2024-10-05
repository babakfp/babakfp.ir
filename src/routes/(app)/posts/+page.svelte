<script lang="ts">
    import SimpleTextCard from "$lib/components/cards/SimpleTextCard.svelte"

    export let data
</script>

<svelte:head>
    <title>Posts</title>
</svelte:head>

<h1 class="font-title text-center text-4xl text-gray-50">Posts</h1>

<ul class="mx-auto mt-8 grid max-w-prose gap-4">
    {#each data.posts as post}
        <li>
            <SimpleTextCard
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                href={post.href}
            />
        </li>
    {/each}
</ul>
