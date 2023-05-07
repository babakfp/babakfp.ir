<script lang="ts">
    export let className = ""
    export { className as class }
</script>

<p class="{className} text-sm leading-6 sm:line-clamp-1">
    <slot />
</p>
