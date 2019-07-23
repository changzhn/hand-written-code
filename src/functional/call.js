
Function.prototype.call2 = function(context, ...args) {
	context = context || window;
	context.fn = this;
	let result = context.fn(...args);
	delete context.fn;
	return result;
}
