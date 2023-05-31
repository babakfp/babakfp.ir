<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	const utilities = {
		'.dir-rtl': {
			'direction': 'rtl',
		},
		'.dir-ltr': {
			'direction': 'ltr',
		},
	}
</script>

<UtilsTable class="mt-4" {utilities} />

## How to disable it?

```js
tailwindcssAddons({
  utilities: {
    dir: false,
  },
})
```
