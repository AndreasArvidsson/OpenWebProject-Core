# OpenWebProject Core/Date

## getCurrentTimeMillis
```javascript
Date.getCurrentTimeMillis() -> 1569347247042
```

## setLocale
* Used by format to generate day and month names
* Defaults to browser standard
```javascript
Date.setLocale("en-US")
```

## format
```javascript
Date.format("yyyy-MM-ddTHH-mm-ss") -> "2019-05-13T12:23:12"
new Date().format("yyyy-MM-ddTHH-mm-ss") -> "2019-05-13T12:23:12"
```

## Parameters

| Format specifier | Description  |
| ------- | ---------------- |
| y  | The year, from 0 to 99. |
| yy | The year, from 00 to 99. |
| yyy | The year, with a minimum of three digits. |
| yyyy | The year as a four-digit number. |
| &nbsp; | &nbsp; |
| M | The month, from 1 through 12. |
| MM | The month, from 01 through 12. |
| MMM | The abbreviated name of the month. |
| MMMM | The full name of the month. |
| &nbsp; | &nbsp; |
| d | The day of the month, from 1 through 31. |
| dd | The day of the month, from 01 through 31. |
| ddd | The abbreviated name of the day of the week. |
| dddd | The full name of the day of the week. |
| &nbsp; | &nbsp; |
| h | The hour, using a 12-hour clock from 1 to 12. |
| hh | The hour, using a 12-hour clock from 01 to 12. |
| H | The hour, using a 24-hour clock from 0 to 23. |
| HH | The hour, using a 24-hour clock from 00 to 23. |
| &nbsp; | &nbsp; |
| m | The minute, from 0 through 59. |
| mm | The minute, from 00 through 59. |
| &nbsp; | &nbsp; |
| s | The second, from 0 through 59. |
| ss | The second, from 00 through 59. |
| &nbsp; | &nbsp; |
| f | The tenths of a second in a date and time value. |
| ff | The hundredths of a second in a date and time value. |
| fff | The milliseconds in a date and time value. |
| &nbsp; | &nbsp; |
| t | The first character of the AM/PM designator. |
| tt | The AM/PM designator. |