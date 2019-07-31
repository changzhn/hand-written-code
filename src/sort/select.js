
/**
选择排序（升序）：
1. 数组从第2项开始到最后一项，每项与最小项比较（假设刚开始时最小项为数组的第1项，在循环过程中会替换最小项）找到最小项，与第1项交换位置，
	结束一轮循环；
2. 下轮循环开始时，数组的第1项已确定为最小值了，所以相当从第2项以后为一个新数组，重复第1步的操作；
3. 直到循环n-1轮时，就可以确定数组的前n-1项为排好序状态，同时最后一项也就确定了；
 */

function select(arr) {
	for(let i = 0; i < arr.length - 1; i++) {
		let baseIdx = i;
		for(let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[baseIdx]) {
				baseIdx = j;
			}
		}
		[arr[i], arr[baseIdx]] = [arr[baseIdx], arr[i]]
	}
}

module.exports = select;
