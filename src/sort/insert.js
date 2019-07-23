
/**
 *
 	1. 数组中取出第2项（idx = 1）作为基准数，与前一项比较，如果比前一项小，则交换位置；
	2. 此时，数组的前2项(idx = [0, 1])已是排好序状态；
	3. 第二轮循环，取出第3项作为基准数，与前一项比较，如果比前一项（idx = 1）小，则交换位置，
		交换完后，继续向前比较，如果小前一项（idx = 0）小，则继续交换位置；
	4. 重复以上循环，n轮循环过后，数据的前n + 1项已是排好序的状态，如果数据有m项，则一共循环 m - 1轮，因为从第二项开始；
 */

/**
 *
 * @param {Array} arr
 */
function insert(arr) {
	for(let i = 1; i < arr.length; i++) {
		let base = arr[i];

		for(let j = i - 1; j >= 0; j--) {
			if (base < arr[j]) { /* 1 */
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
}

module.exports = insert;
