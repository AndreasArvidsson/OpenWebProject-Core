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

const arr4 = ["A", "B", "C", "D", "E"];
arr4.move(1, 3);
Assert.equals("array.move(1, 3)",
    '["A","C","D","B","E"]',
    JSON.stringify(arr4)
);

const arr5 = ["A", "B", "C", "D", "E"];
arr5.move(3, 1);
Assert.equals("array.move(3, 1)",
    '["A","D","B","C","E"]',
    JSON.stringify(arr5)
);

const arr6 = ["A", "B", "C"];
arr6.move(0, 2);
Assert.equals("array.move(0, 2)",
    '["B","C","A"]',
    JSON.stringify(arr6)
);

const arr7 = ["A", "B", "C"];
arr7.move(0, 3);
Assert.equals("array.move(0, 3)",
    '["B","C",null,"A"]',
    JSON.stringify(arr7)
);

const arr8 = ["A", "B", "C"];
arr8.move(3, 0);
Assert.equals("array.move(3, 0)",
    '[null,"A","B","C"]',
    JSON.stringify(arr8)
);