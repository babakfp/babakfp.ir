<script lang="ts">
    import { page } from "$app/stores"
    import { docsSidebarItems } from "$stores/docs"
    import SidebarMenuItem from "$lib/Sidebar/SidebarMenuItem.svelte"
    import PrimMenuItem from "$lib/PrimMenuItem.svelte"
</script>

{#each $docsSidebarItems as project}
    {#if $page.url.pathname.startsWith(project.path) || $page.url.pathname === "/docs"}
        {#if project.primaryLinks && project.primaryLinks.length > 0}
            <ul>
                {#each project.primaryLinks as link}
                    <li>
                        <PrimMenuItem
                            title={link.title}
                            href={link.url}
                            icon={link.icon}
                            isExternal={true}
                        />
                    </li>
                {/each}
            </ul>
        {/if}

        {#if project.items}
            <ul>
                {#each project.items as item}
                    <li class="mt-8">
                        <h5
                            class="mx-4 block font-semibold text-gray-50 xl:mx-0"
                        >
                            {item.title}
                        </h5>

                        {#if item.items && item.items.length > 0}
                            <ul class="mt-4">
                                {#each item.items as { title, path }}
                                    <li>
                                        <SidebarMenuItem
                                            href={path}
                                            isActive={$page.url.pathname ===
                                                path}
                                        >
                                            {title}
                                        </SidebarMenuItem>
                                    </li>
                                {/each}
                            </ul>
                        {/if}
                    </li>
                {/each}
            </ul>
        {/if}
    {/if}
{/each}
