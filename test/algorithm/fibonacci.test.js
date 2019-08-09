const fibonacci = require('../../src/algorithm/fibonacci');
const expect = require('chai').expect;

describe('fibonacci test', function() {
	it('fibonacci result', function() {
		expect(fibonacci(0)).equal(1);
		expect(fibonacci(1)).equal(1);

		for(let i = 0; i < 10; i++) {
			let idx = Math.ceil(Math.random() * 100 + 2);
			expect(fibonacci(idx)).equal(fibonacci(idx - 1) + fibonacci(idx - 2));
		}
	})
})
