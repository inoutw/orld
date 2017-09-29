/**
 * find the first matched key in an array
 */
arr = [{ "text": "You Don\'t Know JS" }, { "image": "https://github.com/getify/You-Dont-Know-JS/raw/master/up%20%26%20going/cover.jpg" }, { "text": "https://github.com/getify/You-Dont-Know-JS" }, { "image": "https://github.com/getify/You-Dont-Know-JS/raw/master/up%20%26%20going/cover1.jpg" }];
arr.find(function (item, index) { return item.image });
//{image: "https://github.com/getify/You-Dont-Know-JS/raw/master/up%20%26%20going/cover.jpg"}
var images = [];
for (let item of arr) {
	if (item.image) {
		images.push(item.image);
		// console.log(item.image);
	}
}
images.join(',');
console.log(images);

/**
 * Copy array to another
 */

var oldArray = ['a', 'b', 'c'];
var newArray = oldArray.slice();
var arr1 = oldArray;
arr1.push('d');  //Now, oldArray = ['a','b','c','d']
var arr2 = arr1.slice();
arr2.push('d');
arr2 // ['a','b','c','d'], oldArray不变


/**
 * merge array backColor to mockData as a props
 */
var mockData = [
	{ id: 1, subjectTitle: '十月新榜' },
	{ id: 2, subjectTitle: '旅游必备' },
	{ id: 3, subjectTitle: '灵感早读' },
]
var backColor = ['#ffb599', '#f6ffc7', '#d5e9fb']

mockData.reduce((all, item, currIndex) => {
	return item.backColor = backColor[currIndex];
}, '')

// output 
// {id: 1, subjectTitle: "十月新榜", backColor: "#ffb599"}
// {id: 2, subjectTitle: "旅游必备", backColor: "#f6ffc7"}
// {id: 3, subjectTitle: "灵感早读", backColor: "#d5e9fb"}