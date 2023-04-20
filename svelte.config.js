import adapter from "@sveltejs/adapter-auto"
import { vitePreprocess } from "@sveltejs/kit/vite"
import { mdsvex, escapeSvelte } from "mdsvex"
import { getHighlighter } from "shiki"
import rehypeSlug from "rehype-slug"
// import { rehypeAccessibleEmojis } from "rehype-accessible-emojis"
// import rehypeAutolinkHeadings from "rehype-autolink-headings"

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: [".svelte", ".md"],
	kit: {
		adapter: adapter(),
		alias: {
			$icons: "src/lib/icons/index.js",
			$stores: "src/stores",
			$portfolios: "src/portfolios",
			$utils: "src/utils",
		},
	},
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: [".md"],
			rehypePlugins: [
				rehypeSlug,
				// rehypeAccessibleEmojis,
				// rehypeAutolinkHeadings,
			],
			highlight: {
				highlighter: async (code, lang) => {
					const highlightedCode = await mdsvexHighlight(code, lang)
					return highlightedCode ? escapeSvelte(highlightedCode) : ""
				},
			},
		}),
	],
	// Disable A11Y warnings
	onwarn: (warning, handler) => {
		if (warning.code.startsWith("a11y-")) return
		handler(warning)
	},
}

async function mdsvexHighlight(code, lang) {
	const highlighter = await getHighlighter({
		theme: "rose-pine",
		langs: ["html", "css", "js", "svelte", "php", "cmd"],
	})
	return highlighter.codeToHtml(code, { lang })
}
