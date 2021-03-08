import Assert from "./Assert";
import {
    contains,
    remove,
    unique,
    uniqueCallback,
    sortBy,
    sortByCallback,
    move
} from "array";

console.log("test/array.js")

const arr = [1, 2, 3, 4, 5, 5];

Assert.equals("array.contains", true, contains(arr, e => e === 4));
Assert.equals("array.contains", false, contains(arr, e => e === 7));

const removed = remove(arr, e => e % 2 === 0);
Assert.equals("array.remove", 2, removed.length);
Assert.equals("array.remove", 4, arr.length);

Assert.equals("array.unique", 3, unique(arr).length);

Assert.equals("array.uniqueCallback", 3, arr.filter(uniqueCallback).length);

const arr2 = [
    { value: 5, name: "b" },
    { value: 2, name: "a" },
    { value: 5, name: "a" }
]
sortBy(arr2, "value", "-name");
Assert.equals("array.sortBy",
    '[{"value":2,"name":"a"},{"value":5,"name":"b"},{"value":5,"name":"a"}]',
    JSON.stringify(arr2)
);

const arr3 = [
    { values: { value: 5, name: "b" } },
    { values: { value: 2, name: "a" } },
    { values: { value: 5, name: "a" } }
]
arr3.sort(sortByCallback("values.value", "-values.name"));
Assert.equals("array.sortByCallback",
    '[{"values":{"value":2,"name":"a"}},{"values":{"value":5,"name":"b"}},{"values":{"value":5,"name":"a"}}]',
    JSON.stringify(arr3)
);

const arr4 = ["A", "B", "C", "D", "E"];
move(arr4, 1, 3);
Assert.equals("array.move(1, 3)",
    '["A","C","D","B","E"]',
    JSON.stringify(arr4)
);

const arr5 = ["A", "B", "C", "D", "E"];
move(arr5, 3, 1);
Assert.equals("array.move(3, 1)",
    '["A","D","B","C","E"]',
    JSON.stringify(arr5)
);

const arr6 = ["A", "B", "C"];
move(arr6, 0, 2);
Assert.equals("array.move(0, 2)",
    '["B","C","A"]',
    JSON.stringify(arr6)
);

const arr7 = ["A", "B", "C"];
move(arr7, 0, 3);
Assert.equals("array.move(0, 3)",
    '["B","C",null,"A"]',
    JSON.stringify(arr7)
);

const arr8 = ["A", "B", "C"];
move(arr8, 3, 0);
Assert.equals("array.move(3, 0)",
    '[null,"A","B","C"]',
    JSON.stringify(arr8)
);