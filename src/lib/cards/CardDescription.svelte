<script lang="ts">
    export let className = ""
    export { className as class }
</script>

<p class="{className} text-xs leading-6 sm:line-clamp-1 sm:text-sm">
    <slot />
</p>
