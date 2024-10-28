<script lang="ts">
    import { IconMenu, IconX } from "$lib/components/icons"
    import IconToggler from "$lib/components/IconToggler.svelte"
    import { isMainMenuOpen } from "$lib/stores/mainMenu"
</script>

<button
    id="main-menu-toggle"
    class="header-btn xl:!hidden"
    onclick={() => (isMainMenuOpen.value = !isMainMenuOpen.value)}
    aria-label="{isMainMenuOpen.value ? 'Close' : 'Open'} main menu"
    aria-controls="main-menu-mobile"
    aria-expanded={isMainMenuOpen.value}
>
    <IconToggler class="text-2xl" isTrue={isMainMenuOpen.value}>
        {#snippet first()}
            <IconMenu />
        {/snippet}
        {#snippet second()}
            <IconX />
        {/snippet}
    </IconToggler>
</button>
