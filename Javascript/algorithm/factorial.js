/**
 * 计算阶乘结果末尾有多少个0,
 * @param {*} a 
 */
// 实现阶乘
function factorial(a) {
	if(a == 0) return 1
	return a*factorial(--a)
}
factorial(205)

//  数字太大会溢出，此算法不合适
function getTailZeroCount(p) {
	if(p == 0) return 1
	let count = 0
	while (p % 10 == 0) {
		count += 1
		p = p / 10
	}
	return count
}
getTailZeroCount(200)

/**
 * 5的阶乘有一个0， 10的阶乘有2个0，以此类推, 
 */

const trailingZeros = function (n) {
	let result = 0;
	for(let i=2; i<=n; i++) {
	 if(i % 5 == 0) {
			let j = i;
			while(j % 5 == 0 && j >= 5) {
					result ++
					j /= 5
			}
		}
	 }
	return result;
}