
function getMin(width, height) {

	if (height < 1) {
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
