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
    class="group relative block overflow-hidden rounded-lg bg-white/2 p-4 duration-200 ring ring-white/10 hover:ring-white/15 hover:bg-white/10 sm:p-6"
    {href}
>
    <h3 class="text-lg font-bold text-gray-50">
        {title}
    </h3>

    <p class="mt-1.5 text-xs leading-6 text-gray-400 sm:text-sm sm:leading-6">
        {description}
    </p>
</a>
