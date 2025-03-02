import { IconCode, IconGithub, IconNpm } from "$lib/components/icons"

export const docsSidebarItems = [
    {
        name: "svelte-outclick",
        path: "/docs/svelte-outclick",
        primaryLinks: [
            {
                title: "Demo",
                url: "https://svelte-outclick.vercel.app",
                icon: IconCode,
            },
            {
                title: "GitHub",
                url: "https://github.com/babakfp/svelte-outclick",
                icon: IconGithub,
            },
            {
                title: "NPM",
                url: "https://www.npmjs.com/package/svelte-outclick",
                icon: IconNpm,
            },
        ],
        items: [
            {
                title: "Get Started",
                items: [
                    {
                        title: "Intro",
                        path: "/docs/svelte-outclick",
                    },
                ],
            },
            {
                title: "CHANGELOG",
                path: "/docs/svelte-outclick/changelog",
            },
        ],
    },
    {
        name: "mdx-svelte",
        path: "/docs/mdx-svelte",
        primaryLinks: [
            {
                title: "GitHub",
                url: "https://github.com/babakfp/mdx-svelte",
                icon: IconGithub,
            },
            {
                title: "NPM",
                url: "https://www.npmjs.com/package/mdx-svelte",
                icon: IconNpm,
            },
        ],
        items: [
            {
                title: "Get Started",
                items: [
                    {
                        title: "Intro",
                        path: "/docs/mdx-svelte",
                    },
                    {
                        title: "Install",
                        path: "/docs/mdx-svelte/install",
                    },
                    {
                        title: "Options",
                        path: "/docs/mdx-svelte/options",
                    },
                    {
                        title: "Collections",
                        path: "/docs/mdx-svelte/collections",
                    },
                ],
            },
            {
                title: "Transformers",
                items: [
                    {
                        title: "Intro",
                        path: "/docs/mdx-svelte/transformers",
                    },
                    {
                        title: "Build a Transformer",
                        path: "/docs/mdx-svelte/transformers/build",
                    },
                ],
            },
            {
                title: "Unified",
                items: [
                    {
                        title: "Intro",
                        path: "/docs/mdx-svelte/unified",
                    },
                    {
                        title: "Helpers",
                        path: "/docs/mdx-svelte/unified/helpers",
                    },
                    {
                        title: "Plugins",
                        path: "/docs/mdx-svelte/unified/plugins",
                    },
                    {
                        title: "Add plugin",
                        path: "/docs/mdx-svelte/unified/add-plugin",
                    },
                    {
                        title: "Options",
                        path: "/docs/mdx-svelte/unified/options",
                    },
                ],
            },
            {
                title: "Advanced",
                items: [
                    {
                        title: "Table of Contents",
                        path: "/docs/mdx-svelte/table-of-contents",
                    },
                    {
                        title: "Customize Elements",
                        path: "/docs/mdx-svelte/customize-markdown-elements",
                    },
                    {
                        title: "Auto-Imports",
                        path: "/docs/mdx-svelte/auto-imports",
                    },
                ],
            },
            {
                title: "Real-world Examples",
                path: "/docs/mdx-svelte/real-world-examples",
            },
            {
                title: "CHANGELOG",
                path: "https://github.com/babakfp/mdx-svelte/blob/main/CHANGELOG.md",
            },
        ],
    },
]
