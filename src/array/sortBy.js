import sortByCallback from "./sortByCallback";

/**
 * Sort array by fields
 * @public
 * @param {Array} arr
 * @param {String} ...args
 */
export default (arr, ...args) => {
    arr.sort(sortByCallback(...args));
};