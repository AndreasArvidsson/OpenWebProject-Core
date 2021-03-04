import Assert from "./Assert";
import { clamp } from "math";

console.log("test/math.js")

Assert.equals("math.clamp", 5, clamp(5, 2, 7));
Assert.equals("math.clamp", 5, clamp(2, 5, 7));
Assert.equals("math.clamp", 7, clamp(10, 5, 7));
