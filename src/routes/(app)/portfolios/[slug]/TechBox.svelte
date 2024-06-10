<script lang="ts">
    export let title: string
</script>

<div
    class="flex rounded bg-gray-800 p-2 text-xl sm:p-3 sm:text-2xl lg:p-4 lg:text-3xl"
    {title}
>
    <slot />
</div>
