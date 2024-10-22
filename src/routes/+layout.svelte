<script lang="ts">
    import "$lib/app.css"
    import type { Snippet } from "svelte"
    import { LoadingBar } from "svelte-loading-bar"
    import Header from "$lib/components/Header/Index.svelte"

    let {
        children,
    }: {
        children: Snippet
    } = $props()
</script>

<LoadingBar />
<Header />
{@render children()}
