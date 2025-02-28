<script lang="ts">
    import { OutClick } from "svelte-outclick"
    import { beforeNavigate } from "$app/navigation"
    import PrimMenuItem from "$lib/components/PrimMenuItem.svelte"
    import {
        isMainMenuOpen,
        mainMenuItems,
    } from "$lib/stores/mainMenu.svelte.js"
    import { focusTrap } from "$lib/utilities/focusTrap"

    beforeNavigate(() => (isMainMenuOpen.value = false))
</script>

<svelte:window
    onscroll={() => {
        isMainMenuOpen.value = false
    }}
    onkeydown={(e) => {
        if (isMainMenuOpen.value && e.key === "Escape") {
            isMainMenuOpen.value = false
        }
    }}
/>

<nav
    class="fixed inset-x-0 top-(--header-height) bottom-0 z-40 hidden xl:hidden {isMainMenuOpen.value &&
        'block!'}"
    aria-hidden={!isMainMenuOpen.value}
    aria-label="Main menu"
    aria-labelledby="main-menu-toggle"
    role="region"
>
    <div
        id="main-menu-backdrop"
        class="absolute inset-0 bg-gray-950/95"
        onclick={() => (isMainMenuOpen.value = false)}
    ></div>

    <OutClick
        id="main-menu-mobile"
        tag="div"
        class="relative border-b border-gray-800 bg-gray-900 py-4"
        excludeQuerySelectorAll="#main-menu-toggle, #main-menu-backdrop"
        onOutClick={() => (isMainMenuOpen.value = false)}
    >
        <ul use:focusTrap>
            {#each mainMenuItems as item}
                <li class="odd:bg-gray-50/[0.02]">
                    <PrimMenuItem
                        class="py-2 hover:bg-gray-50/10"
                        title={item.title}
                        href={item.href}
                    >
                        <item.icon />
                    </PrimMenuItem>
                </li>
            {/each}
        </ul>
    </OutClick>
</nav>
