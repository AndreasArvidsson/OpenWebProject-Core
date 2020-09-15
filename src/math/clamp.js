/**
 * Clamp the given value to the given range.
 * @param {number} value - Value to clamp.
 * @param {number} min - Min value.
 * @param {number} max - Max value.
 * @returns {number} - Clamped value.
 */
if (!Math.clamp) {
    Object.defineProperty(Math, "clamp", {
        value: function (value, min, max) {
            if (value < min) {
                return min;
            }
            else if (value > max) {
                return max;
            }
            else {
                return value;
            }
        }
    });
}