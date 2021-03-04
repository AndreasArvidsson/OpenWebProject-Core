import Assert from "./Assert";
import {
    capitalizeFirst,
    equalsIgnoreCase,
    format,
    includesIgnoreCase,
    isAlpha,
    isAlphaNum,
    replaceAll,
    sweCompare
} from "string";

console.log("test/string.js")

Assert.equals("string.capitalizeFirst", "Hello", capitalizeFirst("hello"));

Assert.equals("string.equalsIgnoreCase", true, equalsIgnoreCase("hello", "hello"));
Assert.equals("string.equalsIgnoreCase", true, equalsIgnoreCase("hello", "Hello"));
Assert.equals("string.equalsIgnoreCase", false, equalsIgnoreCase("hello", "Hello2"));

Assert.equals("string.format", "_A_5_true", format("_{0}_{1}_{2}", "A", 5, true));
Assert.equals("string.format", "_A_A_A", format("_{0}_{0}_{0}", "A"));

Assert.equals("string.includesIgnoreCase", true, includesIgnoreCase("_hello_", "hello"));
Assert.equals("string.includesIgnoreCase", true, includesIgnoreCase("_hello_", "Hello"));
Assert.equals("string.includesIgnoreCase", false, includesIgnoreCase("_hello_", "Hello2"));

Assert.equals("string.isAlpha", true, isAlpha("hello"));
Assert.equals("string.isAlpha", true, isAlpha("Hello"));
Assert.equals("string.isAlpha", false, isAlpha("Hello_"));

Assert.equals("string.isAlphaNum", true, isAlphaNum("hello"));
Assert.equals("string.isAlphaNum", true, isAlphaNum("Hello1"));
Assert.equals("string.isAlphaNum", false, isAlphaNum("Hello1_"));

Assert.equals("string.replaceAll", "A B C", replaceAll("A_B_C", "_", " "));

const list = ["å", "Å", "ä", "Ä", "ö", "Ö", "a", "A", "m", "M", "p", "P"];
list.sort((a, b) => sweCompare(a, b));
Assert.equals("string.sweCompare", "aAmMpPåÅäÄöÖ", list.join(""));