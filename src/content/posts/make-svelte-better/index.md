---
title: Make Svelte better
description: Let's talk about what can be improved in Svelte.
update: 2023/08/30
create: 2022/02/28
---

<script>
	import LogicBlocks from './_lib/LogicBlocks.md'
	import Layouts from './_lib/Layouts.md'
	import ClassProp from './_lib/ClassProp.md'
	import I18n from './_lib/I18n.md'
	import Comments from './_lib/Comments.md'
	import CssScope from './_lib/CssScope.md'
	import A11y from './_lib/A11y.md'
	import Docs from './_lib/Docs.md'
	import DynamicClasses from './_lib/DynamicClasses.md'
	import PortIsAlreadyInUse from './_lib/PortIsAlreadyInUse.md'
	import DynamicHtmlTags from './_lib/DynamicHtmlTags.md'
	import BetterErrorHandling from './_lib/BetterErrorHandling.md'
</script>

<LogicBlocks />
<ClassProp />
<Comments />
<CssScope />
<A11y />
<Layouts />
<DynamicClasses />
<PortIsAlreadyInUse />
<DynamicHtmlTags />
<Docs />
<BetterErrorHandling />
<I18n />

## Dealing with `error.html` in SvelteKit

In SvelteKit, you come across a file named [`error.html`](https://kit.svelte.dev/docs/errors#responses). It's a simple `.html` file where you can't use the cool features of Svelte. You basically start from scratch, needing to manually add all your meta tags and other things. It's not exactly exciting. Duplicating code isn't my thing, and having to update it in two separate spots isn't ideal either.
