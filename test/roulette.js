
/**
 * Test dependencies.
 */

var assert = require('assert');
var roulette = require('..');

describe('switch positions', function() {
	
	var parent, el1, el2;
	beforeEach(function() {
		parent = document.createElement('div');
		el1 = document.createElement('div');
		el1.innerHTML = 'el1';
		el2 = document.createElement('div');
		el2.innerHTML = 'el2';
		parent.appendChild(el1);
		parent.appendChild(el2);
	});
	
	it('should do nothing if just one element', function() {
		roulette(el1);
	});

	it('should switch 2 elements', function() {
	});

	it('should switch 3 elements', function() {

	});

	it('should switch multiple elements', function() {

	});

	
});
