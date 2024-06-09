<script lang="ts">
    import IconQuoteLeft from "$lib/icons/IconQuoteLeft.svelte"
</script>

<blockquote>
    <div class="absolute left-0 top-0 pl-1.5 text-sm text-gray-600">
        <IconQuoteLeft />
    </div>

    <div class="mt-2">
        <slot />
    </div>
</blockquote>
