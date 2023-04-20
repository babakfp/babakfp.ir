<script lang="ts">
	import WordpressCard from "./WordpressCard.svelte"
	import CardFooter from "./CardFooter.svelte"

	export let title: string
	export let description: string
	export let href: string
	export let thumb: string
	export let sales: number
	export let rating: number | null
	export let reviewsCount: number
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
