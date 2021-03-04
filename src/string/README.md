# OpenWebProject Core/String

## capitalizeFirst
```javascript
capitalizeFirst("hello") -> "Hello"
```

## equalsIgnoreCase
```javascript
equalsIgnoreCase("hello", "Hello") -> true
```

## format
```javascript
format("_{0}_{1}_{2}_", "A", 5, true) -> "_A_5_true_"
format("_{0}_{0}_{0}_", "A") -> "_A_A_A_"
```

## includesIgnoreCase
```javascript
includesIgnoreCase("_hello_", "Hello") -> true
```

## isAlpha
```javascript
isAlpha("hello") -> true
isAlpha("hello_") -> false
```

## isAlphaNum
```javascript
isAlphaNum("hello") -> true
isAlphaNum("hello1") -> true
isAlphaNum("hello_") -> false
```

## replaceAll
```javascript
replaceAll("A_B_C", "_", " ") -> "A B C"
```

## sweCompare
```javascript
sweCompare("Ö", "Z") -> 1
```