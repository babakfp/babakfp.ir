## Dynamic classes

There is no clean syntax to dynamically add classes.

### ❌ The class directive

```svelte
<div class:bg-brand={condition} />
```

- ❌ You can't add multiple classes. So, you need to introduce a new syntax to be able to do the same thing.
- ❌ It isn't a standard syntax because the classes should come after the equal sign.

### ❌ The ternary operator

```svelte
<div class="block {condition ? 'text-base font-normal' : ''}" />
```

- ✅ You can add multiple classes.
- ❌ Boilerplate ` : ''`.

### ❌ The `&&` operator

```svelte
<div class="block {condition && 'text-base font-normal'}" />
```

- ✅ You can add multiple classes.
- ✅ No boilerplate.
- ❌ You may get classes like `false`, `null`, and `undefined` as a result of a Falsy value.

### What is the solution?

Use the `&&` operator and ignore adding classe like `false`, `null` and `undefined`. Deprecate the class directive in Svelte version 4, because it's not gonna be useful anymore.
