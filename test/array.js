import Assert from "./Assert";

console.log("test/array.js")

const arr = [1, 2, 3, 4, 5, 5];

Assert.equals("array.contains", true, arr.contains(e => e === 4));
Assert.equals("array.contains", false, arr.contains(e => e === 7));

const removed = arr.remove(e => e % 2 === 0);
Assert.equals("array.remove", 2, removed.length);
Assert.equals("array.remove", 4, arr.length);

Assert.equals("array.unique", 3, arr.unique().length);

const arr2 = [
    { value: 5, name: "b" },
    { value: 2, name: "a" },
    { value: 5, name: "a" }
]
arr2.sortBy("value", "-name");
Assert.equals("array.sortBy",
    '[{"value":2,"name":"a"},{"value":5,"name":"b"},{"value":5,"name":"a"}]',
    JSON.stringify(arr2)
);

const arr3 = [
    { values: { value: 5, name: "b" } },
    { values: { value: 2, name: "a" } },
    { values: { value: 5, name: "a" } }
]
arr3.sortBy("values.value", "-values.name");
Assert.equals("array.sortBy",
    '[{"values":{"value":2,"name":"a"}},{"values":{"value":5,"name":"b"}},{"values":{"value":5,"name":"a"}}]',
    JSON.stringify(arr3)
);

/*eslint-disable no-unused-vars */
function sortPerformance() {
    const size = 3000000;
    const arr1 = [];
    const arr2 = [];
    for (let i = 0; i < size; ++i) {
        arr1[i] = { val1: Math.random(), val2: Math.random() };
        arr2[i] = { values: {val1: Math.random(), val2: Math.random()} };
    }
    let t1, t2;

    // t1 = Date.now();
    // arr1.sort((a, b) => {
    //     if (a.val1 > b.val1) return 1;
    //     if (a.val1 < b.val1) return -1;
    //     if (a.val2 > b.val2) return -1;
    //     if (a.val2 < b.val2) return 1;
    //     return 0;
    // });
    // t2 = Date.now();
    // console.log("arr1.sort", t2 - t1);

    // t1 = Date.now();
    // arr1.sortBy("val1", "-val2");
    // t2 = Date.now();
    // console.log("arr1.sortBy", t2 - t1);

    // t1 = Date.now();
    // arr2.sort((a, b) => {
    //     if (a.values.val1 > b.values.val1) return 1;
    //     if (a.values.val1 < b.values.val1) return -1;
    //     if (a.values.val2 > b.values.val2) return -1;
    //     if (a.values.val2 < b.values.val2) return 1;
    //     return 0;
    // });
    // t2 = Date.now();
    // console.log("arr2.sort", t2 - t1);

    t1 = Date.now();
    arr2.sortBy("values.val1", "-values.val2");
    t2 = Date.now();
    console.log("arr2.sortBy", t2 - t1);
 
}
// sortPerformance();