## Import path aliases

The `$` symbol is commonly used to access store values. However, using the same symbol in alias names can cause confusion, especially for beginners who may have difficulties distinguishing between an alias and a store name. While it's up to personal preference how to name aliases, the Svelte maintainers generally recommend using the `$` symbol. As a result, most developers are likely to adopt this convention.

An example of how an alias and a store value can be confused is demonstrated by the following code:

```svelte
<script>
  const lib = readable("src/lib")
  import MyComponent from "$lib/MyComponent.svelte"
</script>
```

To avoid such confusion, it's suggested to use a different symbol for aliases. One alternative is to use the `@` symbol, as shown below:

```svelte
<script>
  import MyComponent from "@components/MyComponent.svelte"
</script>
```

Using clear and distinct aliases can make code more readable and easier to understand for developers of all levels.
