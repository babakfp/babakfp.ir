<script lang="ts">
    import SimpleTextCard from "./SimpleTextCard.svelte"

    export let title: string
    export let description: string
    export let href: string
    export let version: string
    export let downloadsCount: number
    export let starsCount: number
</script>

<SimpleTextCard {title} {description} {href}>
    <li>v{version}</li>
    {#if starsCount}
        <li>Stars: {starsCount}</li>
    {/if}
    {#if downloadsCount}
        <li>Weekly Downloads: {downloadsCount}</li>
    {/if}
</SimpleTextCard>
