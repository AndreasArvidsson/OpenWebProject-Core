if (!Array.prototype.move) {
    Object.defineProperty(Array.prototype, "move", {
        value: function (from, to) {
            if (to >= this.length) {
                this[to] = this.splice(from, 1)[0];
            }
            else {
                this.splice(to, 0,
                    this.splice(from, 1)[0]
                );
            }
        }
    });
}