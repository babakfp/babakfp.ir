`on:outclick`

A Svelte component that allows you to listen to the clicks that happen outside of an element.

Why choose this over the other packages?

- [No extra wrapper](#no-extra-wrapper)
- [Supports `class` prop](#class-prop)
- [Exclude elements from triggering the event](#excluding-elements)
- [It uses (`on:pointerdown` + `on:pointerup` or only `on:pointerdown`) and `on:keydown` instead of `on:click` to capture the event](#why-are-we-not-using-the-click-event-to-capture-the-outclick-event)
- [Half click supoort](#halfclick)
- [Trigger the event on component itself](#includeself)
- TypeScript support

## Installation

Please check out the [**CHANGELOG**](svelte-outclick/changelog) before updating to the newest version. Restart your app after the update.

```cmd
pnpm add -D svelte-outclick
```

## How it works

It works the same as the Javascript click event. A few events are attached to the window and it checks whether the event target is contained within the element. If the element didn't contain the event target, it means the click happened outside of the element.

<!-- prettier-ignore -->
```svelte
<script>
	import OutClick from 'svelte-outclick'
	let count = 0
</script>

<OutClick
	on:outclick={() => count++}
>
	{count} times clicked outside
</OutClick>
```

## Props

### Excluding elements

You may want to exclude some elements from triggering the event. For example, a button that opens a popup must be excluded, so the popup doesn't get closed immediately after you open it. Since the button that triggers the popup is located outside of the popup itself, in any time clicking on it will trigger the event.

#### `excludeElements`

- Type: `HTMLElement | HTMLElement[]`

This prop expects an array of DOM nodes. Clicks on those nodes (and their children) will be ignored. Learn about [`bind:this`](https://svelte.dev/tutorial/bind-this).

<!-- prettier-ignore -->
```svelte
<script>
	import OutClick from 'svelte-outclick'
	let count = 0
	let thisIsExcluded
</script>

<OutClick
	on:outclick={() => count++}
	excludeElements={[thisIsExcluded]}
>
	{count} times clicked outside
</OutClick>

<div bind:this={thisIsExcluded}>
	this doesn't trigger outclick
</div>
```

This prop can receive a single variable or multiple variables in an array.

#### `excludeQuerySelectorAll`

- Type: `string`

This prop expects an array of query selectors. Clicks on those nodes (and their children) will be ignored. Selectors element most be present on the document or it will cause an error.

<!-- prettier-ignore -->
```svelte
<script>
	import OutClick from 'svelte-outclick'
	let count = 0
</script>

<OutClick
	on:outclick={() => count++}
	excludeQuerySelectorAll={[".this-is-excluded"]}
>
	{count} times clicked outside
</OutClick>

<div class="this-is-excluded">
	this doesn't trigger outclick
</div>
```

This prop works the same as the `querySelectorAll` method. So, it can contain values like `"#element1, .element2"`.

### `class` prop

- Type: `string`

This is the same as the CSS `class` attribute. You can use tools like TailwindCSS without any problems, just add your classes how you normally do. Please check out the demo source code to learn about how to add styles to your custom class.

<!-- prettier-ignore -->
```svelte
<script>
	import OutClick from 'svelte-outclick'
	let count = 0
</script>

<div>
	<OutClick
		class="my-custom-class another-class"
		on:outclick={() => count++}
	>
		{count} times clicked outside
	</OutClick>
</div>

<style lang="postcss">
	/*
	You need to use :global() here because Svelte sucks.
	You need to use an extra element(div) to wrap the component inside it,
		to prevent your styles from affecting the elements outside of this component.
	*/
	div :global(.my-custom-class) {
		color: red;
	}
</style>
```

### `includeSelf`

- Type: `boolean`
- Default: `false`

For example, if you want to close the dropdown when you click on its items, set the value to `true`, so the self(wrapper) can trigger the event.

<!-- prettier-ignore -->
```svelte
<script>
	import OutClick from 'svelte-outclick'
	let count = 0
</script>

<OutClick
	on:outclick={() => count++}
	includeSelf={true}
>
	{count} times clicked outside and inside
</OutClick>
```

### `halfClick`

- Type: `boolean`
- Default: `true`

If `true`, outclick will happen when `pointerdown` and `pointerup` events happen after eachother, outside of the element. If `false`, `pointerdown` can solely determine the click outside.

### `tag`

- Type: `string`
- Default: `"div"`

You can add a prop called `tag` to your `OutClick` component and change the wrapper tag. Added with the help of `svelte:element`.

### Custom attributes

You can add custom attributes to render on the wrapper element. Added with the help of `$$restProps`.

```svelte
<OutClick aria-label="hello" />
```

## No extra wrapper

Actually, there is an HTML `<div>` wrapper, but it doesn't affect the layout because of [`display: contents`](https://caniuse.com/css-display-contents). If you use the `class` prop, `display: contents will be removed automatically.

## FAQ

### Why are we not using the `click` event to capture the `outclick` event?

At first, we were using the `click` event to capture the `outclick` event, but later because of [this issue](https://github.com/babakfp/svelte-outclick/issues/4) we started using the `mousedown` event instead; and later because of [this issue](https://github.com/babakfp/svelte-outclick/issues/6) we started using the `pointerdown` even. Later I have added the ability to use `pointerup` event with the `pointerdown` event.

### Learn more

- `keydown` event on `document.body` is ignored because this is how it works when you use `click` event instead.
- `keydown` event only triggers with `Enter`, `NumpadEnter`, and `Space` keys (because this is how it works when you use the `click` event instead).
