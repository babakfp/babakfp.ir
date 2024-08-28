<script lang="ts">
    import OutClick from "svelte-outclick"
    import { beforeNavigate } from "$app/navigation"
    import { focusTrap } from "$lib/focusTrap"
    import PrimMenuItem from "$lib/PrimMenuItem.svelte"
    import { isMainMenuOpen, mainMenuItems } from "$lib/stores/mainMenu"

    beforeNavigate(() => ($isMainMenuOpen = false))
</script>

<svelte:window
    on:scroll={() => {
        $isMainMenuOpen = false
    }}
    on:keydown={(e) => {
        if ($isMainMenuOpen && e.key === "Escape") {
            $isMainMenuOpen = false
        }
    }}
/>

<nav
    class="fixed inset-x-0 bottom-0 top-[--header-height] z-40 hidden xl:hidden {$isMainMenuOpen &&
        '!block'}"
    aria-hidden={!$isMainMenuOpen}
    aria-label="Main menu"
    aria-labelledby="main-menu-toggle"
    role="region"
>
    <div
        id="main-menu-backdrop"
        class="absolute inset-0 bg-gray-950/95"
        on:click={() => ($isMainMenuOpen = false)}
    />

    <OutClick
        id="main-menu-mobile"
        tag="div"
        class="relative border-b border-gray-800 bg-gray-900 py-4"
        excludeQuerySelectorAll="#main-menu-toggle, #main-menu-backdrop"
        on:outclick={() => ($isMainMenuOpen = false)}
    >
        <ul use:focusTrap>
            {#each $mainMenuItems as item}
                <li class="odd:bg-gray-50/[0.02]">
                    <PrimMenuItem
                        class="py-2 hover:bg-gray-50/10"
                        title={item.title}
                        href={item.href}
                    >
                        <svelte:component this={item.icon} />
                    </PrimMenuItem>
                </li>
            {/each}
        </ul>
    </OutClick>
</nav>
