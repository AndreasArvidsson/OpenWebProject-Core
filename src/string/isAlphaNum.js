/**
 * Return true if this string is alphanumberic[a-zA-Z0-9] only.
 * @public
 * @param {string} str
 * @returns {bool}
 */
export default str => str.match(/^[a-zA-Z0-9]+$/) !== null;