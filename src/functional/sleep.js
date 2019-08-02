

async function sleep(timer) {
	return new Promise(resolve => {
		setTimeout(resolve, timer)
	})
}

async function test() {
	console.log(1);
	await sleep(2000);
	console.log(2);
}

test();
