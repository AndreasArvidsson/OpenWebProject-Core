/**
 * Move element from one index to the other.
 * @public
 * @param {Array} arr
 * @param {number} from
 * @param {number} to
 */
export default (arr, from, to) => {
    if (to >= arr.length) {
        arr[to] = arr.splice(from, 1)[0];
    }
    else {
        arr.splice(to, 0,
            arr.splice(from, 1)[0]
        );
    }
};