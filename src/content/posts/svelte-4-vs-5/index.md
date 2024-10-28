---
title: Svelte 4 vs 5
description: A real, honest, and unbiased comparison of Svelte 4 vs 5.
update: 2024/10/26
create: 2024/10/26
---

## The `data` prop

In SvelteKit, inside a `+page.server` file, you can return a whole bunch of data, and inside the `+page.svelte` file, you can use the data. The below example is how it works with Svelte 4.

```svelte
<!-- 46 characters -->
<script lang="ts">
    export let data
</script>
```

The `data` variable will be automatically typed based on the data returned from the server. The below example is how it works with Svelte 5.

```svelte
<!-- 105 characters -->
<script lang="ts">
    import type { PageData } from "./$types"

    let { data }: Props = $props()
</script>
```

The Svelte 5 example is approximately 128% (2.28x) larger than Svelte 4.

What if the data is coming from a `+layout.server.ts` file and we want to use the data inside a `+page.svelte` file? Svelte 4 code will stay the same, but Svelte 5 code will be.

```svelte
<!-- 185 characters -->
<script lang="ts">
    import type { PageData } from "./$types"

    type Props = {
        data: PageData
        children: Snippet
    }

    let { data, children }: Props = $props()
</script>
```

The Svelte 5 example is approximately 302% (4x) larger than Svelte 4.

## A component

### Svelte 4

```svelte
<!-- 54 characters -->
<script lang="ts">
    export let message = ""
</script>
```

### Svelte 5

```svelte
<!-- 395 characters -->
<script lang="ts">
    import type { Snippet } from "svelte"
    import type { MouseEventHandler } from "svelte/elements"

    type Props = {
        message?: string
        onclick?: MouseEventHandler<HTMLButtonElement>
        children: Snippet
        [key: string]: any
    }

    let {
        message = $bindable(),
        onclick,
        children,
        ...restProps
    }: Props = $props()
</script>
```

The Svelte 5 example is approximately 631% (7.3x) larger than Svelte 4.

## Reactivity in `.js`/`.ts` files

### Svelte 4

```js
import { writable } from "svelte/store"

export const count = writable(0)
```

### Svelte 5

This won't work.

```js
export const count = $state(0)
```

Do this instead:

```js
export const count = $state({ value: 0 })
```

### Conclusion

This is stupid.

## Constant props

In Svelte 5, you can't declare a prop as `const` and another prop as `let`. This is the case with Svelte 4 too.

## Wrapping up

I don't fell like writing this anymore.
