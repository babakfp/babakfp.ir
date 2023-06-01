---
title: Make Svelte better
description: Let's talk about what can be improved in Svelte.
updated: 2023/04/13
published: 2022/02/28
---

<script>
	import LogicBlocks from './_lib/logic-blocks.md'
	import Layouts from './_lib/layouts.md'
	import ClassProp from './_lib/class-prop.md'
	import I18n from './_lib/i18n.md'
	import Comments from './_lib/comments.md'
	import CSSScope from './_lib/css-scope.md'
	import A11Y from './_lib/a11y.md'
	import Docs from './_lib/docs.md'
	import DynamicClasses from './_lib/dynamic-classes.md'
	import PortIsAlreadyInUse from './_lib/port-is-already-in-use.md'
	import DynamicHTMLTag from './_lib/dynamic-html-tags.md'
	import BetterErrorHandling from './_lib/better-error-handling.md'
</script>

<LogicBlocks />
<ClassProp />
<Comments />
<CSSScope />
<A11Y />
<Layouts />
<DynamicClasses />
<PortIsAlreadyInUse />
<DynamicHTMLTag />
<Docs />
<BetterErrorHandling />
<I18n />

## `error.html` file

When you use SvelteKit, you need to deal with a file called [`error.html`](https://kit.svelte.dev/docs/errors#responses). There is a feature called `prerender`, right? Why can't then SvelteKit prerender the root `+error.svelte` page and use it as the fallback error page, instead of making us create it?
