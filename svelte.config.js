import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/kit/vite"
import { mdsvex, escapeSvelte } from "mdsvex"
import { getHighlighter } from "shiki"
import remarkUnwrapImages from "remark-unwrap-images"
import rehypeSlug from "rehype-slug"
import rehypeExternalLinks from "rehype-external-links"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { s } from "hastscript"

const mdsvexExtension = ".md"

/** @type {import("@sveltejs/kit").Config} */
export default {
    extensions: [".svelte", mdsvexExtension],
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
            extensions: [mdsvexExtension],
            layout: "/src/lib/markdown/MdsvexLayout.svelte",
            remarkPlugins: [remarkUnwrapImages],
            rehypePlugins: [
                rehypeSlug,
                [
                    rehypeExternalLinks,
                    {
                        target(element) {
                            return element?.properties?.href &&
                                isExternalLink(element?.properties?.href)
                                ? "_blank"
                                : undefined
                        },
                        rel: ["nofollow", "noopener", "noreferrer"],
                    },
                ],
                [
                    rehypeAutolinkHeadings,
                    {
                        properties: {
                            class: "headings-permalink",
                            "aria-label": "Permalink to this headline",
                        },
                        content(node) {
                            return [
                                // <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"/></svg>
                                s(
                                    "svg",
                                    {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-width": "1.5",
                                        viewBox: "0 0 24 24",
                                    },
                                    [
                                        s("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            d: "M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5",
                                        }),
                                    ]
                                ),
                            ]
                        },
                        test: ["h2", "h3", "h4", "h5", "h6"],
                    },
                ],
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
