<script lang="ts">
    import type { Snippet } from "svelte"

    let {
        title,
        children,
    }: {
        title: string
        children: Snippet
    } = $props()
</script>

<div
    class="relative overflow-hidden rounded border-4 border-gray-50/5 bg-gray-50/5 p-4 sm:p-8"
>
    <div
        class="-mx-4 -mt-4 flex justify-center bg-linear-to-b from-gray-50/5 to-transparent py-4 text-xs sm:-mx-8 sm:-mt-8"
    >
        {title}
    </div>

    <div class="mt-4 space-y-(--md-base-mt) text-sm sm:mt-8 sm:text-base">
        {@render children()}
    </div>
</div>
