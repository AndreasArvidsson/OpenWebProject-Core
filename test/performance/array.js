import _ from 'lodash';
import "../../array//sortBy";
import Performance from "./Performance";

console.log("performance/array.js\n")

const size = 1000000;
const arr1 = [];
const arr2 = [];
for (let i = 0; i < size; ++i) {
    arr1[i] = { val1: Math.random(), val2: Math.random() };
    arr2[i] = { values: { val1: Math.random(), val2: Math.random() } };
}

// new Performance(`Arr[${size}] - Simple objects`)
//     .setup(() => [...arr1])
//     .add("sort\t", (arr) => {
//         arr.sort((a, b) => {
//             if (a.val1 > b.val1) return 1;
//             if (a.val1 < b.val1) return -1;
//             if (a.val2 > b.val2) return -1;
//             if (a.val2 < b.val2) return 1;
//             return 0;
//         });
//     })
//     .add("sortBy\t", (arr) => {
//         arr.sortBy("val1", "-val2");
//     })
//     .add("_.orderBy\t", (arr) => {
//         _.orderBy(arr, ["val1", "val2"], ["asc", "desc"]);
//     })
//     .run();

// console.log("");

new Performance(`Arr[${size}] - Nested objects`)
    .setup(() => [...arr2])
    .add("sort\t", (arr) => {
        arr.sort((a, b) => {
            if (a.values.val1 > b.values.val1) return 1;
            if (a.values.val1 < b.values.val1) return -1;
            if (a.values.val2 > b.values.val2) return -1;
            if (a.values.val2 < b.values.val2) return 1;
            return 0;
        });
    })
    .add("sortBy\t", (arr) => {
        arr.sortBy("values.val1", "-values.val2");
    })
    .add("_.orderBy\t", (arr) => {
        _.orderBy(arr, ["values.val1", "values.val2"], ["asc", "desc"]);
    })
    .run();