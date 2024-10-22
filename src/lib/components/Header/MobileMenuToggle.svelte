<script lang="ts">
    import IconMenu from "$lib/icons/IconMenu.svelte"
    import IconX from "$lib/icons/IconX.svelte"
    import IconToggler from "$lib/IconToggler.svelte"
    import { isMainMenuOpen } from "$lib/stores/mainMenu"
</script>

<button
    id="main-menu-toggle"
    class="header-btn xl:!hidden"
    onclick={() => ($isMainMenuOpen = !$isMainMenuOpen)}
    aria-label="{$isMainMenuOpen ? 'Close' : 'Open'} main menu"
    aria-controls="main-menu-mobile"
    aria-expanded={$isMainMenuOpen}
>
    <IconToggler class="text-2xl" isTrue={$isMainMenuOpen}>
        {#snippet first()}
            <IconMenu />
        {/snippet}
        {#snippet second()}
            <IconX />
        {/snippet}
    </IconToggler>
</button>
