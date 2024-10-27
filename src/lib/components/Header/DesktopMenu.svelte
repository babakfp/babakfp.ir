<script lang="ts">
    import { mainMenuItems } from "$lib/stores/mainMenu"
</script>

<nav class="hidden xl:flex">
    <ul class="flex">
        {#each mainMenuItems as item}
            <li>
                <a
                    class="flex h-full items-center gap-3 px-4 text-gray-400 duration-100 outline-inset hover:text-gray-50"
                    href={item.href}
                >
                    {item.title}
                </a>
            </li>
        {/each}
    </ul>
</nav>
