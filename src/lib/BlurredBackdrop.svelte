<script lang="ts">
    export let isVisible = false
</script>

<div
    class="fixed inset-0 z-40 bg-gray-950/80 duration-100
	hide {isVisible && 'show'} xl:hidden"
/>
