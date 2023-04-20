<script lang="ts">
	import { fly } from "svelte/transition"
	import { page } from "$app/stores"
	import layoutTransition from "$utils/layoutTransition"
	import { timeSince } from "$utils/timeSince"

	import { IconChevronRight } from "$icons"

	export let title: string
	export let updateDate: string
	export let publishDate: string
</script>

{#key $page.url.pathname}
	<article in:fly={layoutTransition}>
		<ul class="flex items-center gap-2 text-sm font-medium">
			<li>
				<a class="link" href="/">HOME</a>
			</li>
			<IconChevronRight class="text-xs opacity-40" />
			<li>
				<a class="link" href="/blog">BLOG</a>
			</li>
		</ul>

		<div
			class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-gray-400"
		>
			<span>
				Updated: <b title={updateDate}>
					{timeSince(new Date(updateDate))}
				</b>
			</span>
			<span>
				Published: <b title={publishDate}>
					{timeSince(new Date(publishDate))}
				</b>
			</span>
		</div>

		<div class="article-content">
			<h1 class="mt-8">{title}</h1>

			<slot />
		</div>
	</article>
{/key}
