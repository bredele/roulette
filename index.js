
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
	// dom is synchronous so it could be global
	var anchor = document.createElement('div');
	el2.insertAdjacentElement('beforebegin', anchor);
	el1.insertAdjacentElement('beforebegin', el2);

	var parent = anchor.parentElement;
	// use replace no?
	// div.replace();
	anchor.insertAdjacentElement('beforebegin', el1);
	parent.removeChild(anchor);
}
