<script lang="ts">
    import type { Snippet } from "svelte"
    import CopyButton from "../components/CopyButton.svelte"
    import Pre from "../components/Pre.svelte"

    let {
        children,
        ...restProps
    }: {
        children: Snippet
        [key: string]: any
    } = $props()

    let pre = $state<HTMLPreElement>()
</script>

<Pre bind:pre {...restProps}>{@render children()}<CopyButton {pre} /></Pre>
