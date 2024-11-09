## Repy to another YouTube comment

The text below was a reply (from my side) to a YouTube comment.

### Context

I was saying that in Svelte 4, you could do this:

```js
export const count = writable(0)
```

But in Svelte 5, you have to do this:

```js
export const count = $state({ value: 0 })
```

### Reply

When people think something benefits Svelte, they say "it's just magic and magic is good". Some other time when they change their opinion, they say "it's just JavaScript dude, what are you complaining about".

This:

```js
export const count = writable(0)
```

You said "`writable` is just a wrapper", but it just worked. I'm not saying stores are better. I'm saying it just worked, and it was something expected.

When people say Svelte is React, they mean Svelte isn't like Svelte anymore, and there is so much boilerplate now.

I had Svelte 4 code that was 3 lines, which in Svelte 5 it turned into 13 lines. Does it give more? Yes. Could they add a new rune called `$prop` and make things cleaner instead? Yes. Big problem is Svelte team and others act like it's not a big deal. Like Svelte 5 isn't a big shift of what Svelte was before. How is turning 3 lines of code to 13 line is not a big deal?
