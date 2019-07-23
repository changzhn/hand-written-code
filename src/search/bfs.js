// Breadth-First Search
// 广度优先遍历

const o = require('./o');

function bfs(o) {
	let searchQueue = [o];
	let searched = [];

	while(searchQueue.length) {
		let searchItem = searchQueue.shift();
		if (typeof searchItem === 'object') {
			for(let key of Object.keys(searchItem)) {
				searched.push(key);
				searchQueue.push(searchItem[key]);
			}
		}
	}

	return searched;
}


let res = bfs(o);
console.log(res)
