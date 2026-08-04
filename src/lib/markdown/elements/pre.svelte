<script lang="ts">
    import type { Snippet } from "svelte"
    import type { HTMLAttributes } from "svelte/elements"
    import CopyButton from "../components/CopyButton.svelte"

    let {
        children,
        ...restProps
    }: {
        children: Snippet
    } & HTMLAttributes<HTMLPreElement> = $props()

    let ref = $state<HTMLPreElement>()
</script>

<div class="group relative">
    <!-- All of this complexity is to limit the button to not scroll out of code block from the bottom side. -->
    <div class="sticky top-(--header-height) float-right h-9 sm:h-17">
        <div class="absolute top-0 -right-4 sm:top-4 sm:right-4">
            <div
                class="opacity-0 group-focus-within:opacity-100 group-[:hover]:opacity-100 [&:has([disabled])]:opacity-100"
            >
                <CopyButton pre={ref} />
            </div>
        </div>
    </div>

    <pre bind:this={ref} {...restProps}>{@render children()}</pre>
</div>
