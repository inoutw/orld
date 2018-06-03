// Prototype库，bind函数代码示例
Function.prototype.bind = function() {
    var fn = this, args = Array.prototype.slice.call(arguments),
    object = args.shift();
    return function() {
        return fn.apply(object, args.concat(Array.prototype.slice.call(arguments)));
    }
}

var myObject = {};
function myFunction() {
    return this == myObject;
}
console.log(!myFunction(), "context is not set yet");

var aFunction = myFunction.bind(myObject)
console.log(aFunction(), 'context is set properly');