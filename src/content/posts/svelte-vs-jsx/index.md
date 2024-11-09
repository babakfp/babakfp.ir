---
title: Svelte vs JSX
description: JSX looks better than Svelte, unlike what others say.
create: 2024/11/09
update: 2024/11/10
---

## Example 1

Here you can see that in Svelte you need to learn about something called Snippets. But in JSX, you will be just using a function.

### Svelte

```svelte showLineNumbers
<script lang="ts">
    import type { Snippet } from "svelte"

    const toasts = [{ text: "Hello, World!" }]
</script>

{#snippet Toast(props?: { Item?: Snippet<[{ text: string }]> })}
    {#each toasts as item}
        {#if props?.Item}
            {@render props.Item(item)}
        {:else}
            <p>{item.text}</p>
        {/if}
    {/each}
{/snippet}

{#snippet Item(item: { text: string })}
    <p>Item: {item.text}</p>
{/snippet}

{@render Toast({ Item })}
```

### JSX

```jsx showLineNumbers
import { ReactElement } from "react"

const toasts = [{ text: "Hello, World!" }]

const Toast = (props?: { Item?: (item: { text: string }) => ReactElement }) => {
    return toasts.map((item) => {
        return props?.Item ? props.Item(item) : <p>{item.text}</p>
    })
}

const Item = (item: { text: string }) => {
    return <p>{item.text}</p>
}

export default () => {
    return <Toast Item={Item} />
}
```

## Example 2

In Svelte, you can't have a prop that accepts both the `Component` and `Snippet` types. The way that Components and Snippets work are different. Because of this, when dealing with props, you most use the `<MyComponent />` syntax for the `Component` type and the `{@render MyComponent()}` syntax for type `Snippet` type to render them. Well, you can just use a condition to check if the prop is type of `Component` or `Snippet`, right? Wrong, you can't! It's not possible to differentiate between a `Component` and a `Snippet`.

https://github.com/sveltejs/svelte/issues/9774

In JSX, you don't face with stupid issues and limitations like this.
