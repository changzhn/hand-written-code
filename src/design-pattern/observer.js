// addListener(event, listener)
// 为指定事件添加一个监听器，默认添加到监听器数组的尾部。

// removeListener(event, listener)
// 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。它接受两个参数，第一个是事件名称，第二个是回调函数名称。

// setMaxListeners(n)
// 默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。

// once(event, listener)
// 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。

// emit(event, [arg1], [arg2], [...])
// 按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 true，否则返回 false。

class EventEmitter {
	constructor() {
		this._events = Object.create(null);
		this._maxListeners = 10;
		this._count = 0;
	}

	/**
	 *
	 * @param {string} type
	 * @param {function} listener
	 * @param {boolean} prepend
	 */
	addListener(type, listener, prepend) {
		if (typeof listener !== 'function') {
			console.warn(`第二个参数应该为 function`);
			return false;
		}
		if (!this._events) {
			this._events = Object.create(null);
		}

		if (this._events[type]) {
			if (!!prepend) {
				this._events[type].unshift(listener);
			} else {
				this._events[type].push(listener);
			}
		} else {
			this._events[type] = [listener];
		}

		this._count++;
		if (this._count > this._maxListeners) {
			console.warn(`订阅事件大于最大限制数：${this._maxListeners}，可以通过使用 setMaxListeners 方法来修改最大限制`);
		}

		return true;
	}

	/**
	 *
	 * @param {string} type
	 * @param {function} listener
	 * @param {boolean} prepend
	 */
	once(type, listener, prepend) {
		const newListener = (...args) => {
			listener.call(this, ...args);
			this.removeListener(type, listener);
		};
		newListener.origin = listener;
		this.addListener(type, newListener, prepend);
	}

	/**
	 *
	 * @param {string} type
	 * @param  {...any} args
	 */
	emit(type, ...args) {
		if (Array.isArray(this._events[type])) {
			this._events[type].forEach(f => f.call(this, ...args))
		}
	}

	/**
	 *
	 * @param {string} type
	 * @param {function} listener
	 */
	removeListener(type, listener) {
		if (Array.isArray(this._events[type])) {
			if (!listener) {
				delete this._events[type];
			} else {
				this._events[type] = this._events[type].filter(f => f !== listener && f.origin !== listener);
			}
		}
	}

	/**
	 *
	 * @param {number} num
	 */
	setMaxListeners(num) {
		if (typeof num !== 'number') {
			return false;
		}
		this._maxListeners = num;
		if (this._count > this._maxListeners) {
			console.warn(`订阅事件大于最大限制数：${this._maxListeners}，可以通过使用 setMaxListeners 方法来修改最大限制`);
		}
		return true;
	}
}


