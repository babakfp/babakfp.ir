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
    class="highlight-gray-50/10 group relative block overflow-hidden rounded bg-gray-50/5 p-4 shadow-sm duration-200 hover:bg-gray-50/10 sm:p-6"
    {href}
>
    <h3 class="text-lg font-bold text-gray-50">
        {title}
    </h3>

    <p class="mt-1.5 text-xs leading-6 text-gray-400 sm:text-sm sm:leading-6">
        {description}
    </p>
</a>
