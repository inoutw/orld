/**
 * ES6 reduce方法
 * executes a provided function for each value of the array
 * return value of the function is stored in an accumulator
 * syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
 * 
 */
//middleValue 初始值
var a = [1,2,3,4,5,6,7]
a.reduce((middlevalue, second) => { 
	console.log(middlevalue, second);
	return middlevalue + second; 
}, 0)
// 0 1
// 1 2
// 3 3
// 6 4
// 10 5
// 15 6
// 21 7
// 28

// 相当于
var middlevalue = 0;
for(let itemVal of a) { 
	middlevalue = middlevalue + itemVal; 
};
console.log(middlevalue)