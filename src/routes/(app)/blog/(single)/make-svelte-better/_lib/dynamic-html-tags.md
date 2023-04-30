## Dynamic HTML tags

This feature is now available 👏.

<!-- prettier-ignore -->
```svelte
<script>
	let tag = "div"
</script>

<svelte:element this={tag}>
	...
</svelte:element>
```

It would be better if they change the the prop name to `tag`. What if we also want to bind the element to a variable? Example:

<!-- prettier-ignore -->
```svelte
<script>
	let tag = "div"
	let element
</script>

<svelte:element
	this={tag}
	bind:this={element}
>
	...
</svelte:element>
```

It works, but it looks like we accidentally added the prop twice!
