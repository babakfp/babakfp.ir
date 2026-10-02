import adapter from "@sveltejs/adapter-static"
import { sveltekit } from "@sveltejs/kit/vite"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import tailwindcss from "@tailwindcss/vite"
import { EXTENSIONS, mdxPreprocess } from "mdx-svelte"
import { hastFromHtml, unifiedTransformer } from "mdx-svelte/unified"
import { defineConfig } from "vite"

export default defineConfig({
    plugins: [
        tailwindcss(),
        sveltekit({
            extensions: EXTENSIONS,
            adapter: adapter(),
            preprocess: [
                mdxPreprocess({
                    elements: ["blockquote", "img", "pre"],
                    onTransform: (options, config) => {
                        return unifiedTransformer(options, config, {
                            remarkToc: {
                                enable: false,
                            },
                            rehypeAutolinkHeadings: {
                                enable: true,
                                options: {
                                    behavior: "append",
                                    properties: {
                                        class: "heading-permalink",
                                        "aria-label":
                                            "Permalink to this headline",
                                    },
                                    // @ts-expect-error FUCK THIS SHIT
                                    content: () => {
                                        return hastFromHtml(
                                            '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M216 152h-48v-48h48a8 8 0 0 0 0-16h-48V40a8 8 0 0 0-16 0v48h-48V40a8 8 0 0 0-16 0v48H40a8 8 0 0 0 0 16h48v48H40a8 8 0 0 0 0 16h48v48a8 8 0 0 0 16 0v-48h48v48a8 8 0 0 0 16 0v-48h48a8 8 0 0 0 0-16Zm-112 0v-48h48v48Z"/></svg>',
                                        )
                                    },
                                    test: ["h2", "h3", "h4", "h5", "h6"],
                                },
                            },
                        })
                    },
                }),
                vitePreprocess(),
            ],
            compilerOptions: {
                discloseVersion: false,
                // modernAst: true,
                // TODO: not sure if it works or not.
                // https://next.svelte.dev/docs/svelte/svelte-compiler#ModuleCompileOptions
                warningFilter: (warning) => !warning.code.startsWith("a11y"),
            },
        }),
    ],
})
