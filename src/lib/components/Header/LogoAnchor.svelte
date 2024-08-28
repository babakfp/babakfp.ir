<script lang="ts">
    import { page } from "$app/stores"

    $: isHome = $page.url.pathname === "/"
</script>

<svelte:element
    this={!isHome ? "a" : "div"}
    class="header-btn gap-2"
    href={!isHome ? "/" : undefined}
    aria-label={!isHome ? "Go to home page" : undefined}
>
    <slot />
    <span class="font-bold">BABAKFP</span>
</svelte:element>
