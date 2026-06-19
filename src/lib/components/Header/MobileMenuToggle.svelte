<script lang="ts">
    import IconToggler from "$lib/components/IconToggler.svelte"
    import { isMainMenuOpen } from "$lib/stores/mainMenu.svelte.js"
    import IconXRegular from "phosphor-icons-svelte/IconXRegular.svelte"
    import IconEqualsRegular from "phosphor-icons-svelte/IconEqualsRegular.svelte"
</script>

<button
    id="main-menu-toggle"
    class="header-btn xl:hidden!"
    onclick={() => (isMainMenuOpen.value = !isMainMenuOpen.value)}
    aria-label="{isMainMenuOpen.value ? 'Close' : 'Open'} main menu"
    aria-controls="main-menu-mobile"
    aria-expanded={isMainMenuOpen.value}
>
    <IconToggler class="text-2xl" isTrue={isMainMenuOpen.value}>
        {#snippet first()}
            <IconEqualsRegular />
        {/snippet}
        {#snippet second()}
            <IconXRegular />
        {/snippet}
    </IconToggler>
</button>
