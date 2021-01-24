var lis = document.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
	//立即执行函数表达式,将当前i传给函数,触发onclick事件,当前i保存在内存中。
	lis[i].onclick = (function (i) {
		return function () {
			console.log(i);
		}
	})(i)
}

function fn(n) {
	lis[n].onclick = function () {
		alert(n)
	}
}
for (var i = 0; i < lis.length; i++) {
	fn(i)
}

/**
 * a 在定义的时候就已经确定了值，而不是调用函数的时候确定
 */
var a = 100 
function f1() { console.log(a) }
function f2() { var a = 200; f1() }
f2()
// 100

var a = 100 
function f1() { console.log(a) }
function f2() { var a = 200; f1() }
f2(f1)
// 100

var a = 100 
function f2() {
	var a = 200;
	function f1() { 
		console.log(a)
	}
	return f1
}
var f = f2()
f()
// 200


let x = 1;
function A(y) {
    let x = 2;
    function B(z) {
        console.log(x+y+z);
    }
    return B;
}
let c = A(2);
c(3)
// 7
// y=2; z=3; x=2
//c = function B(z) {
// 	console.log(x+y+z)
// }