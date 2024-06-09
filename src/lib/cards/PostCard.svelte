<script lang="ts">
    import { timeSince } from "$lib/utils/timeSince"
    import SimpleTextCard from "./SimpleTextCard.svelte"

    export let title: string
    export let description: string
    export let updated: string
    export let published: string
    export let slug: string
</script>

<SimpleTextCard {title} {description} href="/blog/{slug}">
    <li>Updated: {timeSince(new Date(updated))}</li>
    <li>Published: {timeSince(new Date(published))}</li>
</SimpleTextCard>
