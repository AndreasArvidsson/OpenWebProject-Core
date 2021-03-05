/**
 * The callback to use with filter to get only unique values.
 * @public
 * @param {any} value
 * @param {number} index
 * @param {array} arr
 * @returns {bool}
 */
export default (value, index, arr) => arr.indexOf(value) === index;