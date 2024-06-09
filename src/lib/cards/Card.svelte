<script lang="ts">
    import IconArrowUpRightSquare from "$lib/icons/IconArrowUpRightSquare.svelte"

    export let href: string
    export let isExternal = false
    export let className = ""
    export { className as class }
</script>

<a
    class="{className} group relative block overflow-hidden rounded bg-gray-50 bg-opacity-5 p-4 shadow duration-200 highlight-gray-50/10 hover:bg-opacity-10"
    {href}
    target={isExternal ? "_blank" : null}
>
    <slot />

    {#if isExternal}
        <div
            class="absolute right-0 top-0 flex -translate-x-4 translate-y-4 text-gray-400 sm:-translate-y-full sm:translate-x-full sm:scale-0 sm:duration-200 sm:group-hover:-translate-x-4 sm:group-hover:translate-y-4 sm:group-hover:scale-100"
        >
            <IconArrowUpRightSquare />
        </div>
    {/if}
</a>
