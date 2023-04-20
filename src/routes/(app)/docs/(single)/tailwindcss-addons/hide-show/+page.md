<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	const utilities = {
		'.hide': {
			'visibility': 'hidden',
			'opacity': '0',
			'pointer-events': 'none',
		},
		'.show': {
			'visibility': 'visible',
			'opacity': '1',
			'pointer-events': 'auto',
		},
	}
</script>

<UtilsTable class="mt-4" {utilities} />

## How to disable it?

```js
tailwindcssAddons({
	utilities: {
		hideShow: false,
	},
})
```
