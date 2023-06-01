<script lang="ts">
    import IconQuoteLeft from "$icons/IconQuoteLeft.svelte"
</script>

<blockquote>
    <div
        class="absolute left-0 top-0 flex h-7 w-7 -translate-x-2.5 -translate-y-2 items-center justify-center rounded-full border-2 border-gray-50/5 bg-gray-800 text-sm text-gray-500"
    >
        <IconQuoteLeft />
    </div>

    <slot />
</blockquote>
