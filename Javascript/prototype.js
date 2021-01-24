var F = function() {}
Object.prototype.a = function(){}
Function.prototype.b = function(){}
var f = new F()
f.a = ƒ(){ }
f.b = undefined
// f是F的实例， 所以f.__proto__指向F.prototype, js中，函数也是对象，
// F通过__proto__往上找，指向Object.prototype