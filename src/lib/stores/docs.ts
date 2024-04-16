import { writable, readable } from "svelte/store"
import IconCode from "$icons/IconCode.svelte"
import IconGithub from "$icons/IconGithub.svelte"
import IconNpm from "$icons/IconNpm.svelte"

export const isDocsMenuSidebarOpen = writable(false)
export const isDocsTocSidebarOpen = writable(false)

export const docsSidebarItems = readable([
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
                        title: "Introduction",
                        path: "/docs/svelte-outclick",
                    },
                    {
                        title: "CHANGELOG",
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
                        title: "Introduction",
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
                        title: "Dynamic Screen",
                        path: "/docs/tailwindcss-addons/dynamic-screen",
                    },
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
                ],
            },
            {
                title: "CHANGELOG",
                path: "/docs/tailwindcss-addons/changelog",
            },
        ],
    },
    {
        name: "svelte-in-markdown",
        path: "/docs/svelte-in-markdown",
        primaryLinks: [
            {
                title: "GitHub",
                url: "https://github.com/babakfp/svelte-in-markdown",
                icon: IconGithub,
            },
            {
                title: "NPM",
                url: "https://www.npmjs.com/package/svelte-in-markdown",
                icon: IconNpm,
            },
        ],
        items: [
            {
                title: "Get Started",
                items: [
                    {
                        title: "Introduction",
                        path: "/docs/svelte-in-markdown",
                    },
                    {
                        title: "Installation",
                        path: "/docs/svelte-in-markdown/installation",
                    },
                    {
                        title: "Options",
                        path: "/docs/svelte-in-markdown/options",
                    },
                ],
            },
            {
                title: "Transformers",
                items: [
                    {
                        title: "Introduction",
                        path: "/docs/svelte-in-markdown/transformers",
                    },
                    {
                        title: "Build a Transformer",
                        path: "/docs/svelte-in-markdown/transformers/build",
                    },
                ],
            },
            {
                title: "Unified",
                items: [
                    {
                        title: "Introduction",
                        path: "/docs/svelte-in-markdown/unified",
                    },
                    {
                        title: "HAST from HTML",
                        path: "/docs/svelte-in-markdown/unified/hast-from-html",
                    },
                    {
                        title: "Plugins",
                        path: "/docs/svelte-in-markdown/unified/plugins",
                    },
                    {
                        title: "Add plugin",
                        path: "/docs/svelte-in-markdown/unified/add-plugin",
                    },
                ],
            },
            {
                title: "Stuff",
                items: [
                    {
                        title: "Table of Contents",
                        path: "/docs/svelte-in-markdown/table-of-contents",
                    },
                    {
                        title: "Real-world Examples",
                        path: "/docs/svelte-in-markdown/real-world-examples",
                    },
                ],
            },
            {
                title: "CHANGELOG",
                path: "/docs/svelte-in-markdown/changelog",
            },
        ],
    },
])
