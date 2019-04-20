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
OBJECT.VALUES()
```javascript
const person = { name: 'Fred', age: 87 };
Object.values(person); // ['Fred', 87]
//
const people = ['Fred', 'Tony'];
Object.values(people) // ['Fred', 'Tony']
```

OBJECT.HASOWNPROPERTY()
```javascript
const person = { name: 'Fred', age: 87 };
person.hasOwnProperty('name'); //true
person.hasOwnProperty('job'); //false
```

#Numbers

```javascript
new Number(21.2).toFixed(); //21
new Number(21.2).toFixed(2); //21.20
```

DATE.PARSE()

```javascript
Date.parse('July 22, 2018 07:22:13') //1532236933000

Date.now() //get timestamp

const date = new Date('July 22, 2018 07:22:13');
date.setMonth(10);
console.log(date, date.getTime());

```

JSON
```javascript
const obj = {name: 'Test Name', year: 2019};
const objStr = JSON.stringify(obj); // string {"name":"Test Name","year":2019}
const objAgain = JSON.parse(objStr)  // object { name: 'Test Name', year: 2019 }
```

STRING
```javascript
'JavaScript'.endsWith('Script') //true
'JavaScript'.includes('aSc') //true
'JavaScript'.indexOf('aSc') //3
'JavaScript'.indexOf('aSc') //3
'JavaScript'.replace('Java', 'Type') //'TypeScript'
'JavaScript JavaX'.replace(/Java/g, 'Type') //'TypeScript TypeX'
'JavaScript'.replace(/Java/, (match, index, originalString) => {
    console.log(match, index, originalString)
    return 'Test'
}) //TestScript
'JavaScript'.search('Script') //4
'JavaScript'.search(/Script/) //4
'This is my car'.slice(5) //is my car 
'This is my car'.slice(5, 10) //is my
'This is my car'.slice(-6) //my car
'testing'.startsWith('test') //true
'going on testing'.startsWith('test', 9) //true
'This is my car'.substring(5, 10) //'is my' negative integer convert to 0

const str = new String('Test')
str.toString() //'Test'
' Testing '.trim() //'Testing'
'Testing '.trimEnd() //'Testing'
' Testing '.trimStart() //'Testing '

```
MATH
```javascript
Math.ceil(2.1) //3
Math.ceil(2.5) //3
Math.floor(2.99999) //2
Math.max(1,2,3,4,5) //5
Math.max(1,2,3,4,5) //1
Math.pow(2, 4) //16
Math.sqrt(16) //4

```

REGULAR EXPRESSIONS
```javascript
const rel = new RegExp('hey');
const rel2 = /hey/;
console.log(rel.test('hey'))
console.log(rel2.test('hey'))

const reg1 = /^hey.*joe$/; // '^' - from start, '$' - from end, '.*' any 
reg1.test('hey how are you joe')

// • \d matches any digit, equivalent to [0-9]
// • \D matches any character that’s not a digit, equivalent to [^0-9]
// • \w matches any alphanumeric character (plus underscore), equivalent to [A-Za-z_0-9]
// • \W matches any non-alphanumeric character, anything except [^A-Za-z_0-9]
// • \s matches any whitespace character: spaces, tabs, newlines and Unicode spaces
// • \S matches any character that’s not a whitespace

const regNumbers = /^\d+$/;
regNumbers.test('12') // find numbers

const betweenItems = /^\d{3,5}$/;
betweenItems.test('5555') 

const nLeng = /^\d{3}$/;
nLeng.test('123') //

var str = "Ай-ОЙ-Ой-ой-ой";
str.match( /ой/ ); // [совпадение,  позиция,  вся поисковая строка]
str.match( /(ой)/ ); // [всё совпадение полностью,  часть совпадения соответствующая скобкам,  вся поисковая строка,  позиция,  вся поисковая строка]
str.match( /ой/g ); // ["ой", "ой"] При наличии флага g, вызов match возвращает обычный массив из всех совпадений.
//В случае, если совпадений не было, match возвращает null

'12-34-56'.replace( /-/g, ":" ); // 12:34:56 - Швейцарский нож для работы со строками, поиска и замены любого уровня сложности.
var str = "Василий Пупкин";
str.replace(/(Василий) (Пупкин)/, '$2, $1') // Пупкин, Василий
str.replace(/Василий Пупкин/, 'Великий $&!') // Великий Василий Пупкин!


/hey|ho/.exec('hey') // [ "hey" ]
/(hey).(ho)/.exec('hey ho') // [ "hey ho", "hey", "ho" ]

alert( "Hello, Java!".match(/\bJava\b/) ); // Java
alert( "Hello, Javascript!".match(/\bJava\b/) ); // null

"My dog is a good dog!".replace(/dog/g, 'cat') //My cat is a good cat!

/Roger(?= Waters)/.test('Roger is my dog and Roger Waters is a famous musician') //true

```
Error

[].length = -1 //RangeError: Invalid array length

dog = 2 //ReferenceError: dog is not defined

function() {
    return 'Hi!'
} //SyntaxError: function statement requires a name

1() //TypeError: 1 is not a function

TIMERS
```
const myFunction = (firstParam, secondParam) => {
// do something
}

// runs after 2 seconds
setTimeout(myFunction, 2000, firstParam, secondParam)

const interval = setInterval(() => {
    if (App.somethingIWait === 'arrived') {
        clearInterval(interval)
            return
        }
    // otherwise do things
}, 100)

```

Promise
```javascript
const promise = new Promise((resolve, reject) => {
    const success = true;
    success ? resolve('this is success') : reject('this is error')
});

promise
    .then(res => console.log('result '+ res))
    .catch(error => console.log(error));

```

FETCH
```javascript
const users = fetch('https://jsonplaceholder.typicode.com/todos/1111');
users
    .then((u) => {return u.json()})
    .then((b) => {console.log(b)})
    .catch((e) => {console.log(e)})
    .finally(() => console.log('finished'))
```

ASYNC/AWAIT
```javascript
const getUer = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
};

const user = async () => {
    try {
        let myUser = await getUer();
        console.log(myUser)
    }catch(e){
        console.log('Error')
    }
};

user();
```
MAP
```javascript
const a = [2,4,8];
const b = a.map(function (current, index, array) {
    return current+1;
});
```
FILTER
```javascript
const a = [2,4,8];
const b = a.filter(function (current, index, array) {
    return current > 3;
});
```
REDUCE
```javascript
const a = [2,4,8,-1];
const b = a.reduce(function (accum, current, index) {
    return accum+current;
});
```
