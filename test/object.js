import Assert from "./Assert";
import { forEach, map, reduce } from "object";

console.log("test/object.js")

const obj = {
  a: 1,
  b: 2,
  c: 3
};

const res = {};
forEach(obj, (v, k) => {
  res[k] = v;
});
Assert.jsonEquals("object.forEach", obj, res);
Assert.jsonEquals("object.map", [1, 2, 3], map(obj, v => v));
Assert.jsonEquals("object.map", ["a", "b", "c"], map(obj, (v, k) => k));

const r1 = reduce(obj, (accumulator, value) => accumulator + value, 0);
Assert.equals("object.reduce", 6, r1);

const r2 = reduce(obj, (accumulator, value) => {
  accumulator.value += value;
  return accumulator;
}, { value: 0 });
Assert.jsonEquals("object.reduce", { value: 6 }, r2);