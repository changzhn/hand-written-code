const bubble = require('../../src/sort/bubble');
let arrCreator = require('../utils').arrCreator;
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
