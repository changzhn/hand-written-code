const insert = require('../../src/sort/insert');
let arrCreator = require('../utils').arrCreator;
const expect = require('chai').expect;
const arr = arrCreator();

describe('insert sort test', function() {
	it('insert result', function() {
		insert(arr);
		for(let i = 0; i < arr.length - 1; i++) {
			expect(arr[i]).lte(arr[i + 1]);
		}
	})
})
