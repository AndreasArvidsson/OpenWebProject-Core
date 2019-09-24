/**
 * Get current time in milliseconds(epoch)
 * @public
 * @returns {Number}
 */
if (!Date.getCurrentTimeMillis) {
    Object.defineProperty(Date, "getCurrentTimeMillis", {
        value: function () {
            return new Date().getTime();
        }
    });
}