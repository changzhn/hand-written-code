

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
