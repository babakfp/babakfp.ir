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

<div class="platformquote relative overflow-hidden rounded-lg p-4 ring sm:p-8">
    <div class="text-2xl font-extralight">
        {title}
    </div>

    <div
        class="mt-4 space-y-(--markdown-content-gap) text-sm sm:mt-8 sm:text-base"
    >
        {@render children()}
    </div>
</div>
