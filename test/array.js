import Assert from "./Assert";

console.log("test/array.js")

const arr = [1, 2, 3, 4, 5, 5];

Assert.equals("array.contains", true, arr.contains(e => e === 4));
Assert.equals("array.contains", false, arr.contains(e => e === 7));

const removed = arr.remove(e => e % 2 === 0);
Assert.equals("array.remove", 2, removed.length);
Assert.equals("array.remove", 4, arr.length);

Assert.equals("array.unique", 3, arr.unique().length);