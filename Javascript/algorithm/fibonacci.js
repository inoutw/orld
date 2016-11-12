/**
 * Created by qinai on 11/12/16.
 * desc: 生成斐波那契数组的方法
 * define: fibo[i] = fibo[i-1]+fibo[i-2];
 */
function getFibonacci(n) {
    var fibArr = [], i = 0;
    while (i < n) {
        if (i <= 1) {
            fibArr.push(i);
        } else {
            fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
        }
        i++;
    }
    return fibArr;
}
getFibonacci(9);
