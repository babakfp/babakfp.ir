import { getHighlighter } from "shiki"

/**
 * @param {string} code
 * @param {string} [lang]
 */
export const highlighter = async (code, lang) => {
    const highlighter = await getHighlighter({
        theme: "rose-pine-moon",
        langs: ["html", "css", "js", "svelte", "php", "bash"],
    })
    return highlighter.codeToHtml(code, { lang })
}
