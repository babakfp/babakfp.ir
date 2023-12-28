## Comments

None of these examples work because the Svelte maintainers believe these issues don't worth solving and we should just deal with them! As you can see, you can't comment code in a bunch of scenarios.

<!-- prettier-ignore -->
```html
<!-- <div>
	<!-- <div></div> -->
</div> -->
```

<!-- prettier-ignore -->
```html
<div
	<!-- class="" -->
></div>
```

<!-- prettier-ignore -->
```svelte
<MyComponent
	<!-- myProp="" -->
></MyComponent>
```

<!-- prettier-ignore -->
```css
/* div {
	/* display: block; */
} */
```

<!-- prettier-ignore -->
```js
/* function doAThing() {
	/* console.log() */
} */
```
