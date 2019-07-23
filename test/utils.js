
/**
 *
 * @param {Number} len
 * @param {Number} range
 */
const arrCreator = function(len = 100, range = 100, sorted = false) {
	if (sorted) {
		return new Array(len).fill(0).map((_, idx) => idx + 1);
	}
	return new Array(len).fill(0).map(_ => Math.ceil(Math.random() * range));
}

exports.arrCreator = arrCreator;
