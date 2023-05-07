<script lang="ts">
    import OutClick from "svelte-outclick"
    import { browser } from "$app/environment"
    import { beforeNavigate } from "$app/navigation"
    import { page } from "$app/stores"
    import { isMainMenuOpen, mainMenuItems } from "$stores/mainMenu"
    import BluredBackdrop from "$lib/BluredBackdrop.svelte"
    import PrimMenuItem from "$lib/PrimMenuItem.svelte"
    import stopBodyScroll from "$utils/stopBodyScroll"

    beforeNavigate(() => ($isMainMenuOpen = false))

    $: if (browser) stopBodyScroll($isMainMenuOpen)
</script>

<svelte:window
    on:keydown={e =>
        $isMainMenuOpen && e.key === "Escape" && ($isMainMenuOpen = false)}
/>

<BluredBackdrop isVisible={$isMainMenuOpen} />

<nav
    id="main-menu-mobile"
    class="fixed inset-x-0 top-header-h z-40 w-full -translate-y-full duration-200 hide xl:hidden
	{$isMainMenuOpen && 'translate-y-0 show'}"
    aria-hidden={!$isMainMenuOpen}
    aria-label="Main menu"
    aria-labelledby="main-menu-toggle"
    role="region"
>
    <OutClick
        tag="div"
        class="bg-gray-900 py-4"
        excludeQuerySelectorAll="#main-menu-toggle"
        on:outclick={() => ($isMainMenuOpen = false)}
    >
        <ul>
            {#each $mainMenuItems as item}
                {#if item.href !== $page.url.pathname}
                    <li>
                        <PrimMenuItem
                            class="py-2 hover:bg-gray-50/10"
                            title={item.title}
                            href={item.href}
                            icon={item.icon}
                        />
                    </li>
                {/if}
            {/each}
        </ul>
    </OutClick>
</nav>
