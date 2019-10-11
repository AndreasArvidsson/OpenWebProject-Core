import Assert from "./Assert";

console.log("test/object.js")

const obj = {
    a: 1,
    b: 2,
    c: 3
};

const res = {};
obj.forEach((v, k) => {
  res[k] = v;
});
Assert.jsonEquals("object.forEach", obj, res);

Assert.jsonEquals("object.map", [1, 2, 3], obj.map(v => v));
Assert.jsonEquals("object.map", ["a", "b", "c"], obj.map((v, k) => k));

const r1 = obj.reduce((accumulator, value) => accumulator + value, 0);
Assert.equals("object.reduce", 6, r1);

const r2 = obj.reduce((accumulator, value) => {
    accumulator.value += value;
    return accumulator;
}, { value: 0 });
Assert.jsonEquals("object.reduce", { value: 6 }, r2);
