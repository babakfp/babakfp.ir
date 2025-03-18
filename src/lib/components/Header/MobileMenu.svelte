<script lang="ts">
    import type { Component, Snippet } from "svelte"
    import { OutClick } from "svelte-outclick"
    import { beforeNavigate } from "$app/navigation"
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
    class="fixed inset-x-0 top-(--header-height) bottom-0 z-40 hidden xl:hidden {isMainMenuOpen.value
        && 'block!'}"
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
                    {@render primMenuItem({
                        class: "py-2 hover:bg-gray-50/10",
                        title: item.title,
                        href: item.href,
                        icon: item.icon,
                    })}
                </li>
            {/each}
        </ul>
    </OutClick>
</nav>

{#snippet primMenuItem(props: {
    title: string
    href: string
    isExternal?: boolean
    class?: string
    icon: Component
})}
    <a
        class="{props.class} group outline-inset flex items-center gap-4 px-4 py-1 text-sm duration-100 hover:text-gray-50 xl:px-0"
        href={props.href}
        target={props.isExternal ? "_blank" : null}
        rel={props.isExternal ? "noreferrer" : null}
    >
        <div
            class="highlight-gray-50/10 flex h-7.5 w-7.5 items-center justify-center rounded bg-gray-50/5 text-gray-400 shadow-sm duration-100 group-hover:bg-gray-50/10 group-hover:text-gray-50"
        >
            <svelte:component this={props.icon} />
        </div>

        <span>{props.title}</span>
    </a>
{/snippet}
