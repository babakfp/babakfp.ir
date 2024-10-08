import { pick } from "remeda"
import type { Config } from "tailwindcss"
import { allAddons, flattenColorPalette } from "tailwindcss-addons"
import colors from "tailwindcss/colors"
import plugin from "tailwindcss/plugin"

export default {
    content: ["./src/**/*.{html,js,svelte,ts,md}"],
    theme: {
        extend: {
            borderRadius: {
                DEFAULT: "0.5rem",
            },
        },
        colors: {
            ...pick(colors, ["transparent", "current"]),
            gray: colors.zinc,
            brand: colors.indigo,
        },
        container: {
            center: true,
            padding: "1rem",
        },
        fontFamily: {
            sans: ["Recursive Variable"],
            mono: ["Recursive Variable", { fontVariationSettings: "'MONO' 1" }],
        },
        fontWeight: {
            light: "300",
            semibold: "600",
            bold: "700",
            black: "900",
        },
    },
    plugins: [
        ...allAddons(),
        outlineInsetUtility(),
        highlightUtility(),
        buttonComponents(),
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
