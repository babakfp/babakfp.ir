export function getHeadings() {
    document?.querySelector("#toc-headings")?.remove()

    let headings: Element[] = []

    const pageHeadings = document.querySelectorAll(
        ".article-content > h2, .article-content > h3, .article-content > h4, .article-content > h5, .article-content > h6"
    )

    const newHeadingsWrapper = document.createElement("div")
    newHeadingsWrapper.setAttribute("id", "toc-headings")
    newHeadingsWrapper.setAttribute("class", "hidden")

    pageHeadings?.forEach(h => {
        newHeadingsWrapper.appendChild(h.cloneNode(true))
    })

    document.body.appendChild(newHeadingsWrapper)

    const newHeadings = document.querySelectorAll(
        "#toc-headings h2, #toc-headings h3, #toc-headings h4, #toc-headings h5, #toc-headings h6"
    )

    newHeadings.forEach(h => {
        h.querySelector(".headings-permalink")?.remove()
        headings = [...headings, h]
    })

    document?.querySelector("#toc-headings")?.remove()

    return headings
}
