<script lang="ts">
    import SimpleTextCard from "$lib/components/cards/SimpleTextCard.svelte"

    let { data } = $props()
</script>

<svelte:head>
    <title>Docs</title>
</svelte:head>

<h1 class="font-title text-center text-4xl text-gray-50">Docs</h1>

<ul class="mx-auto mt-8 grid max-w-prose gap-4">
    {#each data.docs as doc}
        <li>
            <SimpleTextCard
                title={doc.frontmatter.title}
                description={doc.frontmatter.description}
                href="/docs/{doc.slug}"
            />
        </li>
    {/each}
</ul>
