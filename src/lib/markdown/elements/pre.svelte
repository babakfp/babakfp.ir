<script lang="ts">
    import type { Snippet } from "svelte"
    import CopyButton from "../components/CopyButton.svelte"
    import Pre from "../components/Pre.svelte"
    import type { HTMLAttributes } from "svelte/elements"

    let {
        children,
        ...restProps
    }: {
        children: Snippet
    } & HTMLAttributes<HTMLPreElement> = $props()

    let ref = $state<HTMLPreElement>()
</script>

<Pre bind:ref {...restProps}>{@render children()}<CopyButton pre={ref} /></Pre>
