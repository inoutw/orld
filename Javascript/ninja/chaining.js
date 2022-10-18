class Person {
	constructor(name, age){
		this.name = name
		this.age = age
	}
	eat() {
		console.log('eat breakfast')
		return this
	}
	run() {
		console.log('run fast')
		return this
	}
}
const person = new Person()
person.eat().run()

class MyNum {
	constructor(value) {
		this.value = value || 0;
	}
	add(count) {
		this.value += count
		return this
	}
	minus(count) {
		this.value -= count
		return this
	}
	get() {
		return this.value
	}
}
const myN = new MyNum()
myN.add(20).minus(9).get()