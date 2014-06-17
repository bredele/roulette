
/**
 * Expose 'roulette'
 */

module.exports = roulette;


/**
 * Switch two dom elements.
 *
 * @param {Element} el1
 * @param {Element} el2
 * @api public
 */

function roulette(el1, el2) {
	// NOTE: dom is synchronous so it could be global
	var anchor = document.createElement('div');
	insert(el2, anchor);
	insert(el1, el2);
	insert(anchor, el1);
	anchor.parentElement.removeChild(anchor);
}


/**
 * Insert adjacent html.
 * 
 * @param  {Element} parent
 * @param  {Element} child
 * @api private      
 */

function insert(parent, child) {
	parent.insertAdjacentElement('beforebegin', child);
}