/**
 * Return true if this string is alphanumberic[a-zA-Z0-9] only.
 * @public
 * @returns {bool}
 */
if (!String.prototype.isAlphaNum) {
    Object.defineProperty(String.prototype, "isAlphaNum", {
        value: function () {
            return this.match(/^[a-z0-9]+$/i) !== null;
        }
    });
}