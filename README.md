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

OBJECT.ASSIGN()
Introduced in ES2015, this method copies all the enumerable own properties of one or more objects
into another.
```javascript
const wisePerson = {
    isWise: true
};
const foolishPerson = {
    isFoolish: true
};
const wiseAndFoolishPerson = Object.assign({}, wisePerson, foolishPerson);
```

OBJECT.CREATE()
Creates a new object, with the specified prototype.
```javascript
const animal = {prot:true};
const dog = Object.create(animal, {
    breed: {
        value: 'Siberian Husky'
    }
});
```

OBJECT.DEFINEPROPERTIES()
Creates or configures multiple object properties at once. Returns the object.
```javascript
const dog = {};
Object.defineProperties(dog, {
    breed: {
        value: 'Siberian Husky'
    }
});
console.log(dog.breed) //'Siberian Husky'
```

OBJECT.DEFINEPROPERTY()
Creates or configures one object property. Returns the object.
```javascript
const dog = {};
Object.defineProperty(dog, 'breed', {
    value: 'Siberian Husky'
});
console.log(dog.breed) //'Siberian Husky'
```

OBJECT.ENTRIES()
Returns an array containing all the object own properties, [key,value].
```javascript
const person = { name: 'Fred', age: 87 };
Object.entries(person) // [['name', 'Fred'], ['age', 87]]
```


OBJECT.FREEZE()
```javascript
const dog = {}
dog.breed = 'Siberian Husky'
const myDog = Object.freeze(dog)
Object.isFrozen(dog) //true
Object.isFrozen(myDog) //true
dog === myDog //true
dog.name = 'Roger' //TypeError: Cannot add property name, object is not extensible
```
OBJECT.GETOWNPROPERTYNAMES()
```javascript
const dog = {};
dog.breed = 'Siberian Husky';
dog.name = 'Roger';
Object.getOwnPropertyNames(dog) //[ 'breed', 'name' ]
```

OBJECT.GETPROTOTYPEOF()
```javascript
const animal = {};
const dog = Object.create(animal);
const prot = Object.getPrototypeOf(dog);
animal === prot //true
```

OBJECT.ISEXTENSIBLE()
```javascript
const dog = {};
Object.isExtensible(dog); //true
const cat = {};
Object.freeze(cat);
Object.isExtensible(cat); //false
```
OBJECT.KEYS()
```javascript
const car = {
color: 'Blue',brand: 'Ford',
model: 'Fiesta'
};
Object.keys(car); //[ 'color', 'brand', 'model' ]
```

OBJECT.SEAL()
New properties can’tbe added,
and existing properties can’t be removed, but existing properties can be changed.
```javascript
const dog = {};
dog.breed = 'Siberian Husky';
const myDog = Object.seal(dog);
dog.breed = 'Pug';
dog.name = 'Roger'; //TypeError: Cannot add property name, object is not extensible
```