/**
 * The callback to use with array.sort() to sort by fields.
 * @public
 * @param {String} ...args
 * @returns {function}
 */
export default (...args) => {
    const body = [];
    for (let i = 0; i < args.length; ++i) {
        if (args[i].startsWith("-")) {
            const field = getField(args[i].slice(1));
            body.push(`if(a${field}>b${field}){return -1;}`);
            body.push(`if(a${field}<b${field}){return 1;}`);
        }
        else {
            const field = getField(args[i]);
            body.push(`if(a${field}>b${field}){return 1;}`);
            body.push(`if(a${field}<b${field}){return -1;}`);
        }
    }
    body.push("return 0;");
    return new Function("a", "b", body.join("\n"));
};

const getField = (value) =>
    value.split(".").reduce((res, field) => res + `["${field}"]`, "");