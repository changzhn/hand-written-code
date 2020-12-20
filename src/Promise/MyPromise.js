const PENDING = 'PENDING';
const FULL_FILLED = 'FULL_FILLED';
const REJECTED = 'REJECTED';

/**
 * TODO: then的返回值
 * 1. 如果 onFulfilled 或者 onRejected 抛出一个异常 e ，则 promise2 必须拒绝执行，并返回拒因 e
 * 2. 如果 onFulfilled 不是函数且 promise1 成功执行， promise2 必须成功执行并返回相同的值
 * 3. 如果 onRejected 不是函数且 promise1 拒绝执行， promise2 必须拒绝执行并返回相同的据因。
 * 4. 如果 onFulfilled 或者 onRejected 返回一个值 x ，则运行下面的 Promise 解决过程：[[Resolve]](promise2, x)。这条其实才是规范的第一条，因为他比较麻烦，所以我将它放到了最后。前面我们代码的实现，其实只要onRejected或者onFulfilled成功执行了，我们都要resolve promise2。
 */

class MyPromise {
	/**
	 * @param {Function(resolve, reject)} executor
	 */
	constructor(executor) {
		if (typeof executor !== 'function') {
			return;
		}
		this.state = PENDING;
		// 这里要这样是因为在外边是可以多次then的，就是说可以多次注册回调
		this.successCallbacks = [];
		this.errorCallbacks = [];

		this.successValue = null;
		this.errorValue = null;

		const resolve = (arg) => {
			if (this.state === PENDING) {
				this.state = FULL_FILLED;
				this.successValue = arg;
				this.successCallbacks.forEach(f => f(arg));
			}
		};

		const reject = (arg) => {
			if (this.state === PENDING) {
				this.state = REJECTED;
				this.errorValue = arg;
				this.errorCallbacks.forEach(f => f(arg));
			}
		};

		try  {
			executor(resolve, reject);
		} catch(e) {
			reject(e);
		}
	}

	then(successCallback, errorCallback) {
		if (typeof successCallback !== 'function') {
			successCallback = x => x;
		}
		if (typeof errorCallback !== 'function') {
			errorCallback = x => x;
		}

		if (this.state === PENDING) {
			this.successCallbacks.push(successCallback);
			this.errorCallbacks.push(errorCallback);
		}

		// 同步的resolve
		if (this.state === FULL_FILLED) {
			successCallback(this.successValue);
		}

		if (this.state === REJECTED) {
			errorCallback(this.errorValue);
		}
	}

	static resolve(val) {
		return new MyPromise(resolve => resolve(val));
	}

	static reject(val) {
		return new MyPromise((_, reject) => reject(val));
	}

	static all(...args) {
		const len = args.length;
		const resolveCount =0;
		const values = [];
		return new MyPromise(resolve => {
			args.forEach((f, i) => {
				resolveCount++;
				f.then(val => values[i] = val);

				if (len === resolveCount) {
					resolve(values);
				}
			});
		})
	}

	static race(...args) {
		return new MyPromise(resolve => {
			args.forEach(f => {
				f.then(val => resolve(val));
			})
		})
	}

	catch(errorCallback) {
		this.then(null, errorCallback);
	}
}
