<script lang="ts">
    export let title: string
</script>

<div
    class="relative overflow-hidden rounded border-4 border-gray-50/5 bg-gray-50/5 p-4 sm:p-8"
>
    <div
        class="-mx-4 -mt-4 flex justify-center bg-gradient-to-b from-gray-50/5 to-transparent py-4 text-xs uppercase sm:-mx-8 sm:-mt-8"
    >
        {title}
    </div>

    <div
        class="mt-4 space-y-[--markdown-spacing-base] text-sm sm:mt-8 sm:text-base"
    >
        <slot />
    </div>
</div>
