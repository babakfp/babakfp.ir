## Creating a class prop

Have you ever tried to create a `class` prop to add custom classes to your component, only to discover that it's not that straightforward? If so, you're not alone. Let's take a closer look at how to create a `class` prop in Svelte and the unexpected hurdles you may face along the way.

To start, let's create a component and add the `class` prop to it:

`MyComponent.svelte`:

```svelte
<script>
	export let class
</script>

<div {class} />
```

`App.svelte`:

<!-- prettier-ignore -->
```svelte
<script>
	import MyComponent from "./MyComponent.svelte"
</script>

<MyComponent class="my-class" />

<style>
	.my-class { /* ... */ }
</style>
```

At first glance, this seems like a simple and clean way to add custom classes and styles to your component from a parent component. However, there's a problem - it won't work! To make it work, you need to make some changes to `MyComponent.svelte`.

```svelte
<script>
    export let className = ""
    export { className as class }
</script>

<div class={className} />
```

By exporting `className` and then aliasing it as `class`, you can now add your custom classes. But, as you may have guessed, there's another catch. Your custom classes will only work if they are global. Svelte doesn't recognize the prop as a `class` attribute, and as a result, it thinks the `.my-class` styles are not being used, so it removes them from the output.

So how can you fix this issue? One solution is to use the [`:global`](https://svelte.dev/docs#component-format-style) modifier to make your styles global across your entire app.

<!-- prettier-ignore -->
```svelte
<div class="my-wrapper">
	<MyComponent class="my-class" />
</div>

<style>
	.my-wrapper :global(.my-class) { /* ... */ }
</style>
```

By wrapping the component inside an element and adjusting the CSS selector, we make sure that styles don't leak out from the parent component.
