import adapter from "@sveltejs/adapter-vercel"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import { EXTENSIONS, mdxPreprocess } from "mdx-svelte"
import { hastFromHtml, unifiedTransformer } from "mdx-svelte/unified"

/** @type {import("@sveltejs/kit").Config} */
export default {
    extensions: EXTENSIONS,
    kit: {
        adapter: adapter(),
    },
    preprocess: [
        mdxPreprocess({
            elements: [
                {
                    tag: "BlockCode",
                    selector: "pre code",
                },
                "blockquote",
                "img",
            ],
            onTransform: (options, config) => {
                return unifiedTransformer(options, config, {
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
                                        '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M216 152h-48v-48h48a8 8 0 0 0 0-16h-48V40a8 8 0 0 0-16 0v48h-48V40a8 8 0 0 0-16 0v48H40a8 8 0 0 0 0 16h48v48H40a8 8 0 0 0 0 16h48v48a8 8 0 0 0 16 0v-48h48v48a8 8 0 0 0 16 0v-48h48a8 8 0 0 0 0-16Zm-112 0v-48h48v48Z"/></svg>',
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
