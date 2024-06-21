<script lang="ts">
    import { timeSince } from "$lib/utils/timeSince"
    import SimpleTextCard from "./SimpleTextCard.svelte"

    export let title: string
    export let description: string
    export let update: string
    export let create: string
    export let slug: string
</script>

<SimpleTextCard {title} {description} href="/blog/{slug}">
    <li>Update: {timeSince(new Date(update))}</li>
    <li>Create: {timeSince(new Date(create))}</li>
</SimpleTextCard>
