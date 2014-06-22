
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
  for(var i = 0, l = arguments.length - 1; i < l; i++) {
    console.log(i, i+1);
    flip(arguments[i], arguments[i+1]);
  }
}


function flip(el1, el2) {
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