const select = require('../../src/sort/select');
let arrCreator = require('../utils').arrCreator;
const expect = require('chai').expect;
const arr = arrCreator();

describe('select sort test', function() {
	it('select result', function() {
		select(arr);
		for(let i = 0; i < arr.length - 1; i++) {
			expect(arr[i]).lte(arr[i + 1]);
		}
	})
})
