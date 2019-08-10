
/**
 *
 * @param {Array} arr
 * @param {number} target
 * @returns {number}
 */
function binarySearchFirst(arr, target) {
	let leftIdx = 0;
	let rightIdx = arr.length - 1;

	while(leftIdx <= rightIdx) {
		let guessIdx = Math.ceil((leftIdx + rightIdx) / 2);
		if (arr[guessIdx] === target) {
			while(arr[guessIdx - 1] === target) {
				guessIdx--;
			}

			return guessIdx
		} else if (arr[guessIdx] > target) {
			rightIdx = guessIdx - 1;
		} else {
			leftIdx = guessIdx + 1;
		}
	}

	return -1;
}

module.exports = binarySearchFirst;
