<script lang="ts">
    import { page } from "$app/stores"
    import PrimMenuItem from "$lib/components/PrimMenuItem.svelte"
    import SidebarMenuItem from "$lib/components/Sidebar/SidebarMenuItem.svelte"
    import { docsSidebarItems } from "$lib/stores/docs"
</script>

{#each docsSidebarItems as project}
    {#if $page.url.pathname.startsWith(project.path) || $page.url.pathname === "/docs"}
        {#if project.primaryLinks && project.primaryLinks.length > 0}
            <ul>
                {#each project.primaryLinks as link}
                    <li>
                        <PrimMenuItem
                            title={link.title}
                            href={link.url}
                            isExternal={true}
                        >
                            <link.icon />
                        </PrimMenuItem>
                    </li>
                {/each}
            </ul>
        {/if}

        {#if project.items}
            <ul>
                {#each project.items as item}
                    <li class="mt-8">
                        {#if item.items && item.items.length}
                            <h5
                                class="block px-4 font-semibold text-gray-50 xl:px-0"
                            >
                                {item.title}
                            </h5>

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
                        {:else if item.path}
                            <h5
                                class="block px-4 font-semibold text-gray-50 xl:px-0"
                            >
                                <a href={item.path}>{item.title}</a>
                            </h5>
                        {/if}
                    </li>
                {/each}
            </ul>
        {/if}
    {/if}
{/each}
