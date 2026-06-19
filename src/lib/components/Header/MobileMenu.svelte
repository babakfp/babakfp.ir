<script lang="ts">
    import { page } from "$app/state"
    import { mainMenuItems } from "$lib/stores/mainMenu.svelte.js"

    const menuItems = $derived(
        mainMenuItems.filter(({ href }) => href !== page.url.pathname),
    )
</script>

<nav class="flex items-stretch xl:hidden">
    <ul class="flex">
        {#each menuItems as item}
            <li class="group flex">
                <a
                    class="outline-inset items-center group-last:pr-4 group-first:pl-4 flex px-2"
                    href={item.href}
                >
                    <item.icon class="text-2xl" />
                </a>
            </li>
        {/each}
    </ul>
</nav>
