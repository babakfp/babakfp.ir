<script lang="ts">
    import type { MouseEventHandler } from "svelte/elements"

    let {
        id,
        isVisible,
        onclick,
    }: {
        id?: string
        isVisible?: boolean
        onclick: MouseEventHandler<HTMLDivElement>
    } = $props()
</script>

<div
    {id}
    class="fixed inset-0 z-40 bg-gray-950/95 duration-100
	hide {isVisible && 'show'} xl:hidden"
    {onclick}
></div>
