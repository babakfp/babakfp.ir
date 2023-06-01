<script lang="ts">
    import IconToggler from "$lib/IconToggler.svelte"
    import { isMainMenuOpen } from "$stores/mainMenu"
    import IconMenu from "$icons/IconMenu.svelte"
    import IconX from "$icons/IconX.svelte"
</script>

<button
    id="main-menu-toggle"
    class="header-btn xl:!hidden"
    on:click={() => ($isMainMenuOpen = !$isMainMenuOpen)}
    aria-label="{$isMainMenuOpen ? 'Close' : 'Open'} main menu"
    aria-controls="main-menu-mobile"
    aria-expanded={$isMainMenuOpen}
>
    <IconToggler class="text-2xl" isTrue={$isMainMenuOpen}>
        <svelte:fragment slot="first">
            <IconMenu />
        </svelte:fragment>
        <svelte:fragment slot="second">
            <IconX />
        </svelte:fragment>
    </IconToggler>
</button>
