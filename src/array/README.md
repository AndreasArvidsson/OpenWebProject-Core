# OpenWebProject Core/Array

## contains
```javascript
const arr = [1, 2, 3, 4, 5, 5];
arr.contains(e => e === 4)) -> true
arr.contains(e => e % 2 === 2)) -> true
arr.contains(e => e === 7) -> false
```

## move
```javascript
const arr = ["A", "B", "C", "D", "E"];
arr.move(1, 3);
arr -> ["A", "C", "D", "B", "E"]
```

## remove
```javascript
const arr = [1, 2, 3, 4, 5, 5];
arr.remove(e => e % 2 === 0) -> [2, 4]
arr -> [1, 3, 5, 5]
```

## sortBy
```javascript
const arr = [
    { value: 5, name: "b"},
    { value: 2, name: "a"},
    { value: 5, name: "a"}
]
//Sort first on value(ascending) then name(descending)
arr.sortBy("value", "-name");
arr -> [
    { value: 2, name: "a"},
    { value: 5, name: "b"},
    { value: 5, name: "a"}
]
//With the dot(.) operator you can sort on submembers
arr.sortBy("values.value", "-obj.name");
```

## unique
```javascript
const arr = [1, 2, 3, 4, 5, 5];
arr.unique() -> [1, 2, 3, 4, 5]
```