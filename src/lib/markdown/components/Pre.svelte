<script lang="ts">
    import type { Snippet } from "svelte"

    let {
        pre = $bindable(),
        children,
        ...restProps
    }: {
        pre: HTMLPreElement | undefined
        children: Snippet
        // TODO: Fix type.
        [key: string]: any
    } = $props()
</script>

<pre
    bind:this={pre}
    class="group relative"
    {...restProps}>{@render children()}</pre>
