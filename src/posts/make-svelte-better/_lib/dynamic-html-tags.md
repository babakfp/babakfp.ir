## Dynamic HTML tags

Guess what? You can now use this cool feature! 👏

<!-- prettier-ignore -->
```svelte
<script>
	let tag = "div"
</script>

<svelte:element this={tag}>
	...
</svelte:element>
```

Sadly, there's an issue; What if you also need to bind the element to a variable? Here's an example:

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

What you're observing are two props with the same name but different functionalities. It works, but it looks like we accidentally added the prop twice!

It would make more sense if they changed the name of the tag prop to `tag`. Here's an example:

<!-- prettier-ignore -->
```svelte
<script>
	let tag = "div"
	let element
</script>

<svelte:element
	{tag}
	bind:this={element}
>
	...
</svelte:element>
```
