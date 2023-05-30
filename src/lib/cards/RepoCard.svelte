<script lang="ts">
    import SimpleTextCard from "./SimpleTextCard.svelte"

    export let title: string
    export let description: string
    export let href: string
    export let version: string
    export let downloads: number
    export let stars: number
</script>

<SimpleTextCard {title} {description} {href}>
    <li>v{version}</li>
    {#if stars}
        <li>Stars: {stars}</li>
    {/if}
    {#if downloads}
        <li>Weekly Downloads: {downloads}</li>
    {/if}
</SimpleTextCard>
