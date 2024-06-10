<script lang="ts">
    export let title: string
</script>

<div class="flex rounded bg-gray-800 p-4 text-3xl" {title}>
    <slot />
</div>
