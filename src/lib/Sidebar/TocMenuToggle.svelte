<script lang="ts">
    import { page } from "$app/stores"
    import IconList from "$lib/icons/IconList.svelte"
    import IconX from "$lib/icons/IconX.svelte"
    import IconToggler from "$lib/IconToggler.svelte"

    export let name: string
    export let isOpen: boolean
</script>

{#if $page.url.pathname.startsWith(`/${name}`) && $page.url.pathname !== `/${name}`}
    <button
        id="{name}-toc-menu-toggle"
        class="header-btn px-2 xl:!hidden"
        on:click={() => (isOpen = !isOpen)}
        aria-label="isOpen
			? 'Close'
			: 'Open'} {name} (on this page) menu"
        aria-controls="{name}-toc-menu"
        aria-expanded={isOpen}
    >
        <IconToggler class="text-2xl" isTrue={isOpen}>
            <svelte:fragment slot="first">
                <IconList />
            </svelte:fragment>
            <svelte:fragment slot="second">
                <IconX />
            </svelte:fragment>
        </IconToggler>
    </button>
{/if}
