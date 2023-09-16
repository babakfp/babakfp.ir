---
title: Not Variants
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	const utilities = {
		'.not-first': {
			'&:not(:first-child)': '',
		},
		'.not-last': {
			'&:not(:last-child)': '',
		},
		'.not-first-of-type': {
			'&:not(:first-of-type)': '',
		},
		'.not-last-of-type': {
			'&:not(:last-of-type)': '',
		},
		'.not-[VALUE]': {
			'&:not(VALUE)': '',
		},
	}
</script>

<UtilsTable {utilities} />

In order to use this feature, your Tailwind version must support the [`matchVariant`](https://tailwindcss.com/docs/plugins#dynamic-variants) feature. You're safe if using `v3.2.1` or above (I'm not sure about the older versions).

## How to disable it?

```js
tailwindcssAddons({
    variants: {
        notVariants: false,
    },
})
```
