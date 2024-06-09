<script lang="ts">
    import CardFooter from "./CardFooter.svelte"
    import WordpressCard from "./WordpressCard.svelte"

    export let title: string
    export let description: string
    export let homepage: string
    export let thumb: string
    export let activeInstalls: string
    export let rating: number | null
    export let reviewsCount: number
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
