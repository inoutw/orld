/**
 * find the first matched key in an array
 */
arr = [ {"text": "You Don\'t Know JS"},{"image": "https://github.com/getify/You-Dont-Know-JS/raw/master/up%20%26%20going/cover.jpg"},{"text": "https://github.com/getify/You-Dont-Know-JS"},{"image":"https://github.com/getify/You-Dont-Know-JS/raw/master/up%20%26%20going/cover1.jpg"}];
arr.find(function(item, index){return item.image}); 
//{image: "https://github.com/getify/You-Dont-Know-JS/raw/master/up%20%26%20going/cover.jpg"}
var images = [];
for(let item of arr){
	if(item.image){
		images.push(item.image);
	// console.log(item.image);
	}
}
images.join(',');
console.log(images);

/**
 * Copy array to another
 */
var newArray = oldArray.slice();
var oldArray = ['a','b','c'];
var arr1 = oldArray;
arr1.push('d');  //Now, oldArray = ['a','b','c','d']
var arr2 = arr1.slice();
arr2.push('d');
arr2 // ['a','b','c','d'], oldArray不变