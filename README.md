# 常见前端面试题中的手写代码

![img](https://www.travis-ci.org/Joo-fanChang/hand-written-code.svg?branch=master)

> 因为公司突然来了个急刹车，不得不背着大太阳出去面试，总结了一下之前面试过的让手写的代码（都是最基本的实现，没有优化，没有深入），以后想会逐步完善代码；
> 部分代码加入了测试用例，其余的会后续补充上；

[GIT](https://github.com/Joo-fanChang/hand-written-code)

## 排序
排序方法|时间复杂度 
-------|---------
冒泡    |O(n^2)   
插入    |O(n^2)   
快速    |O(n*logn)


### 冒泡排序
冒泡排序（升序）：
1. 数组从前开始，两两比较，如果前项比后项大，则交换位置；
2. 指针+1，再次重复两两比较；
3. 直到比较索引为 arr.length - 2和arr.length - 1为止，则一轮比较结束；
4. 此时，可以确实最后一项为数组的最大值；
5. 第二轮比较开始，比较方法与上轮相同，不同的是，数组的已经确定了最后一项为最大值，该值没有必要参与本轮的比较，
    第三、四...以后每轮都是，随着轮数的递增，一轮中两两比较的次数会越来越少；
6. 至少于可以比较多少轮数，因为每轮都可以确定一个最大值，如果一个数组有n个元素，在n - 1轮过后，就可以确实索引1到n - 1位置的数字，
    同时剩下的第1个数字没有必要再比较，因为没有可交换的空间；

[code](https://github.com/Joo-fanChang/hand-written-code/blob/master/src/sort/bubble.js)

### 插入排序
插入排序（升序）：
1. 数组中取出第2项（idx = 1）作为基准数，与前一项比较，如果比前一项小，则交换位置；
2. 此时，数组的前2项(idx = [0, 1])已是排好序状态；
3. 第二轮循环，取出第3项作为基准数，与前一项比较，如果比前一项（idx = 1）小，则交换位置，
	交换完后，继续向前比较，如果小前一项（idx = 0）小，则继续交换位置；
4. 重复以上循环，n轮循环过后，数据的前n + 1项已是排好序的状态，如果数据有m项，则一共循环 m - 1轮，因为从第二项开始；

[code](https://github.com/Joo-fanChang/hand-written-code/blob/master/src/sort/insert.js)

### 快速排序
快速排序（升序）：
1. 数组左侧第一项作为基准数，设置左右两个指针从两头开始向中间靠拢（右侧指针先移动），如果右侧指针找到数字比基准数小则停止，如果左侧指针找到数字比基准数大则停止，交换左右指针的数字；
2. 如果左右指针指向同一个位置，则交换该位置与基准数字位置的数字；
3. 第一轮循环结束，此时，基准数字左侧都比基准数字小，右侧都比基准数大；
4. 递归排列左侧的数组和右侧的数组；

[code](https://github.com/Joo-fanChang/hand-written-code/blob/master/src/sort/quick.js)

## 遍历、查找

### 广度优先遍历
一个对象结构如下，要求对象的key放到一个数组里，并且先放完上一级后，再放下一级，结果如下`["a","b","c","a1","a2","c1","c2","a21","c11","c21","a211","a212"]`
```js
const o = {
	a: {
		a1: 'a1',
		a2: {
			a21: {
				a211: 'a211',
				a212: 'a212',
			}
		}
	},
	b: 'b',
	c: {
		c1: {
			c11: 'c11',
		},
		c2: {
			c21: 'c21',
		}
	}
}
```

1. 创建队列（先进先出FIFO），将待遍历的对象放入队列；
2. 将第一层的key放入结果中，将下一层的对象放到队列中；
3. 继续循环，重复上面的操作，直到队列中的对象全部遍历完成；

[code](https://github.com/Joo-fanChang/hand-written-code/blob/master/src/search/bfs.js)


### 深度优先遍历

要遍历的对象和上面的一样，要求输出以下的结果：`["a","a1","a2","a21","a211","a212","b","c","c1","c11","c2","c21"]`
1. 使用递归遍历，遍历的key直接放入结果中；

[code](https://github.com/Joo-fanChang/hand-written-code/blob/master/src/search/dfs.js)

### 二分查找法

给定排好序的数组和查找值，返回查找值的索引；
1. 设置左右两个索引，然后一直猜测中间值，根据中间值和查找值的大小比较，来修正左右索引的位置，直到猜测值与查找值相等，如果没有找到返回null;
2. 例如数组是[1, ..., 100]，查找值是66，第一次的猜测索引是49（值是50），小于66，则修正leftIdx = 49 + 1，如果不+1会陷入死循环；

[code](https://github.com/Joo-fanChang/hand-written-code/blob/master/src/search/binarySearch.js)

## 函数相关

### 实现 call apply bind

[call](https://github.com/Joo-fanChang/hand-written-code/blob/master/src/functional/call.js)
[apply](https://github.com/Joo-fanChang/hand-written-code/blob/master/src/functional/apply.js)
[bind](https://github.com/Joo-fanChang/hand-written-code/blob/master/src/functional/bind.js)

### 实现 debounce throttle

[debounce](https://github.com/Joo-fanChang/hand-written-code/blob/master/src/functional/debounce.js)
[throttle](https://github.com/Joo-fanChang/hand-written-code/blob/master/src/functional/throttle.js)

### 实现 currying

[throttle](https://github.com/Joo-fanChang/hand-written-code/blob/master/src/functional/currying.js)


## Todo List
- Promise
- require
