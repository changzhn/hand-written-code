const quick = require('../../src/sort/quick');
let arrCreator = require('../utils').arrCreator;
const expect = require('chai').expect;
const arr = arrCreator();

describe('quick sort test', function() {
	it('quick result', function() {
		quick(arr);
		for(let i = 0; i < arr.length - 1; i++) {
			expect(arr[i]).lte(arr[i + 1]);
		}
	})
})
