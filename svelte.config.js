import adapter from "@sveltejs/adapter-vercel"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import {
    mdxPreprocess,
    SVELTE_CONFIG_EXTENSIONS,
} from "mdx-svelte/dist/index.js"
import {
    hastFromHtml,
    transformer,
} from "mdx-svelte/dist/transformers/unified/index.js"

/** @type {import("@sveltejs/kit").Config} */
export default {
    extensions: SVELTE_CONFIG_EXTENSIONS,
    kit: {
        adapter: adapter(),
    },
    preprocess: [
        mdxPreprocess({
            layouts: {
                default: ["img", "blockquote"],
            },
            onTransform: (options, config) => {
                return transformer(options, config, {
                    builtInPlugins: {
                        remarkToc: {
                            enable: false,
                        },
                        rehypeAutolinkHeadings: {
                            enable: true,
                            options: {
                                behavior: "append",
                                properties: {
                                    class: "heading-permalink",
                                    "aria-label": "Permalink to this headline",
                                },
                                content() {
                                    return hastFromHtml(
                                        `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"/></svg>`,
                                    )
                                },
                                test: ["h2", "h3", "h4", "h5", "h6"],
                            },
                        },
                        rehypeShiki: {
                            options: {
                                theme: "rose-pine-moon",
                                langs: [
                                    "html",
                                    "css",
                                    "js",
                                    "svelte",
                                    "php",
                                    "bash",
                                    "yaml",
                                ],
                            },
                        },
                    },
                })
            },
        }),
        vitePreprocess(),
    ],
    // Disable A11Y warnings
    onwarn: (warning, handler) => {
        if (warning.code.startsWith("a11y-")) return
        handler(warning)
    },
}
