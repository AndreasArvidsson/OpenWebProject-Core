/**
 * ForEach over key/value pair of object.
 * @public
 * @param {object} obj
 * @param {function} callback
 */
export default (obj, callback) => {
    for (const i in obj) {
        callback(obj[i], i);
    }
};