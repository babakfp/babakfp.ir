<script lang="ts">
    export let href: string
    export let isActive = false
    export let isToc = false
</script>

<a
    class="SidebarMenuItem group block px-4 outline-inset xl:pl-0
	{isActive && 'pointer-events-none'} {isToc && 'pl-0'}"
    {href}
>
    <div
        class="line-clamp-1 border-l border-gray-50/5 py-2 pl-4 text-gray-400 duration-100 hover:text-gray-50
		{isActive && '!border-gray-50 text-gray-50'}
		{isToc && 'border-none xl:border-solid'}"
    >
        <slot />
    </div>
</a>
