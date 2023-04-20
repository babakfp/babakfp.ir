<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	import { cssTransformValue } from '$utils/cssTransformValue'
	const utilities = {
		'.flip': {
			'--tw-scale-x': '-1',
			'--tw-scale-y': '-1',
			'transform': cssTransformValue,
		},
		'.flip-x': {
			'--tw-scale-x': '-1',
			'transform': cssTransformValue,
		},
		'.flip-y': {
			'--tw-scale-y': '-1',
			'transform': cssTransformValue,
		},
	}
</script>

<UtilsTable class="mt-4" {utilities} />

## How to disable it?

```js
tailwindcssAddons({
	utilities: {
		flip: false,
	},
})
```
