<script lang="ts">
	import OutClick from "svelte-outclick"
	import { browser } from "$app/environment"
	import { beforeNavigate } from "$app/navigation"
	import BluredBackdrop from "$lib/BluredBackdrop.svelte"
	import stopBodyScroll from "$utils/stopBodyScroll"

	export let isOpen = false
	export let id: string
	export let toggleButtonId: string
	export let ariaLabel: string
	export let side: "right" | "left" = "left"

	beforeNavigate(() => (isOpen = false))

	$: if (browser) stopBodyScroll(isOpen)
</script>

<svelte:window
	on:keydown={e => isOpen && e.key === "Escape" && (isOpen = false)}
/>

<BluredBackdrop isVisible={isOpen} />

<OutClick
	tag="nav"
	{id}
	class="sidebar fixed top-header-h bottom-0 left-0 z-40 w-full max-w-[var(--sidebar-width)] -translate-x-full overflow-y-auto overscroll-y-contain bg-gray-900 pb-12 pt-8 duration-200
		{isOpen && 'translate-x-0'}
		xl:z-0 xl:translate-x-0 xl:pt-12
		{side === 'left' && 'xl:left-[var(--remaining-x-spacing)] xl:ml-container-x'}
		{side === 'right' &&
		'xl:right-[var(--remaining-x-spacing)] xl:left-[unset] xl:mr-container-x'}
	"
	on:outclick={() => (isOpen = false)}
	excludeQuerySelectorAll="#{toggleButtonId}"
	aria-hidden={!isOpen}
	aria-label={ariaLabel}
	aria-labelledby="toggleButtonId"
	role="region"
>
	<slot />
</OutClick>

<style lang="postcss">
	:global(:root) {
		--remaining-x-spacing: calc(
			(var(--screen-w) - theme(maxWidth.screen-xl)) / 2
		);
	}
	@screen xl {
		:global(.sidebar::-webkit-scrollbar) {
			@apply bg-gray-50/5;
		}
	}
</style>
