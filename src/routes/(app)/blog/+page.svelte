<script lang="ts">
    import SimpleTextCard from "$lib/components/cards/SimpleTextCard.svelte"

    export let data
</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<h1 class="font-title text-center text-4xl text-gray-50">Blog</h1>

<ul class="mx-auto mt-8 grid max-w-prose gap-4">
    {#each data.posts as post}
        <li>
            <SimpleTextCard
                title={post.title}
                description={post.description}
                href="/blog/{post.slug}"
            />
        </li>
    {/each}
</ul>
