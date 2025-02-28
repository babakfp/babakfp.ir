<script lang="ts">
    import type { Snippet } from "svelte"
    import { IconArrowUpRightSquare } from "$lib/components/icons"

    let {
        href,
        isExternal = false,
        class: class_,
        children,
    }: {
        href: string
        isExternal?: boolean
        class?: string
        children: Snippet
    } = $props()
</script>

<a
    class="{class_} highlight-gray-50/10 group relative block overflow-hidden rounded bg-gray-50/5 p-4 shadow-sm duration-200 hover:bg-gray-50/10 sm:p-6"
    {href}
    target={isExternal ? "_blank" : null}
>
    {@render children()}

    {#if isExternal}
        <div
            class="absolute top-0 right-0 flex -translate-x-4 translate-y-4 text-gray-400 sm:-translate-y-full sm:translate-x-full sm:scale-0 sm:duration-200 sm:group-hover:-translate-x-4 sm:group-hover:translate-y-4 sm:group-hover:scale-100"
        >
            <IconArrowUpRightSquare />
        </div>
    {/if}
</a>
