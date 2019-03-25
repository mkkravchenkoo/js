# JavaScript

REMOVE AN ITEM YOU KNOW ITS INDEX
```javascript
const items = ['a', 'b', 'c', 'd', 'e', 'f'];
const i = 3; 
const filteredItems = items.slice(0, i-1).concat(items.slice(i, items.length));
// ["a", "b", "d", "e", "f"]

```

REMOVE AN ITEM YOU KNOW ITS VALUE

```javascript
const items = ['a', 'b', 'c', 'd', 'e', 'f'];
const valueToRemove = 'c';
const filteredItems = items.filter(item => item !== valueToRemove);
// ["a", "b", "d", "e", "f"]
```

REMOVE MULTIPLE ITEMS BY VALUE
```javascript
const items = ['a', 'b', 'c', 'd', 'e', 'f'];
const valuesToRemove = ['c', 'd'];
const filteredItems = items.filter(item => !valuesToRemove.includes(item));
// ["a", "b", "e", "f"]
```

INDEXOF() Returns the index of the first matching item found, or -1 if not found
```javascript
const arr = ['a', 'b', 'c'];
console.log(arr.indexOf('b'));
```

LASTINDEXOF()  Returns the index of the last matching item found, or -1 if not found
```javascript
const arr = ['a', 'b', 'c', 'c'];
console.log(arr.lastIndexOf('c'));
```

FIND()  Returns the first item that returns true. Returns undefined if not found.
```javascript
const objArr = [{name:'a'},{name:'b'},{name:'c'}];
const res = objArr.find(x => x.name === 'c'); 
```

FINDINDEX()  returns the index of the first item that returns true, and if not found, it

```javascript
const result = arr.findIndex((element, index, array) => {
    //return true or false
    if(element === 'c'){
        return true
    }
});

console.log(result)
```

INCLUDES() returns a true boolean value if the element is included in the array, or false otherwise:
```javascript
if ([1,2].includes(2)) {
    console.log('found')
}
```

Sort by a custom function
```javascript
const a = [1, 10, 3, 2, 11]
a.sort((a, b) => a - b) //1, 2, 3, 10, 11
```

FOREACH
```javascript
a.forEach(v => {
    console.log(v)
})
```

FOR..OF
```javascript
for (let v of a) {
    console.log(v)
}
```

SORT AN ARRAY OF OBJECTS BY A PROPERTY VALUE
```javascript
const list = [
    { color: 'white', size: 'XXL' },
    { color: 'red', size: 'XL' },
    { color: 'black', size: 'M' }
];

list.sort((a, b) => (a.color > b.color) ? 1 : -1);
```