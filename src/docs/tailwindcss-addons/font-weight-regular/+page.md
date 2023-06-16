---
title: Font Weight Regular
---

By activating the option, your default `font-weight` configuration will be;

```js
{
	thin: '100',
	extralight: '200',
	light: '300',
	regular: '400', // Replacing `normal` with `regular`
	medium: '500',
	semibold: '600',
	bold: '700',
	extrabold: '800',
	black: '900',
}
```

Basically, this will only rename the class `font-normal` to `font-regular`.

## How to enable it?

```js
tailwindcssAddons({
  presets: {
    fontWeightRegular: true,
  },
})
```
