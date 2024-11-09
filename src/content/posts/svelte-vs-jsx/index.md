---
title: Svelte vs JSX
description: JSX looks better than Svelte, unlike what others say.
create: 2024/11/09
update: 2024/11/09
---

## Svelte vs JSX

Svelte:

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

JSX:

```jsx showLineNumbers
import { ReactElement } from "react"

const toasts = [{ text: "Hello, World!" }]

const Toast = (props?: { Item?: (item: { text: string }) => ReactElement }) => {
    return toasts.map((item) =>
        props?.Item ? props.Item(item) : <p>{item.text}</p>
    )
}

const Item = (item: { text: string }) => <p>{item.text}</p>

export default () => <Toast Item={Item} />
```
