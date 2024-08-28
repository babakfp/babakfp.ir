<script lang="ts">
    import OutClick from "svelte-outclick"

    export let isOpen = false
    export let class_ = ""
    export { class_ as class }
    export let excluderQuery: string

    let backdrop: HTMLDivElement
</script>

<div class="relative z-40 hidden {isOpen && '!block'} {class_}">
    <div
        class="fixed inset-0 bg-gray-950/95"
        bind:this={backdrop}
        on:click={() => (isOpen = false)}
    />

    <OutClick
        class="fixed inset-x-0 bottom-0 max-h-[--svh-no-header] overflow-y-auto overscroll-contain border-t border-gray-800 bg-gray-900 [&::-webkit-scrollbar]:w-0"
        excludeElements={[backdrop]}
        excludeQuerySelectorAll={excluderQuery}
        on:outclick={() => (isOpen = false)}
    >
        <div class="max-h-96">
            <slot />
        </div>
    </OutClick>
</div>
