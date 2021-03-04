/**
* Return true if this is alpha[a-zA-Z] only.
* @public
* @param {string} str
* @returns {bool}
*/
export default str => str.match(/^[a-zA-Z]+$/) !== null;