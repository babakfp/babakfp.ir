<script lang="ts">
    import { twMerge } from "tailwind-merge"

    export let class_ = ""
    export { class_ as class }
    export let useGrid = true
</script>

<div
    class={twMerge(
        `rounded border-2 border-gray-800 p-4 ${useGrid ? "bg-center shadow-[inset_0_0_4rem_2rem_theme(colors.gray.900)] bg-grid-gray-800/50" : ""}`,
        class_,
    )}
>
    <slot />
</div>
