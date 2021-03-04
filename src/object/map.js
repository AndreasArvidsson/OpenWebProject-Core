/**
 * Iterate key/value pair with callback and create array.
 * @public
 * @param {object} obj
 * @param {function} callback
 * @returns {array}
 */
export default (obj, callback) => {
    const res = [];
    for (const i in obj) {
        res.push(callback(obj[i], i));
    }
    return res;
};