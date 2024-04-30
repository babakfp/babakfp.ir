/** @type {import("prettier").Config & import("prettier-plugin-svelte").PluginConfig} */
export default {
    semi: false,
    tabWidth: 4,
    arrowParens: "avoid",
    plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
}
