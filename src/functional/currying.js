
function curring(fn, ...args) {
	const length = fn.length;
	const _args = args || [];
	return (...rest) => {
		rest = rest || [];
		let prevArgs = _args.slice(0);
		prevArgs.push(...rest);
		if (prevArgs.length < length) {
			return curring.call(this, fn, ...prevArgs);
		} else {
			return fn.apply(this, prevArgs);
		}
	}
}

function add(a, b, c, d) {
	return a + b + c + d;
}

const addCurring = curring(add, 1);
let res = addCurring(2)(3, 4);

console.log(res)
