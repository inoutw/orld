/**
 * Created by qinai on 11/12/16.
 * desc: 找出正数组的最大差值
 * input: [10,5,11,7,8,9]
 * output: 6
 */
function getMaxProfit(arr) {
    var minPrice = arr[0], maxProfit = 0;
    for (var i = 0; i < arr.length; i++) {
        var curPrice = arr[i];
        minPrice = Math.min(curPrice, minPrice);
        var curProfit = curPrice - minPrice;
        maxProfit = Math.max(curProfit, maxProfit);
    }
    return maxProfit;
}
getMaxProfit([10, 5, 11, 7, 8, 9]);