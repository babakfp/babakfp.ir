<script lang="ts">
    import type { TechStack } from "./types"

    export let tech: TechStack
    export let className = ""
    export { className as class }
</script>

<div
    class="flex scale-50 rounded-full bg-white p-2 ring-2 ring-white ring-offset-2 sm:scale-75 {className}"
    title={tech}
>
    <slot />
</div>
