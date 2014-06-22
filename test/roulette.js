
/**
 * Test dependencies.
 */

var assert = require('assert');
var roulette = require('roulette');

describe('switch positions', function() {
	
	var parent, el1, el2, el3;
	beforeEach(function() {
		parent = document.querySelector('.parent');
		parent.innerHTML = '<div class="el1">el1</div><div class="el2">el2</div><div class="el3">el3</div>';
		el1 = document.querySelector('.el1');
		el2 = document.querySelector('.el2');
		el3 = document.querySelector('.el3');
	});

	// it('should do nothing if just one element', function() {
	// 	roulette(el1);
	// 	assert.equal(parent.firstChild, el1);
	// });

	it('should switch 2 elements', function() {
		var children = parent.children;
		roulette(el1, el2);
		assert.equal(children[0], el2);
		assert.equal(children[1], el1);
	});

	it('should switch 3 elements', function() {
		var children = parent.children;
		debugger
		roulette(el1, el2, el3);
		assert.equal(children[0], el3);
		assert.equal(children[1], el1);
		assert.equal(children[2], el2);
	});

	// it('should switch multiple elements', function() {

	// });

	
});
