<script lang="ts">
    import type { Snippet } from "svelte"

    let {
        isTrue,
        class: class_,
        first,
        second,
    }: {
        isTrue?: boolean
        class?: string
        first: Snippet
        second: Snippet
    } = $props()
</script>

<div class="{class_} flex">
    <div class="flex duration-100 {isTrue && 'scale-0'}">
        {@render first()}
    </div>

    <div class="absolute flex scale-0 duration-100 {isTrue && 'scale-100'}">
        {@render second()}
    </div>
</div>
