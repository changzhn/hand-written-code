// 字节面试题，实现一个异步加法
function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b);
  }, 500);
}

function promiseAdd(a, b) {
	return new Promise(function (resolve, reject) {
		asyncAdd(a, b, (err, res) => {
			if (!err) {
				resolve(res);
			}
		})
	})
}

function serAdd(...args) {
	return args.reduce((task, num) => task.then(total => promiseAdd(total, num)), Promise.resolve(0));
}

// const serRet = serAdd(1,2,3,4,5,6,7,8,9,10)
// serRet.then(s => console.log(s));


async function parallelSum(...args) {
  if (args.length === 1) return args[0]
  const tasks = []
  for (let i = 0; i < args.length; i += 2) {
    tasks.push(promiseAdd(args[i], args[i + 1] || 0))
  }
  const results = await Promise.all(tasks)
  return parallelSum(...results)
}



// async function serAdd2(...args) {

// 	let total = 0;
// 	for(var i = 0; i < args.length; i++) {
// 		total = await promiseAdd(total, args[i]);
// 	}
// 	return total;
// }

// const ret = serAdd2(1,2,3,4)
// ret.then(s => console.log(s))

parallelSum(1,2,3,4,5,6).then(s => console.log(s))
