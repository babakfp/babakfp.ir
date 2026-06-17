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
    <pre bind:this={ref} {...restProps}>{@render children()}</pre>
    <CopyButton pre={ref} />
</div>
