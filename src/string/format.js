/**
 * Return format string with arguments
 * @public
 * @param {string} format
 * @param {string} ...args
 * @returns {string}
 */
export default (format, ...args) => (
    format.replace(/{(\d+)}/g, (match, index) => (
        typeof args[index] !== "undefined" ? args[index] : match
    ))
);