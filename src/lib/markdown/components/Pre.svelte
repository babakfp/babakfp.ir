<script lang="ts">
    import type { Snippet } from "svelte"
    import type { HTMLAttributes } from "svelte/elements"

    let {
        ref = $bindable(),
        children,
        ...restProps
    }: {
        ref: HTMLPreElement | undefined
        children: Snippet
    } & HTMLAttributes<HTMLPreElement> = $props()
</script>

<pre
    bind:this={ref}
    {...restProps}
    class={["group relative", restProps.class]}>{@render children()}</pre>
