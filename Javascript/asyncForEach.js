var arr = new Array(999);
arr.fill(1);
function asyncForEach(array, handler) {
	var t = setInterval(function () {
		if (array.length === 0) {
			clearInterval(t);
		} else {
			handler(arr.shift());
		}
	}, 0);
}

//异步遍历
asyncForEach(arr, function (value) {
	console.log(value);
});

//同步遍历
arr.forEach(function (value, index, arr) {
	console.log(value);
});