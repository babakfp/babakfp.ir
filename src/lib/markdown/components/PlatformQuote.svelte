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

<div class="platformquote relative overflow-hidden rounded-lg p-4 sm:p-8 ring">
    <div class="font-extralight text-2xl">
        {title}
    </div>

    <div
        class="mt-4 space-y-(--markdown-content-gap) text-sm sm:mt-8 sm:text-base"
    >
        {@render children()}
    </div>
</div>
