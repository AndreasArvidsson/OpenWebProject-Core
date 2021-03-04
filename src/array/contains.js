/**
 * Returns true if the callback returns true for any element.
 * @public
 * @param {Array} arr
 * @param {function} callback
 * @returns {bool}
 */
export default (arr, callback) => arr.findIndex(callback) > -1;