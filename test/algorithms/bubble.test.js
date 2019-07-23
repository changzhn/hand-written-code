const bubble = require('../../src/algorithms/bubble');
let arrCreator = require('./arrCreator');
const expect = require('chai').expect;
let arr = arrCreator();

describe('bubble sort test', function() {
	it('sort result', function() {
		bubble(arr);
		for(let i = 0; i < arr.length - 1; i++) {
			expect(arr[i]).lte(arr[i + 1]);
		}
	})
})
