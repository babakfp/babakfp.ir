import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/kit/vite"
import { mdsvex, escapeSvelte } from "mdsvex"
import { getHighlighter } from "shiki"
import remarkUnwrapImages from "remark-unwrap-images"
import rehypeSlug from "rehype-slug"
import rehypeExternalLinks from "rehype-external-links"
// import { rehypeAccessibleEmojis } from "rehype-accessible-emojis"
// import rehypeAutolinkHeadings from "rehype-autolink-headings"

/** @type {import("@sveltejs/kit").Config} */
export default {
	extensions: [".svelte", ".md"],
	kit: {
		adapter: adapter(),
		alias: {
			$icons: "src/lib/icons/index.ts",
			$stores: "src/stores",
			$portfolios: "src/portfolios",
			$utils: "src/utils",
		},
	},
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: [".md"],
			remarkPlugins: [remarkUnwrapImages],
			rehypePlugins: [
				[
					rehypeExternalLinks,
					{
						target(element) {
							console.log(element?.properties?.href)
							return element?.properties?.href &&
								isExternalLink(element?.properties?.href)
								? "_blank"
								: undefined
						},
						rel: ["nofollow", "noopener", "noreferrer"],
					},
				],
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

/**
 * @param {string} link
 * @returns {boolean}
 */
function isExternalLink(link) {
	return link.startsWith("http://") || link.startsWith("https://")
}
