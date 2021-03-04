import Assert from "./Assert";
import { format } from "date";

console.log("test/date.js")

const d = new Date("2001-02-03T04:05:06.789");
const d2 = new Date("0100-01-01T14:05:06");
format.setLocale("en-US");

Assert.equals("date.format", "1", format(d, "y"));
Assert.equals("date.format", "01", format(d, "yy"));
Assert.equals("date.format", "100", format(d2, "yyy"));
Assert.equals("date.format", "2001", format(d, "yyy"));
Assert.equals("date.format", "2001", format(d, "yyyy"));
Assert.equals("date.format", "2", format(d, "M"));
Assert.equals("date.format", "02", format(d, "MM"));
Assert.equals("date.format", "Feb", format(d, "MMM"));
Assert.equals("date.format", "February", format(d, "MMMM"));
Assert.equals("date.format", "3", format(d, "d"));
Assert.equals("date.format", "03", format(d, "dd"));
Assert.equals("date.format", "4", format(d, "h"));
Assert.equals("date.format", "2", format(d2, "h"));
Assert.equals("date.format", "04", format(d, "hh"));
Assert.equals("date.format", "02", format(d2, "hh"));
Assert.equals("date.format", "4", format(d, "H"));
Assert.equals("date.format", "14", format(d2, "H"));
Assert.equals("date.format", "14", format(d2, "HH"));
Assert.equals("date.format", "5", format(d, "m"));
Assert.equals("date.format", "05", format(d, "mm"));
Assert.equals("date.format", "6", format(d, "s"));
Assert.equals("date.format", "06", format(d, "ss"));
Assert.equals("date.format", "7", format(d, "f"));
Assert.equals("date.format", "78", format(d, "ff"));
Assert.equals("date.format", "789", format(d, "fff"));
Assert.equals("date.format", "A", format(d, "t"));
Assert.equals("date.format", "P", format(d2, "t"));
Assert.equals("date.format", "AM", format(d, "tt"));
Assert.equals("date.format", "PM", format(d2, "tt"));
Assert.equals("date.format", "2001-02-03T04:05:06.789", format(d, "yyyy-MM-ddTHH:mm:ss.fff"));