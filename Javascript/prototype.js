var F = function() {}
Object.prototype.a = function(){}
Function.prototype.b = function(){}
var f = new F()
f.a = ƒ(){ }
f.b = undefined
// f是F的实例， 所以f.__proto__指向F.prototype, js中，函数也是对象，
// F通过__proto__往上找，指向Object.prototy



function Person() {}
var person = new Person()
console.log(person.__proto__ === Person.prototype)//true
console.log(Person.prototype.constructor===Person)//true
    //顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) // true

//在JavaScript中是通过prototype对象指向父类对象，直到指向Object对象为止，这样就形成了一个原型指向的链条
//访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，如果没有则会去原型对象中寻找，如果找到则直接使用。如果没有则去原型的原型中寻找,直到找到Object对象的原型，Object对象的原型没有原型，如果在Object原型中依然没有找到，则返回undefined
