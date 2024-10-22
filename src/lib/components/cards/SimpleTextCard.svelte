<script lang="ts">
    import type { Snippet } from "svelte"
    import Card from "./Card.svelte"
    import CardDescription from "./CardDescription.svelte"
    import CardFooter from "./CardFooter.svelte"
    import CardTitle from "./CardTitle.svelte"

    let {
        title,
        description,
        href,
        children,
    }: {
        title: string
        description: string | undefined
        href: string
        children?: Snippet
    } = $props()
</script>

<Card {href} isExternal={false}>
    <div class="flex items-center gap-2">
        <CardTitle>{title}</CardTitle>
    </div>

    {#if description}
        <CardDescription class="mt-1.5">{description}</CardDescription>
    {/if}

    {#if children}
        <CardFooter>
            {@render children()}
        </CardFooter>
    {/if}
</Card>
