<script lang="ts">
    let {
        title,
        description,
        href,
    }: {
        title: string
        description: string
        href: string
    } = $props()
</script>

<a
    class="group relative block overflow-hidden rounded-lg bg-gray-50/2 p-4 duration-200 ring ring-gray-50/10 hover:ring-gray-50/15 hover:bg-gray-50/10 sm:p-6"
    {href}
>
    <h3 class="text-lg font-bold text-gray-50">
        {title}
    </h3>

    <p class="mt-1.5 text-xs leading-6 text-gray-400 sm:text-sm sm:leading-6">
        {description}
    </p>
</a>
