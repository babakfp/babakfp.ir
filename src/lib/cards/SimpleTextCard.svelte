<script lang="ts">
    import Card from "./Card.svelte"
    import CardTitle from "./CardTitle.svelte"
    import CardDescription from "./CardDescription.svelte"
    import CardFooter from "./CardFooter.svelte"

    export let title: string
    export let description: string
    export let href: string
    export let icon: any
</script>

<Card {href} isExternal={false}>
    <div class="flex items-center gap-2">
        <svelte:component this={icon} class="text-lg text-gray-400" />
        <CardTitle>{title}</CardTitle>
    </div>

    {#if description}
        <CardDescription class="mt-1.5">{description}</CardDescription>
    {/if}

    <CardFooter>
        <slot />
    </CardFooter>
</Card>
