if (!Array.prototype.contains) {
    Object.defineProperty(Array.prototype, "contains", {
        value: function (predicateFunc) {
            for (let i = 0; i < this.length; ++i) {
                if (predicateFunc(this[i])) {
                    return true;
                }
            }
            return false;
        }
    });
}