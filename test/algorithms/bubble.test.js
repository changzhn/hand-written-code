const bubble = require('../../src/algorithms/bubble');
const arr = require('./arr');
const expect = require('chai').expect;

describe('bubble sort test', function() {
	it('sort result', function() {
		bubble(arr);
		for(let i = 0; i < arr.length - 1; i++) {
			expect(arr[i]).lte(arr[i + 1]);
		}
	})
})
