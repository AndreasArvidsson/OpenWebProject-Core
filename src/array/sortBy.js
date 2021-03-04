/**
 * Sort array by fields
 * @public
 * @param {Array} arr
 * @param {String} ...args
 */
export default (arr, ...args) => {
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
    arr.sort(new Function("a", "b", body.join("\n")));
};

function getField(value) {
    return value.split(".").reduce((res, field) => res + `["${field}"]`, "");
}