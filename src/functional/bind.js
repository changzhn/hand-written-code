
function apply(fn, context, args) {
	context.fn = fn;
	return context.fn(...args);
}

Function.prototype.bind2 = function(context, ...args1) {
	context = context || window;
	const fn = this;
	return function(...args2) {
		return apply(fn, context, [...args1, ...args2])
	}
}
