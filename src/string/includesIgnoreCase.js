/**
 * Check if the this string contains the given string, ignoring case.
 * @public
 * @param {string} str - Substring to check for.
 * @returns {bool}
 */
if (!String.prototype.includesIgnoreCase) {
    Object.defineProperty(String.prototype, "includesIgnoreCase", {
        value: function (str) {
            return this.search(new RegExp(str, "i")) !== -1;
        }
    });
}