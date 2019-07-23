
function throttle(fn, wait) {
	let prevTime = Date.now();

	return function(...args) {
		let context = this;
		let currentTime = Date.now();

		if (currentTime - prevTime >= wait) {
			fn.apply(context, args);
			prevTime = currentTime;
		}
	}
}
