
let p1 = new Promise((resolve, reject) => {
	resolve(1);
});

let mp1 = new MyPromise((resolve, reject) => {
	resolve(1);
});

p1.then(res => {
	console.log('p1.then(): ', res);
});

mp1.then(res => {
	console.log('mp1.then(): ', res);
});


let p2 = new Promise((resolve, reject) => {
	setTimeout(() => resolve(1), 100);
});

let mp2 = new MyPromise((resolve, reject) => {
	setTimeout(() => resolve(1), 100);
});

p2.then(res => {
	console.log('p2.then(): ', res);
});

mp2.then(res => {
	console.log('mp2.then(): ', res);
});

p2.then(res => {
	console.log('p2.then()2: ', res);
});

mp2.then(res => {
	console.log('mp2.then()2: ', res);
});
