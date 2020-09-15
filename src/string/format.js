if (!String.prototype.format) {
    Object.defineProperty(String.prototype, "format", {
        value: function () {
            const args = arguments;
            return this.replace(/{(\d+)}/g, function (match, index) {
                return typeof args[index] !== "undefined" ? args[index] : match;
            });
        }
    });
}
