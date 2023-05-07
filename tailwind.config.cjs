const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")
const tailwindcssAddons = require("tailwindcss-addons")
const containerUtility = require("./tailwind-custom-config/containerUtility.cjs")
const outlineInsetUtility = require("./tailwind-custom-config/outlineInsetUtility.cjs")
const highlightUtility = require("./tailwind-custom-config/highlightUtility.cjs")
const buttonComponents = require("./tailwind-custom-config/buttonComponents.cjs")
const codeBlockComponents = require("./tailwind-custom-config/codeBlockComponents.cjs")
const linkComponents = require("./tailwind-custom-config/linkComponents.cjs")
const scrollbar = require("./tailwind-custom-config/scrollbar.cjs")

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts,md}"],
    presets: [
        tailwindcssAddons({
            dynamicViewFix: true,
        }),
        containerUtility(),
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
            title: ["UniNeue", "Quicksand", defaultTheme.fontFamily.sans],
            mono: ["MonoLisa", defaultTheme.fontFamily.mono],
        },
        fontWeight: {
            // thin: "100",
            // extralight: "200",
            // light: "300",
            normal: "400",
            medium: "500",
            semibold: "600",
            bold: "700",
            // extrabold: "800",
            // black: "900",
        },
    },
    plugins: [
        outlineInsetUtility(),
        highlightUtility(),
        buttonComponents(),
        codeBlockComponents(),
        linkComponents(),
        scrollbar(),
    ],
}
