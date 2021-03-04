# OpenWebProject Core/Object

## forEach
```javascript
forEach(obj, (value, key) => {
    console.log(key, value);
});
```

## map
```javascript
//Format
map(obj, function(value, key) {
    return value;
})

const obj = { a: 1, b: 2, c: 3 };
map(obj, v => v) -> [1, 2, 3]
map(obj, (v, k) => k) -> ["a", "b", "c"]
```

## reduce
```javascript
//Format
reduce(
    obj,
    function(accumulator, value, key, object) {
        return accumulator + value;
    },
    initializationValue
);

const obj = { a: 1, b: 2, c: 3 };

reduce(obj, (accumulator, value) => accumulator + value, 0) -> 6

reduce(obj, (accumulator, value) => {
        accumulator.value += value;
        return accumulator;
    }, 
    { value: 0 }
); 
-> { value: 6 }
```