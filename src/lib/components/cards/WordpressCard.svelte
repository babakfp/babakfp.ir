<script lang="ts">
    import Card from "./Card.svelte"
    import CardDescription from "./CardDescription.svelte"
    import CardTitle from "./CardTitle.svelte"

    export let title: string
    export let description: string
    export let url: string
    export let thumb: string
</script>

<Card href={url} isExternal={true}>
    <CardTitle class="sm:hidden">{title}</CardTitle>

    <div class="mt-2 flex items-center gap-4 sm:mt-0">
        <div class="relative">
            <img
                class="aspect-square w-20 min-w-20 drop-shadow"
                src={thumb}
                alt={title}
                loading="lazy"
            />
            <img
                class="absolute inset-0 -z-1 scale-105 blur-2xl"
                src={thumb}
                alt={title}
                loading="lazy"
                aria-hidden="true"
            />
        </div>
        <div>
            <CardTitle class="hidden sm:block">{title}</CardTitle>
            <CardDescription class="sm:mt-1.5">{description}</CardDescription>
        </div>
    </div>

    <slot />
</Card>
