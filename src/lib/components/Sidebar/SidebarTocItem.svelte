<script lang="ts">
    import type { Snippet } from "svelte"
    import type { MouseEventHandler } from "svelte/elements"
    import { IconChevronRight } from "$lib/components/icons"

    let {
        href,
        isActive = false,
        depthLvl,
        children,
        onclick,
    }: {
        href: string
        isActive?: boolean
        depthLvl: number
        children: Snippet
        onclick: MouseEventHandler<HTMLAnchorElement>
    } = $props()
</script>

<a
    class="SidebarMenuItem group outline-inset block px-4 xl:pr-0
	{isActive && 'pointer-events-none'}"
    {href}
    {onclick}
>
    <div
        class="flex items-center gap-2 py-1 text-gray-400 duration-100 group-hover:text-gray-50
		{isActive && 'text-gray-50'}"
        style="padding-left: calc(1rem * {depthLvl - 2});"
    >
        {#if depthLvl > 2}
            <IconChevronRight class="text-[0.5rem]" />
        {/if}

        <div class="line-clamp-1">
            {@render children()}
        </div>
    </div>
</a>
