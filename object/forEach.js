if (!Object.prototype.forEach) {
    Object.defineProperty(Object.prototype, "forEach", {
        value: function (callback) {
            for (let i in this) {
                callback(this[i], i);
            }
        }
    });
}