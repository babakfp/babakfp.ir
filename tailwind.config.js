import colors from "tailwindcss/colors"
import defaultTheme from "tailwindcss/defaultTheme"
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette"
import tailwindcssAddons from "tailwindcss-addons"

/** @type {import("tailwindcss").Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts,md}"],
    presets: [
        tailwindcssAddons({
            presets: {
                screenToDynamicScreen: true,
            },
        }),
        container(),
    ],
    theme: {
        extend: {
            spacing: {
                "header-h": "var(--header-h)",
            },
            colors: {
                gray: colors.zinc,
            },
            borderRadius: {
                DEFAULT: "0.5rem",
            },
        },
        fontFamily: {
            sans: ["Quicksand", defaultTheme.fontFamily.sans],
            title: ["BigNoodleTitling", defaultTheme.fontFamily.sans],
            mono: ["JetBrainsMono", defaultTheme.fontFamily.mono],
        },
        fontWeight: {
            // thin: "100",
            // extralight: "200",
            // light: "300",
            // normal: "400",
            // medium: "500",
            semibold: "600",
            bold: "700",
            // extrabold: "800",
            black: "900",
        },
    },
    plugins: [
        outlineInsetUtility(),
        highlightUtility(),
        buttonComponents(),
        codeComponents(),
        linkComponents(),
    ],
}

function buttonComponents() {
    return ({ addComponents }) => {
        addComponents({
            ".btn": {},
            ".btn-icon": {},
            ".btn-link": {},
        })
    }
}

function linkComponents() {
    return ({ addComponents }) => {
        addComponents({
            ".link": {},
        })
    }
}

function codeComponents() {
    return ({ addComponents }) => {
        addComponents({
            ".code-block": {},
            ".inline-code": {},
        })
    }
}

function outlineInsetUtility() {
    return ({ addUtilities }) => {
        addUtilities({
            ".outline-inset": {
                "@apply -outline-offset-2": "",
            },
        })
    }
}

function highlightUtility() {
    return ({ matchUtilities, theme }) => {
        // This is for when the "shadow" and "highlight" utilities are used on the same element.
        const otherShadowUtilityValues =
            "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
        matchUtilities(
            {
                highlight: color => ({
                    "box-shadow": `${otherShadowUtilityValues}, inset 0 1px 0 0 ${color}`,
                }),
            },
            {
                type: "color",
                values: flattenColorPalette(theme("backgroundColor")),
            },
        )
    }
}

function container() {
    return {
        theme: {
            extend: {
                spacing: {
                    "container-x": "var(--container-x)",
                },
                container: {
                    center: true,
                    padding: "var(--container-x)",
                },
            },
        },
        plugins: [
            ({ addBase }) => {
                addBase({
                    ":root": {
                        "--container-x": "1rem",
                        "@screen sm": {
                            "--container-x": "1.5rem",
                        },
                    },
                    ".container": {
                        "@apply !max-w-screen-xl": "",
                    },
                })
            },
        ],
    }
}
