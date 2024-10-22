<script lang="ts">
    import type { Snippet } from "svelte"
    import Layout from "$lib/markdown/layouts/Layout.svelte"

    let {
        children,
    }: {
        children: Snippet
    } = $props()
</script>

<Layout>
    {@render children()}
</Layout>
