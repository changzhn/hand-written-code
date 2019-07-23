// 二分查找

let arr = new Array(10).fill(0).map((_, idx) => idx + 1);

/**
 *
 * @param {Array} arr
 * @param {number} target
 */
function binarySearch(arr, target) {
	let leftIdx = 0;
	let rightIdx = arr.length - 1;

	while(leftIdx <= rightIdx) {
		let guessIdx = Math.ceil((leftIdx + rightIdx) / 2);
		if (arr[guessIdx] === target) {
			return guessIdx
		} else if (arr[guessIdx] > target) {
			rightIdx = guessIdx - 1;
		} else {
			leftIdx = guessIdx + 1;
		}
	}

	return null;
}


let res = binarySearch(arr, 11)

console.log(res)
