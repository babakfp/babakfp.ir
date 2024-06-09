## Dynamic classes

Managing dynamic classes in Svelte can be improved for better code readability and flexibility.

### The `class` directive

```svelte
<div class:bg-brand={condition} />
```

-   ❌ Can only add one class at a time.
-   ❌ This syntax isn't standard because the order should have the classes following the equal sign.

### The ternary operator

```svelte
<div class="block {condition ? 'text-base font-normal' : ''}" />
```

-   ✅ Supports multiple classes.
-   ❌ Includes boilerplate.

### The `&&` operator

```svelte
<div class="block {condition && 'text-base font-normal'}" />
```

-   ✅ Supports multiple classes.
-   ✅ No boilerplate.
-   ❌ Can lead to unwanted classes like `false`, `null`, and `undefined`.

### What is the solution?

Use the `&&` operator and ignore adding classes like `false`, `null`, and `undefined`. However, it may be problematic because some developers may be using classes like `is-open-{isOpen}`!

Deprecate the class directive in Svelte version 4, because it's not gonna be useful anymore.
