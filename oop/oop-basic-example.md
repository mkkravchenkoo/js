## Class with function constructor and prototype
```js
function Person(name, family) {
	this.name = name;
	this.family = family;
}

Person.prototype.getFullName = function () {
	return `${this.name} ${this.family}`
};


const person = new Person("John", "Doe");
console.log(person.getFullName())

```

## Class with es6
```js
class Person {
	constructor(name, family){
		this.name = name;
		this.family = family;
		Person.count++
	}
	getFullName () {
		return `${this.name} ${this.family}`
	}
	static getCount(){
		return Person.count
	}

	get fullName(){
		return `${this.name} ${this.family}`
	}
	set fullName(str){
		const [name, family] = str.split(" ");
		this.name = name;
		this.family = family;
	}

}
Person.count = 0;

const person1 = new Person("John", 'Smith');
const person2 = new Person("Walter", 'White');
console.log(Person.getCount());
console.log(person1.fullName);
person1.fullName = "John Doe";
console.log(person1.fullName);
```
