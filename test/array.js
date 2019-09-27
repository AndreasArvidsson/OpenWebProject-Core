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