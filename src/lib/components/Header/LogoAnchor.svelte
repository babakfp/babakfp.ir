<script lang="ts">
    import type { Snippet } from "svelte"
    import { page } from "$app/state"

    let {
        children,
    }: {
        children: Snippet
    } = $props()

    const isHome = $derived(page.url.pathname === "/")
</script>

<svelte:element
    this={!isHome ? "a" : "div"}
    class="header-btn gap-2"
    href={!isHome ? "/" : undefined}
    aria-label={!isHome ? "Go to home page" : undefined}
>
    {@render children()}
    <span class="font-bold">babakfp</span>
</svelte:element>
