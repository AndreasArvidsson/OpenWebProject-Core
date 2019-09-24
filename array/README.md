# OpenWebProject Core/Array

## contains
```javascript
const arr = [1, 2, 3, 4, 5, 5];
arr.contains(e => e === 4)) -> true
arr.contains(e => e % 2 === 2)) -> true
arr.contains(e => e === 7) -> false
```

## remove
```javascript
const arr = [1, 2, 3, 4, 5, 5];
arr.remove(e => e % 2 === 0) -> [2, 4]
arr -> [1, 3, 5, 5]
```

## unique
```javascript
const arr = [1, 2, 3, 4, 5, 5];
arr.unique() -> [1, 2, 3, 4, 5]
```