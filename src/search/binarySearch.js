// 二分查找


/**
  1. 设置左右两个索引，然后一直猜测中间值，根据中间值和查找值的大小比较，来修正左右索引的位置，直到猜测值与查找值相等，如果没有找到返回null;
	2. 例如数组是[1, ..., 100]，查找值是66，第一次的猜测索引是49（值是50），小于66，则修正leftIdx = 49 + 1，如果不+1会陷入死循环；
 */

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

module.exports = binarySearch;
