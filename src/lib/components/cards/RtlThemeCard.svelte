<script lang="ts">
    import CardFooter from "./CardFooter.svelte"
    import WordpressCard from "./WordpressCard.svelte"

    let {
        title,
        description,
        href,
        thumb,
        sales,
        rating,
        reviewsCount,
    }: {
        title: string
        description: string
        href: string
        thumb: string
        sales: number
        rating: number | null
        reviewsCount: number
    } = $props()
</script>

<WordpressCard {title} {description} url={href} {thumb}>
    {#if sales || (reviewsCount && rating)}
        <CardFooter>
            {#if sales}
                <li>Sales: {sales}</li>
            {/if}
            {#if reviewsCount && rating}
                <li>{reviewsCount} Reviews {rating}/5</li>
            {/if}
        </CardFooter>
    {/if}
</WordpressCard>
