/**
 * Created by qinai on 2/28/17.
 */
function compare(a, b){
    if (a === b) {
        return 0;
    }
    var a_arr = a.split('.'), b_arr = b.split('.');
    var len = Math.min(a_arr.length, b_arr.length);
    for(var i = 0; i< len; i++){
        if(parseInt(a_arr[i]) > parseInt(b_arr[i])){
            return 1;
        }
        if(parseInt(a_arr[i]) < parseInt(b_arr[i])){
            return -1;
        }
    }
    if(a_arr.length > b_arr.length){
        return 1;
    }
    if(a_arr.length < b_arr.length){
        return -1;
    }
    return 0;
}

console.log(compare("1.0.0", "1.0"));
console.log(compare("1.0.1", "1.2.3.2"));
console.log(compare("1.0.0", "1.0.1"));

var versions = ["2.0", "1.8.9", "1.0", "1.1.8", "1.1.2"]
versions.sort() //no need compare function
   // ["1.0", "1.1.2", "1.1.8", "1.8.9", "2.0"]
