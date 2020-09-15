/**
* Return true if this is alpha[a-zA-Z] only.
* @public
* @returns {bool}
*/
if (!String.prototype.isAlpha) {
    Object.defineProperty(String.prototype, "isAlpha", {
        value: function () {
            return this.match(/^[a-z]+$/i) !== null;
        }
    });
}