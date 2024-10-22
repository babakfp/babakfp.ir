<script lang="ts">
    import CardFooter from "./CardFooter.svelte"
    import WordpressCard from "./WordpressCard.svelte"

    let {
        title,
        description,
        homepage,
        thumb,
        activeInstalls,
        rating,
        reviewsCount,
    }: {
        title: string
        description: string
        homepage: string
        thumb: string
        activeInstalls: string
        rating: number | null
        reviewsCount: number
    } = $props()
</script>

<WordpressCard {title} {description} url={homepage} {thumb}>
    {#if activeInstalls || (reviewsCount && rating)}
        <CardFooter>
            {#if activeInstalls}
                <li>Active installs: {activeInstalls}</li>
            {/if}
            {#if reviewsCount && rating}
                <li>{reviewsCount} Reviews {rating}/5</li>
            {/if}
        </CardFooter>
    {/if}
</WordpressCard>
