
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

		[arr[leftIdx], arr[i]] = [arr[i], base];

		innerQuick(arr, leftIdx, i - 1);
		innerQuick(arr, i + 1, rightIdx);
	}
}

module.exports = quick;
