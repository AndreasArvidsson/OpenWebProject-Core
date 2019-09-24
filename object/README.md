# OpenWebProject Core/Object

## map
```javascript
//Format
obj.map(function(value, key) {
    return value;
})

const obj = { a: 1, b: 2, c: 3 };
obj.map(v => v) -> [1, 2, 3]
obj.map((v, k) => k) -> ["a", "b", "c"]
```

## reduce
```javascript
//Format
obj.reduce(
    function(accumulator, value, key, object) {
        return accumulator + value;
    },
    initializationValue
);

const obj = { a: 1, b: 2, c: 3 };

obj.reduce((accumulator, value) => accumulator + value, 0) -> 6

obj.reduce((accumulator, value) => {
        accumulator.value += value;
        return accumulator;
    }, 
    { value: 0 }
); 
-> { value: 6 }
```