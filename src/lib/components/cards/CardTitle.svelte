<script lang="ts">
    export let className = ""
    export { className as class }
</script>

<h3 class="{className} text-lg font-bold text-gray-50">
    <slot />
</h3>
