/**
 * True if the string are equals, ignoring case.
 * @public
 * @param {string} a
 * @param {string} b
 * @returns {bool}
 */
export default (a, b) =>
    typeof a === "string"
    && typeof b === "string"
    && a.length === b.length
    && a.toLowerCase() === b.toLowerCase();