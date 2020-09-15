if (!Array.prototype.remove) {
    Object.defineProperty(Array.prototype, "remove", {
        value: function (predicateFunc) {
            const removed = [];
            for (let i = this.length - 1; i > -1; --i) {
                if (predicateFunc(this[i])) {
                    removed.push(this.splice(i, 1)[0]);
                }
            }
            return removed;
        }
    });
}