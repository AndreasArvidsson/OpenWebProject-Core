# OpenWebProject Core/String

## capitalizeFirst
```javascript
"hello".capitalizeFirst() -> "Hello"
```

## equalsIgnoreCase
```javascript
"hello".equalsIgnoreCase("Hello") -> true
```

## format
```javascript
"_{0}_{1}_{2}_".format("A", 5, true) -> "_A_5_true_"
"_{0}_{0}_{0}_".format("A") -> "_A_A_A_"
```

## includesIgnoreCase
```javascript
"_hello_".includesIgnoreCase("Hello") -> true
```

## isAlpha
```javascript
"hello".isAlpha() -> true
"hello_".isAlpha() -> false
```

## isAlphaNum
```javascript
"hello".isAlphaNum() -> true
"hello1".isAlphaNum() -> true
"hello_".isAlphaNum() -> false
```

## replaceAll
```javascript
"A_B_C".replaceAll("_", " ") -> "A B C"
```