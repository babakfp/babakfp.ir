---
title: Svelte 4 vs 5
description: A real, honest, and unbiased comparison of Svelte 4 vs 5.
update: 2024/10/26
create: 2024/10/26
---

## The `data` prop

In SvelteKit, inside a `+page.server` file, you can return a whole bunch of data, and inside the `+page.svelte` file, you can use the data. The below example is how it works with Svelte 4.

`+page.svelte`:

```svelte
<script lang="ts">
    export let data
</script>
```

The `data` variable will be automatically typed based on the data returned from the server. The below example is how it works with Svelte 5.

```svelte
<script lang="ts">
    import type { PageData } from "./$types"

    let { data }: Props = $props()
</script>
```

What if the data is coming from a `+layout.server.ts` file and we want to use the data inside a `+page.svelte` file? Svelte 4 code will stay the same, but Svelte 5 code will be:

```svelte
<script lang="ts">
    import type { PageData } from "./$types"

    type Props = {
        data: PageData
        children: Snippet
    }

    let { data, children }: Props = $props()
</script>
```

The Svelte 5 example has 8 times more lines of code than Svelte 4.

## 1 line vs 11 lines

Svelte 4:

```svelte
<script lang="ts">
    export let message = ""
</script>
```

Svelte 5:

```svelte
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

The Svelte 5 example has 11 times more lines of code than Svelte 4.

## Wrapping up

I don't fell like writing this anymore.
