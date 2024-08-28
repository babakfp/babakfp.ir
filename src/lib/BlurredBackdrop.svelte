<script lang="ts">
    export let id: string | undefined = undefined
    export let isVisible = false
</script>

<div
    {id}
    class="fixed inset-0 z-40 bg-gray-950/95 duration-100
	hide {isVisible && 'show'} xl:hidden"
    on:click
/>
