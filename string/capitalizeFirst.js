if (!String.prototype.capitalizeFirst) {
    Object.defineProperty(String.prototype, "capitalizeFirst", {
        value: function () {
            return this.charAt(0).toUpperCase() + this.slice(1);
        }
    });
}