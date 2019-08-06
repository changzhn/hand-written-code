/**
 * 题目：一个矩形田地，需要划分分一个个面积相等的正方形，现在需要将正方形的边长最大，求边长
 * 或者：求两个正整数的最大公约数
 */


function getMin(width, height) {

	if (height < 1) { // 如果小于1则不往下求值
		return null;
	}

	if (width < height) {
		[width, height] = [height, width];
	}

	let m = width % height;
	if (m === 0) {
		return height;
	}

	width = m;
	return getMin(width, height)
}

module.exports = getMin;
