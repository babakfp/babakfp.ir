<script lang="ts">
	export let className = ""
	export { className as class }
</script>

<p class="{className} text-sm font-medium leading-6 sm:line-clamp-1">
	<slot />
</p>
