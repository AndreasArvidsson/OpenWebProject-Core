/**
 * True if the string are equals, ignoring case.
 * @public
 * @param {string} str
 * @returns {bool}
 */
if (!String.prototype.equalsIgnoreCase) {
    Object.defineProperty(String.prototype, "equalsIgnoreCase", {
        value: function (str) {
            return typeof str === "string" && this.length === str.length && this.valueOf().toLowerCase() === str.toLowerCase();
        }
    });
}