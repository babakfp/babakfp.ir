<script lang="ts">
    import OutClick from "svelte-outclick"
    import { beforeNavigate } from "$app/navigation"
    import BlurredBackdrop from "$lib/BlurredBackdrop.svelte"

    export let isOpen = false
    export let id: string
    export let toggleButtonId: string
    export let ariaLabel: string
    export let className = ""
    export { className as class }
    export let hideScrollbar = false

    beforeNavigate(() => (isOpen = false))
</script>

<svelte:window
    on:keydown={(e) => {
        if (isOpen && e.key === "Escape") {
            isOpen = false
        }
    }}
/>

<BlurredBackdrop
    id="{id}-backdrop"
    isVisible={isOpen}
    on:click={() => (isOpen = false)}
/>

<OutClick
    tag="nav"
    {id}
    class="
		{className}
		{hideScrollbar && 'hide-scrollbar'}
		sidebar fixed bottom-0 left-0 right-14 top-[--header-height] z-40 -translate-x-full overflow-y-auto overscroll-y-contain bg-gray-900 pb-[--main-pb] pt-[--main-pt] duration-200
		{isOpen && 'translate-x-0'}
		sm:w-72
		xl:sticky xl:bottom-auto xl:right-auto xl:z-0 xl:max-h-[--svh-no-header] xl:translate-x-0
	"
    on:outclick={() => (isOpen = false)}
    excludeQuerySelectorAll="#{toggleButtonId}, #{id}-backdrop"
    aria-hidden={!isOpen}
    aria-label={ariaLabel}
    aria-labelledby="toggleButtonId"
    role="region"
>
    <slot />
</OutClick>

<style lang="postcss">
    @screen lg {
        :global(.sidebar::-webkit-scrollbar) {
            @apply bg-gray-50/5;
        }
    }
    :global(.hide-scrollbar::-webkit-scrollbar) {
        @apply !w-0;
    }
</style>
