/**
 * Reduce object to accumulator value.
 * @public
 * @param {object} obj
 * @param {function} callback
 * @param {any} initValue
 * @returns {string}
 */
export default (obj, callback, initValue) => (
    Object.keys(obj).reduce((accumulator, key) => (
        callback(accumulator, obj[key], key, obj)
    ), initValue)
);