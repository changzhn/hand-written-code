

Function.prototype.bind2 = function(context, ...args1) {
	context = context || window;
	const fn = this;
	return function(...args2) {
		fn.apply(context, [...args1, ...args2])
	}
}
