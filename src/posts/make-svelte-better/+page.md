---
title: Make Svelte better
description: Let's talk about what can be improved in Svelte.
updated: 2023/08/30
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

## Dealing with `error.html` in SvelteKit

In SvelteKit, you come across a file named [`error.html`](https://kit.svelte.dev/docs/errors#responses). It's a simple `.html` file where you can't use the cool features of Svelte. You basically start from scratch, needing to manually add all your meta tags and other things. It's not exactly exciting. Duplicating code isn't my thing, and having to update it in two separate spots isn't ideal either.
