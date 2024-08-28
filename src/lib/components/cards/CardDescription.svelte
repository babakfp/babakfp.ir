<script lang="ts">
    export let className = ""
    export { className as class }
</script>

<p class="{className} text-xs leading-6 text-gray-400 sm:text-sm sm:leading-6">
    <slot />
</p>
