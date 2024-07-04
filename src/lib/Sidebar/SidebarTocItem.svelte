<script lang="ts">
    import IconChevronRight from "$lib/icons/IconChevronRight.svelte"

    export let href: string
    export let isActive = false
    export let depthLvl: number
</script>

<a
    class="SidebarMenuItem px-container group block outline-inset xl:pr-0
	{isActive && 'pointer-events-none'}"
    {href}
    on:click
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
            <slot />
        </div>
    </div>
</a>
