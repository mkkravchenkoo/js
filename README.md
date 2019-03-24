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