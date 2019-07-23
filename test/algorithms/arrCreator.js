
/**
 *
 * @param {Number} len
 * @param {Number} range
 */
const arrCreator = function(len = 100, range = 100) {
	return new Array(len).fill(0).map(_ => Math.ceil(Math.random() * range));
}

module.exports = arrCreator;
