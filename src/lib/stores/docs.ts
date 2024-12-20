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
        name: "tailwindcss-addons",
        path: "/docs/tailwindcss-addons",
        primaryLinks: [
            {
                title: "GitHub",
                url: "https://github.com/babakfp/tailwindcss-addons",
                icon: IconGithub,
            },
            {
                title: "NPM",
                url: "https://www.npmjs.com/package/tailwindcss-addons",
                icon: IconNpm,
            },
        ],
        items: [
            {
                title: "Get Started",
                items: [
                    {
                        title: "Intro",
                        path: "/docs/tailwindcss-addons",
                    },
                ],
            },
            {
                title: "Theme",
                items: [
                    {
                        title: "Extra Defaults",
                        path: "/docs/tailwindcss-addons/extra-defaults",
                    },
                ],
            },
            {
                title: "New Utilities",
                items: [
                    {
                        title: "Background Grid",
                        path: "/docs/tailwindcss-addons/bg-grid",
                    },
                    {
                        title: "Background Radial",
                        path: "/docs/tailwindcss-addons/bg-radial",
                    },
                    {
                        title: "Dir",
                        path: "/docs/tailwindcss-addons/dir",
                    },
                    {
                        title: "Drag",
                        path: "/docs/tailwindcss-addons/drag",
                    },
                    {
                        title: "Flip",
                        path: "/docs/tailwindcss-addons/flip",
                    },
                    {
                        title: "Hide Show",
                        path: "/docs/tailwindcss-addons/hide-show",
                    },
                    {
                        title: "Scrollbar Color",
                        path: "/docs/tailwindcss-addons/scrollbar-color",
                    },
                    {
                        title: "Scrollbar Width",
                        path: "/docs/tailwindcss-addons/scrollbar-width",
                    },
                    {
                        title: "Tap",
                        path: "/docs/tailwindcss-addons/tap",
                    },
                ],
            },
            {
                title: "Reset Utilities",
                items: [
                    {
                        title: "Reset Number Input",
                        path: "/docs/tailwindcss-addons/reset-number-input",
                    },
                    {
                        title: "Reset Search Input",
                        path: "/docs/tailwindcss-addons/reset-search-input",
                    },
                ],
            },
            {
                title: "Extended Utilities",
                items: [
                    {
                        title: "Inset Center",
                        path: "/docs/tailwindcss-addons/inset-center",
                    },
                    {
                        title: "Overflow Unset",
                        path: "/docs/tailwindcss-addons/overflow-unset",
                    },
                ],
            },
            {
                title: "Modified Utilities",
                items: [
                    {
                        title: "Flex Grid",
                        path: "/docs/tailwindcss-addons/flex-grid",
                    },
                    {
                        title: "Font Regular",
                        path: "/docs/tailwindcss-addons/font-regular",
                    },
                ],
            },
            {
                title: "Variants",
                items: [
                    {
                        title: "Hocus",
                        path: "/docs/tailwindcss-addons/hocus",
                    },
                    {
                        title: "Not",
                        path: "/docs/tailwindcss-addons/not",
                    },
                    {
                        title: "Supports Hover",
                        path: "/docs/tailwindcss-addons/supports-hover",
                    },
                    {
                        title: "Supports Focus",
                        path: "/docs/tailwindcss-addons/supports-focus",
                    },
                    {
                        title: "Supports Hocus",
                        path: "/docs/tailwindcss-addons/supports-hocus",
                    },
                ],
            },
            {
                title: "CHANGELOG",
                path: "/docs/tailwindcss-addons/changelog",
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
