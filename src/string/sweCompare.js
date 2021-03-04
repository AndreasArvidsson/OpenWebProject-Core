/**
* String compare using swedish locale with support for åäö
* @public
* @param {string} a
* @param {string} b
* @returns {bool}
*/
export default (a, b) => a.localeCompare(b, "sv");