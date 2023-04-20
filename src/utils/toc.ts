export function getHeadings() {
	let headings: Element[] = []
	const headingElements = document.querySelectorAll(
		".article-content > h2, .article-content > h3, .article-content > h4, .article-content > h5, .article-content > h6"
	)
	headingElements?.forEach(h => (headings = [...headings, h]))
	return headings
}
