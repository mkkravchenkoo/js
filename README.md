# JavaScript

REMOVE AN ITEM YOU KNOW ITS INDEX
```javascript
const items = ['a', 'b', 'c', 'd', 'e', 'f'];
const i = const filteredItems = items.slice(0, i-1).concat(items.slice(i, items.length));
// ["a", "b", "d", "e", "f"]

```