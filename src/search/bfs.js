// Breadth-First Search
// 广度优先遍历

const o = require('./o');

/**
	1. 创建队列（先进先出FIFO），将待遍历的对象放入队列；
	2. 将第一层的key放入结果中，将下一层的对象放到队列中；
	3. 继续循环，重复上面的操作，直到队列中的对象全部遍历完成；
 */

function bfs(o) {
	let searchQueue = [o]; /* 1 */
	let searched = [];

	while(searchQueue.length) { /* 3 */
		let searchItem = searchQueue.shift();
		if (typeof searchItem === 'object') {
			for(let key of Object.keys(searchItem)) {
				/* 2 */
				searched.push(key);
				searchQueue.push(searchItem[key]);
			}
		}
	}

	return searched;
}


let res = bfs(o);
console.log(res)
