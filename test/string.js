import Assert from "./Assert";

console.log("test/string.js")

Assert.equals("string.capitalizeFirst", "Hello", "hello".capitalizeFirst());

Assert.equals("string.equalsIgnoreCase", true, "hello".equalsIgnoreCase("hello"));
Assert.equals("string.equalsIgnoreCase", true, "hello".equalsIgnoreCase("Hello"));
Assert.equals("string.equalsIgnoreCase", false, "hello".equalsIgnoreCase("Hello2"));

Assert.equals("string.format", "_A_5_true", "_{0}_{1}_{2}".format("A", 5, true));
Assert.equals("string.format", "_A_A_A", "_{0}_{0}_{0}".format("A"));

Assert.equals("string.includesIgnoreCase", true, "_hello_".includesIgnoreCase("hello"));
Assert.equals("string.includesIgnoreCase", true, "_hello_".includesIgnoreCase("Hello"));
Assert.equals("string.includesIgnoreCase", false, "_hello_".includesIgnoreCase("Hello2"));

Assert.equals("string.isAlpha", true, "hello".isAlpha());
Assert.equals("string.isAlpha", true, "Hello".isAlpha());
Assert.equals("string.isAlpha", false, "Hello_".isAlpha());

Assert.equals("string.isAlphaNum", true, "hello".isAlphaNum());
Assert.equals("string.isAlphaNum", true, "Hello1".isAlphaNum());
Assert.equals("string.isAlphaNum", false, "Hello1_".isAlphaNum());

Assert.equals("string.replaceAll", "A B C", "A_B_C".replaceAll("_", " "));