<script lang="ts">
    import type { Snippet } from "svelte"
    import { OutClick } from "svelte-outclick"
    import type { ClassValue } from "svelte/elements"

    let {
        isOpen = $bindable(),
        class: class_,
        excluderQuery,
        children,
    }: {
        isOpen?: boolean
        class?: ClassValue
        excluderQuery: string
        children: Snippet
    } = $props()

    let backdrop = $state<HTMLDivElement>()
</script>

<div class={["relative z-40 hidden", { "block!": isOpen }, class_]}>
    <div
        class="fixed inset-0 bg-background/95"
        bind:this={backdrop}
        onclick={() => (isOpen = false)}
    ></div>

    <OutClick
        class="fixed inset-x-0 bottom-0 max-h-(--svh-no-header) overflow-y-auto overscroll-contain border-t border-gray-800 bg-background"
        excludeElements={[backdrop]}
        excludeQuerySelectorAll={excluderQuery}
        onOutClick={() => (isOpen = false)}
    >
        <div class="max-h-96">
            {@render children()}
        </div>
    </OutClick>
</div>
