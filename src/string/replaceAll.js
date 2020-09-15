if (!String.prototype.replaceAll) {
    Object.defineProperty(String.prototype, "replaceAll", {
        value: function (search, replacement) {
            return this.replace(new RegExp(search, "g"), replacement);
        }
    });
}