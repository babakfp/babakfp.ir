export function getHeadings() {
    document?.querySelector("#toc-headings")?.remove()

    let headings: HTMLElement[] = []

    const pageHeadings = document.querySelectorAll(
        ".article-content > h2, .article-content > h3, .article-content > h4, .article-content > h5, .article-content > h6"
    )

    const newHeadingsWrapper = document.createElement("div")
    newHeadingsWrapper.setAttribute("id", "toc-headings")
    newHeadingsWrapper.setAttribute("class", "hidden")

    pageHeadings?.forEach(h => {
        const hClone = h.cloneNode(true) as HTMLElement
        hClone.querySelector(".heading-permalink")?.remove()
        hClone
            .querySelectorAll("a")
            ?.forEach(a => a.classList.add("pointer-events-none"))
        headings = [...headings, hClone]
    })

    document?.querySelector("#toc-headings")?.remove()

    return headings
}
