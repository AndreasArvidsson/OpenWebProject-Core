if (!Array.prototype.unique) {
    Object.defineProperty(Array.prototype, "unique", {
        value: function () {
            return this.filter(function (value, index, self) {
                return self.indexOf(value) === index;
            });
        }
    });
}