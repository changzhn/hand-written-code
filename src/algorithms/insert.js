
/**
 *
 * @param {Array} arr
 */
function insert(arr) {
	for(let i = 1; i < arr.length; i++) {
		let base = arr[i];

		for(let j = i - 1; j >= 0; j--) {
			if (base < arr[j]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
}

module.exports = insert;
