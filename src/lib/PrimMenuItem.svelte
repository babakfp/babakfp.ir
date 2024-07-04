<script lang="ts">
    export let title: string
    export let href: string
    export let isExternal = false

    export let className: string = ""
    export { className as class }
</script>

<a
    class="{className} group flex items-center gap-4 px-container py-1 font-mono text-sm duration-100 outline-inset hover:text-gray-50 xl:px-0"
    {href}
    target={isExternal ? "_blank" : null}
    rel={isExternal ? "noreferrer" : null}
>
    <div
        class="flex h-7.5 w-7.5 items-center justify-center rounded bg-gray-50/5 text-gray-400 shadow duration-100 highlight-gray-50/10 group-hover:bg-gray-50/10 group-hover:text-gray-50"
    >
        <slot />
    </div>

    <span>{title}</span>
</a>
