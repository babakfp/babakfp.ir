<script lang="ts">
	import { IconChevronRight } from "$icons"

	export let href: string
	export let isActive = false
	export let depthLvl: number
</script>

<a
	class="SidebarMenuItem group block px-4 outline-inset
	{isActive && 'pointer-events-none'}"
	{href}
>
	<div
		class="flex items-center gap-2 py-2 text-gray-400 duration-100 group-hover:text-gray-50
		{isActive && 'text-gray-50'}"
		style="padding-left: calc(1rem * {depthLvl - 2});"
	>
		{#if depthLvl > 2}
			<IconChevronRight class="max-h-2 min-h-2 min-w-2 max-w-2" />
		{/if}

		<div class="line-clamp-1">
			<slot />
		</div>
	</div>
</a>

<style lang="postcss">
	:global(.SidebarMenuItem code) {
		@apply inline-code;
	}
</style>
