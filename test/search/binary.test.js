const binarySearch = require('../../src/search/binarySearch');
const expect = require('chai').expect;
const arrCreator = require('../utils').arrCreator;
let arr = arrCreator(100, null, true);

describe('binarySearch test', function() {
	it('search result', function() {
		expect(binarySearch(arr, 0)).equal(null);
		expect(binarySearch(arr, 1)).equal(0);
		expect(binarySearch(arr, 49)).equal(48);
		expect(binarySearch(arr, 99)).equal(98);
		expect(binarySearch(arr, 10000)).equal(null);
	})
})
