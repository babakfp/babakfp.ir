import type { Config } from "tailwindcss"
import { allAddons, flattenColorPalette } from "tailwindcss-addons"
import colors from "tailwindcss/colors"
import defaultTheme from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"

export default {
    content: ["./src/**/*.{html,js,svelte,ts,md}"],
    theme: {
        extend: {
            colors: {
                gray: colors.zinc,
                brand: colors.indigo,
            },
            borderRadius: {
                DEFAULT: "0.5rem",
            },
        },
        fontFamily: {
            sans: ["TitilliumWeb", ...defaultTheme.fontFamily.sans],
            mono: ["JetBrainsMono", ...defaultTheme.fontFamily.mono],
        },
        fontWeight: {
            normal: "400",
            semibold: "600",
            bold: "700",
            black: "900",
        },
    },
    plugins: [
        ...allAddons(),
        containerUtility(),
        outlineInsetUtility(),
        highlightUtility(),
        buttonComponents(),
        codeComponents(),
        linkComponents(),
    ],
    future: {
        hoverOnlyWhenSupported: true,
    },
} satisfies Config

function buttonComponents() {
    return plugin(({ addComponents }) => {
        addComponents({
            ".btn": {},
            ".btn-icon": {},
            ".btn-primary": {},
        })
    })
}

function linkComponents() {
    return plugin(({ addComponents }) => {
        addComponents({
            ".link": {},
        })
    })
}

function codeComponents() {
    return plugin(({ addComponents }) => {
        addComponents({
            ".code-block": {},
            ".inline-code": {},
        })
    })
}

function outlineInsetUtility() {
    return plugin(({ addUtilities }) => {
        addUtilities({
            ".outline-inset": {
                "@apply -outline-offset-2": "",
            },
        })
    })
}

function highlightUtility() {
    return plugin(({ matchUtilities, theme }) => {
        // This is for when the "shadow" and "highlight" utilities are used on the same element.
        const otherShadowUtilityValues =
            "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
        matchUtilities(
            {
                highlight: (color) => ({
                    "box-shadow": `${otherShadowUtilityValues}, inset 0 1px 0 0 ${color}`,
                }),
            },
            {
                type: "color",
                values: flattenColorPalette(theme("backgroundColor")),
            },
        )
    })
}

function containerUtility() {
    return plugin(
        ({ addBase, theme }) => {
            addBase({
                ":root": {
                    "--container": theme("spacing.6"),
                },
                ".container": {
                    "@apply !max-w-screen-xl": "",
                },
            })
        },
        {
            theme: {
                extend: {
                    spacing: {
                        container: "var(--container)",
                    },
                    container: {
                        center: true,
                        padding: "var(--container)",
                    },
                },
            },
        },
    )
}
