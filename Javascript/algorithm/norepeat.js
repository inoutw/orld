/**
 * Created by qinai on 11/11/16.
 * desc: remove the repeate item in integer array
 * input: [1,13,24,11,11,14,1,2]
 * output: [1,13,24,11,14,2]
 */

//ES6 syntax
//遍历数组,将数组的value作为另一个数组的key, 如果另一个数组该key的值为空,则设为true,否则跳过.
let unique = function (arr) {
    let hashTable = {};
    let data = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (!hashTable[arr[i]]) {
            hashTable[arr[i]] = true;
            data.push(arr[i]);
        }
    }
    return data;
}
module.exports = unique;

function getUniqueArr(arr){
    var hashTable = {}, uniqueArr = [];
    for(var i=0, len = arr.length; i < len; i++){
        if(!hashTable[arr[i]]){
            hashTable[arr[i]] = true;
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
getUniqueArr([1,13,24,11,11,14,1,2]);