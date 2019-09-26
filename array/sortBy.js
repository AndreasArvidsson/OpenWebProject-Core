if (!Array.prototype.sortBy) {
    Object.defineProperty(Array.prototype, "sortBy", {
        value: function () {
            const body = [];
            for (let i = 0; i < arguments.length; ++i) {
                if (arguments[i].startsWith("-")) {
                    const field = getField(arguments[i].slice(1));
                    body.push(`if(a${field}>b${field}){return -1;}`);
                    body.push(`if(a${field}<b${field}){return 1;}`);
                }
                else {
                    const field = getField(arguments[i]);
                    body.push(`if(a${field}>b${field}){return 1;}`);
                    body.push(`if(a${field}<b${field}){return -1;}`);
                }
            }
            body.push("return 0;");
            this.sort(new Function("a", "b", body.join("\n")));
        }
    });
}

function getField(value) {
    return value.split(".").reduce((res, field) => res + '["' + field + '"]', "");
}