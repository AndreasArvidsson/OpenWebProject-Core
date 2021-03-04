/**
 * Remove elements when callback returns true.
 * @public
 * @param {Array} arr
 * @param {function} callback
 * @returns {array} - Remvoved elements
 */
export default (arr, callback) => {
    const removed = [];
    for (let i = arr.length - 1; i > -1; --i) {
        if (callback(arr[i])) {
            removed.push(arr.splice(i, 1)[0]);
        }
    }
    return removed;
};