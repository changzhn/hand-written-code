
function debounce(fn, wait) {
	let timer = null;

	return function(...args) {
		const context = this;
		clearTimeout(timer);
		timer = setTimeout(function() {
			fn.apply(context, args)
		}, wait);
	}
}
