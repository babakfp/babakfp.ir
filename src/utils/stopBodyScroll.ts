export default (stop: boolean) => {
	if (stop) {
		document.body.classList.add("!overflow-y-hidden")
	} else {
		document.body.classList.remove("!overflow-y-hidden")
	}
}
