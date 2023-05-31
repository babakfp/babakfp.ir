<script lang="ts">
    import SimpleTextCard from "./SimpleTextCard.svelte"

    export let title: string
    export let description: string
    export let href: string
    export let version: string
    export let starsCount: number
    export let downloadsCount: number
</script>

<SimpleTextCard {title} {description} {href}>
    <li>v{version}</li>
    {#if downloadsCount}
        <li>Weekly Downloads: {downloadsCount}</li>
    {/if}
    {#if starsCount}
        <li>Stars: {starsCount}</li>
    {/if}
</SimpleTextCard>
