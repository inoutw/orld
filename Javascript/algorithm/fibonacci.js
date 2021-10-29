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

/**
 * https://labuladong.github.io/algo/1/3/
 * 递归方法生成斐波那契数
 * define: fibo[i] = fibo[i-1]+fibo[i-2];
 */
function fib(n) {
	if (n === 0 || n === 1) {
		return n
	}
	return fib(n - 1) + fib(n - 2)
}

/**
 * 带备忘录的递归解法(自上向下)
 */
const helper = (memo, n) => {
	if (n === 0 || n === 1) {
		return n
	}
	if (memo[n]) return memo[n];
	memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
	return memo[n];
}
function fib(n) {
	let memo = []
	return helper(memo, n)
}

/**
 * 数组方法生成斐波那契数(自底向上)
 * 保留所有状态
 */
function fib(n) {
	if (n === 0 || n === 1) {
		return n
	}
	let arr = [0, 1]
	for (let i = 2; i <= n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2]
	}
	return arr[n]
}

/**
 * 只保留两个状态prev, curr
 * @param {*} n 
 * @returns 
 */
function fib(n) {
	if (n < 1) return 0;
	if (n === 0 || n === 1) {
		return n
	}
	let prev = 1, curr = 1;
	for (let i = 3; i <= n; i++) {
		let sum = prev + curr;
		prev = curr;
		curr = sum;
	}
	return curr
}