<script lang="ts">
    import type { Snippet } from "svelte"
    import { OutClick } from "svelte-outclick"
    import { beforeNavigate } from "$app/navigation"
    import BlurredBackdrop from "$lib/components/BlurredBackdrop.svelte"

    let {
        isOpen = $bindable(),
        id,
        toggleButtonId,
        ariaLabel,
        class: class_,
        hideScrollbar,
        children,
    }: {
        isOpen?: boolean
        id: string
        toggleButtonId: string
        ariaLabel: string
        class?: string
        hideScrollbar?: boolean
        children: Snippet
    } = $props()

    beforeNavigate(() => (isOpen = false))

    let windowWidth = $state(0)

    $effect(() => {
        if (windowWidth >= 1280) {
            isOpen = true
        }
    })
</script>

<svelte:window
    onkeydown={(e) => {
        if (isOpen && e.key === "Escape") {
            isOpen = false
        }
    }}
    bind:innerWidth={windowWidth}
/>

<BlurredBackdrop
    id="{id}-backdrop"
    isVisible={isOpen}
    onclick={() => (isOpen = false)}
/>

<OutClick
    tag="nav"
    {id}
    class="
		{class_}
		{hideScrollbar && '[&::-webkit-scrollbar]:w-0!'}
		sidebar fixed top-(--header-height) right-14 bottom-0 left-0 z-40 -translate-x-full overflow-y-auto overscroll-y-contain bg-gray-900 pt-(--main-pt) pb-(--main-pb) duration-200
		{isOpen && 'translate-x-0'}
		sm:w-72
        xl:sticky
		xl:right-auto xl:bottom-auto xl:z-0 xl:max-h-(--svh-no-header) xl:translate-x-0 xl:[&::-webkit-scrollbar]:bg-gray-50/5
	"
    onOutClick={() => (isOpen = false)}
    excludeQuerySelectorAll="#{toggleButtonId}, #{id}-backdrop"
    aria-hidden={!isOpen}
    aria-label={ariaLabel}
    aria-labelledby="toggleButtonId"
    role="region"
>
    {@render children()}
</OutClick>
