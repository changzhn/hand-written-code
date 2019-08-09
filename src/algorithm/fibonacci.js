
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
