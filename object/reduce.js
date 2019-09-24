if (!Object.prototype.reduce) {
    Object.defineProperty(Object.prototype, "reduce", {
        value: function (callback, initValue) {
            return Object.keys(this).reduce((accumulator, key) => {
                return callback(accumulator, this[key], key, this);
            }, initValue);
        }
    });
}