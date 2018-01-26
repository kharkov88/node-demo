var number = require('../lib/number.js');
var expect = require('chai').expect;

suite('Tests of number', function() {
	test('getNumber() must return number', function() {
		expect(typeof number.getNumber() === 'number')
	})
})