function Node(prev, data) {
	this.prev = prev;
	this.data = data;
}

const n1 = new Node(null, {n:"name1"});
const n2 = new Node(n1, {n:"name1"});
const n3 = new Node(n2, {n:"name1"});

console.log(n2)



class List{
	constructor() {
		this.last = null;
	}
	push(data){
		const prev = this.last;
		const element = {prev, data};
		this.last = element;
		return element;
	}
}
const list = new List();
list.push({n:"n1"});
list.push({n:"n2"});
list.push({n:"n3"});

console.log(list)
