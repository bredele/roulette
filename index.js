
/**
 * Expose 'roulette'
 */

module.exports = roulette;


/**
 * Switch multiple dom elements clockwise.
 *
 * Examples:
 *
 *   roulette(el1, el2);
 *   roulette(el1, el2, el3);
 *   
 * @api public
 */

function roulette() {
  var tmp = 0;
  for(var l = arguments.length - 1; l > 0; l--) {
    roulette.two(arguments[l + tmp++], arguments[l-1]);
  }
}


/**
 * Switch two dom elements.
 *
 * @param {Element} el1
 * @param {Element} el2
 * @api public
 */

roulette.two = function(el1, el2) {
  var anchor = document.createElement('div');
  insert(el2, anchor);
  insert(el1, el2);
  insert(anchor, el1);
  anchor.parentElement.removeChild(anchor);
};


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