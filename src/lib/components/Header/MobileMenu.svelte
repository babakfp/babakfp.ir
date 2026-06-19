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
                    <div
                        class="highlight-gray-50/10 flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50/5 text-gray-300 shadow-sm duration-100 group-hover:bg-gray-50/10 group-hover:text-gray-50"
                    >
                        <item.icon class="text-xl" />
                    </div>
                </a>
            </li>
        {/each}
    </ul>
</nav>
