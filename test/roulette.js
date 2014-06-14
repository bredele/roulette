
/**
 * Test dependencies.
 */

var assert = require('assert');
var roulette = require('roulette');

describe('switch positions', function() {
	
	var parent, el1, el2;
	beforeEach(function() {
		parent = document.querySelector('.parent');
		el1 = document.querySelector('.el1');
		el2 = document.querySelector('.el2');
	});
	
	// it('should do nothing if just one element', function() {
	// 	roulette(el1);
	// 	assert.equal(parent.firstChild, el1);
	// });

	it('should switch 2 elements', function() {
		roulette(el1, el2);
		var children = parent.children;
		assert.equal(children[0], el2);
		assert.equal(children[1], el1);
	});

	// it('should switch 3 elements', function() {

	// });

	// it('should switch multiple elements', function() {

	// });

	
});
