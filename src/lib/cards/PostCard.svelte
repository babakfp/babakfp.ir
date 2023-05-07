<script lang="ts">
    import { timeSince } from "$utils/timeSince"
    import { IconArticle } from "$icons"
    import SimpleTextCard from "./SimpleTextCard.svelte"

    export let title: string
    export let description: string
    export let href: string
    export let updateDate: string
    export let publishDate: string
</script>

<SimpleTextCard {title} {description} {href} icon={IconArticle}>
    <li>Updated: {timeSince(new Date(updateDate))}</li>
    <li>Published: {timeSince(new Date(publishDate))}</li>
</SimpleTextCard>
