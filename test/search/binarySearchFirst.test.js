const binarySearchFirst = require('../../src/search/binarySearchFirst');
const expect = require('chai').expect;
let arr = [0, 0, 0, 1, 2, 3, 3, 3, 4, 5, 5, 5, 6, 6, 6, 6, 7, 7, 9];

describe('binarySearchFirst test', function() {
	it('search result', function() {
		expect(binarySearchFirst(arr, 0)).equal(arr.indexOf(0));
		expect(binarySearchFirst(arr, 1)).equal(arr.indexOf(1));
		expect(binarySearchFirst(arr, 2)).equal(arr.indexOf(2));
		expect(binarySearchFirst(arr, 3)).equal(arr.indexOf(3));
		expect(binarySearchFirst(arr, 4)).equal(arr.indexOf(4));
		expect(binarySearchFirst(arr, 5)).equal(arr.indexOf(5));
		expect(binarySearchFirst(arr, 6)).equal(arr.indexOf(6));
		expect(binarySearchFirst(arr, 7)).equal(arr.indexOf(7));
		expect(binarySearchFirst(arr, 8)).equal(arr.indexOf(8));
		expect(binarySearchFirst(arr, 9)).equal(arr.indexOf(9));
	})
})
