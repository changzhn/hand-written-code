
/**
 * 递归实现
 * @param {number} idx 索引
 */
// function fibon0(idx) {
// 	if (idx === 0 || idx === 1) {
// 		return 1;
// 	} else {
// 		return fibon0(idx - 1) + fibon0(idx - 2);
// 	}
// }

function createFibonacci() {
	let cache = {};
	return function fibonacci(idx) {
		if (cache[idx]) {
			return cache[idx];
		}

		if (idx === 0 || idx === 1) {
			cache[idx] = 1;
			return 1;
		} else {
			cache[idx] = fibonacci(idx - 1) + fibonacci(idx - 2);
			return cache[idx];
		}
	}
}

module.exports = createFibonacci();

function fn1(num) {
	if (num <= 1) {
		return 1;
	}
	let a = 1;
	let b = 1;
	for(var i = 2; i <= num; i++) {
		let c = a + b;
		a = b;
		b = c;
	}

	return b;
}



function fn2(num, a = 1, b = 1) {
	if (num === 0) {
		return a;
	}
	return fn2(num - 1, b, a + b);
}

for(var i = 0; i < 5; i++) {
	console.log(fn2(i));
}
