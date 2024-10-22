<script lang="ts">
    import type { Snippet } from "svelte"

    let {
        isOpen = $bindable(),
        children,
    }: {
        isOpen?: boolean
        children: Snippet
    } = $props()

    let wrapper = $state<HTMLDivElement>()

    const handleClick = () => {
        if (!wrapper) return

        isOpen = !isOpen

        if (isOpen) return

        const headerHeight =
            Number(
                getComputedStyle(document.body)
                    .getPropertyValue("--header-height")
                    .slice(0, -3),
            ) * 16

        if (wrapper.getBoundingClientRect().top - headerHeight < 0) {
            wrapper.scrollIntoView()
        }
    }
</script>

<div bind:this={wrapper} class="relative">
    <div
        class="max-h-96 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-64 after:bg-gradient-to-b after:from-transparent after:to-gray-900
		{isOpen ? '!max-h-none after:hidden' : 'overflow-hidden rounded'}"
    >
        {@render children()}
    </div>

    <div class="sticky bottom-4 mt-4 flex justify-center xl:bottom-8">
        <button class="btn" onclick={handleClick}>
            {isOpen ? "Show less" : "Show more"}
        </button>
    </div>
</div>
