/**
 * Replace all instances of search with replacement in str
 * @public
 * @param {string} str
 * @param {string} search
 * @param {string} replacement
 * @returns {string}
 */
export default (str, search, replacement) => str.replace(new RegExp(search, "g"), replacement);