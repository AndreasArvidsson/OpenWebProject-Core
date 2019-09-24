import Assert from "./Assert";

console.log("test/math.js")

Assert.equals("math.clamp", 5, Math.clamp(5, 2, 7));
Assert.equals("math.clamp", 5, Math.clamp(2, 5, 7));
Assert.equals("math.clamp", 7, Math.clamp(10, 5, 7));
