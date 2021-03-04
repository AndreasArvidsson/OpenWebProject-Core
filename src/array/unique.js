/**
 * Returns new array with only unique elements.
 * @public
 * @param {Array} arr
 * @returns {array} - New array
 */
export default arr => (
    arr.filter((value, index) =>
        arr.indexOf(value) === index
    )
);