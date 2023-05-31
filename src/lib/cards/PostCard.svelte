<script lang="ts">
    import { timeSince } from "$utils/timeSince"
    import SimpleTextCard from "./SimpleTextCard.svelte"

    export let title: string
    export let description: string
    export let updateDate: string
    export let publishDate: string
    export let slug: string
</script>

<SimpleTextCard {title} {description} href="/blog/{slug}">
    <li>Updated: {timeSince(new Date(updateDate))}</li>
    <li>Published: {timeSince(new Date(publishDate))}</li>
</SimpleTextCard>
