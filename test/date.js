import Assert from "./Assert";

console.log("test/date.js")

Assert.equals("date.getCurrentTimeMillis", true, Number.isInteger(Date.getCurrentTimeMillis()));

const d = new Date("2001-02-03T04:05:06.789");
const d2 = new Date("0100-01-01T14:05:06");
Date.setLocale("en-US");

Assert.equals("date.format", "1", d.format("y"));
Assert.equals("date.format", "01", d.format("yy"));
Assert.equals("date.format", "100", d2.format("yyy"));
Assert.equals("date.format", "2001", d.format("yyy"));
Assert.equals("date.format", "2001", d.format("yyyy"));
Assert.equals("date.format", "2", d.format("M"));
Assert.equals("date.format", "02", d.format("MM"));
Assert.equals("date.format", "Feb", d.format("MMM"));
Assert.equals("date.format", "February", d.format("MMMM"));
Assert.equals("date.format", "3", d.format("d"));
Assert.equals("date.format", "03", d.format("dd"));
Assert.equals("date.format", "4", d.format("h"));
Assert.equals("date.format", "2", d2.format("h"));
Assert.equals("date.format", "04", d.format("hh"));
Assert.equals("date.format", "02", d2.format("hh"));
Assert.equals("date.format", "4", d.format("H"));
Assert.equals("date.format", "14", d2.format("H"));
Assert.equals("date.format", "14", d2.format("HH"));
Assert.equals("date.format", "5", d.format("m"));
Assert.equals("date.format", "05", d.format("mm"));
Assert.equals("date.format", "6", d.format("s"));
Assert.equals("date.format", "06", d.format("ss"));
Assert.equals("date.format", "7", d.format("f"));
Assert.equals("date.format", "78", d.format("ff"));
Assert.equals("date.format", "789", d.format("fff"));
Assert.equals("date.format", "A", d.format("t"));
Assert.equals("date.format", "P", d2.format("t"));
Assert.equals("date.format", "AM", d.format("tt"));
Assert.equals("date.format", "PM", d2.format("tt"));
Assert.equals("date.format", "2001-02-03T04:05:06.789", d.format("yyyy-MM-ddTHH:mm:ss.fff"));