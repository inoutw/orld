/**
 * find the first matched key in an array
 */
arr = [ {"text": "You Don\'t Know JS"},{"image": "https://github.com/getify/You-Dont-Know-JS/raw/master/up%20%26%20going/cover.jpg"},{"text": "https://github.com/getify/You-Dont-Know-JS"},{"image":"https://github.com/getify/You-Dont-Know-JS/raw/master/up%20%26%20going/cover1.jpg"}];
arr.find(function(item, index){return item.image}); 
//{image: "https://github.com/getify/You-Dont-Know-JS/raw/master/up%20%26%20going/cover.jpg"}