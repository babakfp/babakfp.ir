<script lang="ts">
    import "$lib/app.css"
    import type { Snippet } from "svelte"
    import { Toaster } from "svelte-hot-french-toast"
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
<Toaster />
{@render SmoothBlackToContentShadow()}

{#snippet SmoothBlackToContentShadow()}
    <div
        class="fixed inset-0 shadow-[inset_0_0_--spacing(4)_black] z-50 pointer-events-none"
    ></div>
{/snippet}
