import { makeToc } from "mdx-svelte"

export type Headings = {
    id: string
    level: number
    textContent: string
}[]

export const getHeadings = () =>
    makeToc({
        container: ".markdown-content",
    }).map((heading) => ({
        id: heading.attributes.id ?? "",
        level: Number(heading.level),
        textContent: heading.textContent,
    })) satisfies Headings
