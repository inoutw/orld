/**
 * Created by qinai on 11/11/16.
 * desc: sort array
 * http://math.hws.edu/eck/js/sorting/xSortLab.html
 */
//冒泡排序:从第一个元素往后比,大的往后排
function bubbleSort(arr) {
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
module.exports = bubbleSort;

bubbleSort([12,3,5,2,7,21,1,30]);

//todo: other sort algorithm
//插入排序:https://zh.wikipedia.org/wiki/%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F


//快速排序:https://zh.wikipedia.org/wiki/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F
//参考某个元素值，将小于它的值，放到左数组中，大于它的值的元素就放到右数组中,
// 然后递归进行上一次左右数组的操作，返回合并的数组就是已经排好顺序的数组了
function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let leftArr = [], rightArr = [], q = arr[0];
    for(let i =1, len = arr.length; i< len; i++){
        if(arr[i] > q){
            rightArr.push(arr[i]);
        }else{
            leftArr.push(arr[i]);
        }
    }
    return [].concat(quickSort(leftArr),[q], quickSort(rightArr));
}
module.exports = quickSort;

//希尔排序:https://zh.wikipedia.org/wiki/%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F