## Repy to a YouTube comment

The text below was a reply (from my side) to a YouTube comment.

### My comment

Some of my problems are with the Svelte team saying things and then contradicting themselves, and not communicating with the community.

The documentation isn't good at all. I had to go watch some random video on YouTube (by luck) to understand something basic and very important about runes. The info wasn't available in their docs. It was about not being able to destruct runes, if so, they won't be reactive anymore. The Svelte compiler that they say it's so smart couldn't catch that I was doing something that I shouldn't have done (destructuring runes). Is this something that can be fixed later? Yes, but they act like everything is ok and if you think otherwise they say you are wrong.

They are so focused on using serif font on the docs that they ignored what the users want and need. They undermined the requests for the font change and acted like people that complained, are part of the minority. Later they got forced to add an option for fonts.

The UX in playground is very bad. They could just use the same library that VS Code and so many other websites use (Monaco Editor) and offer 100x better DX. But no, for some reason they choose to build something that isn't good.

Rich Harris was saying Svelte is better than Vue and Solid because you don't need to do the ".value" thing. But you do need to do that sometimes. You can't simply export a reactive variable as before. Are runes better? Yes. But they act like runes are something that they are not. They act like you don't need to write more code. That everything is as before, and you just need to add $state and just that.

You critique them, and they act like you have skill issues. You can't specify dependencies for the $effect, and instead you have to import and use the `untrack` function. In React, you can do this easily. Oh, "you can build a reactive function that does the same"? LOL. What happened to "it's just built-in"?

They say JSX is bad, but JSX is awesome. In JSX, components are just functions. That's it. But in Svelte 5 you have two different things. One is called a component and another called a Snippet. They are not the same. Their TypeScript type is different. The syntax is something completely new, and you need to learn. When you want to pass a snippet to a function inside the script tag, you need to declare the snippet outside the script tag (and inside the template part) and then reference it inside the function inside the script tag. In JSX, it's just as simple as using functions. There is no new and weird things to learn. It's just JavaScript.

In React, you use camelCase for attributes and in Svelte, you have both camelCase and kebab-case because "we love HTML" lol. You need to use kebab-case for native browser events like `onclick` and camelCase for custom stuff like `onSomethingHappened`. Some year later, they are going to reinvent JSX and act like they never said JSX is bad. They may not do this because they like ugly syntax like `{#if}{:else}{/if}`.
