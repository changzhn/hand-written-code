
/**
 1. 数组左侧第一项作为基准数，设置左右两个指针从两头开始向中间靠拢（右侧指针先移动），如果右侧指针找到数字比基准数小则停止，如果左侧指针找到数字比基准数大则停止，交换左右指针的数字；
 2. 如果左右指针指向同一个位置，则交换该位置与基准数字位置的数字；
 3. 第一轮循环结束，此时，基准数字左侧都比基准数字小，右侧都比基准数大；
 4. 递归排列左侧的数组和右侧的数组；
 */

/**
 *
 * @param {Array} arr
 */
function quick(arr) {
	innerQuick(arr, 0, arr.length - 1);
	/**
	 *
	 * @param {Array} arr
	 * @param {Number} leftIdx
	 * @param {Number} rightIdx
	 */
	function innerQuick(arr, leftIdx, rightIdx) {
		/* 1 */
		let base = arr[leftIdx];
		let i = leftIdx;
		let j = rightIdx;

		if (i > j) {
			return;
		}

		while(i !== j) {

			while(arr[j] > base && i < j) {
				j--;
			}

			while(arr[i] <= base && i < j) {
				i++;
			}

			if (i < j) {
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
		}

		/* 2 */
		[arr[leftIdx], arr[i]] = [arr[i], base];

		/* 4 */
		innerQuick(arr, leftIdx, i - 1);
		innerQuick(arr, i + 1, rightIdx);
	}
}

module.exports = quick;
