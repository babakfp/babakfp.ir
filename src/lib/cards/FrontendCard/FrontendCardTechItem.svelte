<script lang="ts">
    import type { TechStack } from "./types"

    export let title: TechStack
    export let className = ""
    export { className as class }
</script>

<div
    class="flex rounded-full bg-white p-1.5 ring-2 ring-white ring-offset-2 {className}"
    {title}
>
    <slot />
</div>
