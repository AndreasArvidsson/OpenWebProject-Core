import uniqueCallback from "./uniqueCallback";

/**
 * Returns new array with only unique values.
 * @public
 * @param {Array} arr
 * @returns {array} - New array
 */
export default arr => arr.filter(uniqueCallback);