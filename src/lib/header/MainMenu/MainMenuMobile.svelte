<script lang="ts">
    import OutClick from "svelte-outclick"
    import { beforeNavigate } from "$app/navigation"
    import BlurredBackdrop from "$lib/BlurredBackdrop.svelte"
    import PrimMenuItem from "$lib/PrimMenuItem.svelte"
    import { isMainMenuOpen, mainMenuItems } from "$lib/stores/mainMenu"
    import { trapFocus } from "$lib/trapFocus"

    beforeNavigate(() => ($isMainMenuOpen = false))
</script>

<svelte:window
    on:keydown={(e) =>
        $isMainMenuOpen && e.key === "Escape" && ($isMainMenuOpen = false)}
/>

<BlurredBackdrop isVisible={$isMainMenuOpen} />

<nav
    id="main-menu-mobile"
    class="fixed inset-x-0 top-[--header-h] z-40 w-full -translate-y-full duration-200 hide xl:hidden
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
        <ul use:trapFocus>
            {#each $mainMenuItems as item}
                <li class="odd:bg-white/[0.02]">
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
