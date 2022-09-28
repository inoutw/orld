/**
 * 是否是质数
 * @param {*} n
 * @returns
 */
function isPrime(n) {
  let max = Math.ceil(Math.sqrt(n));
  if (n === 2) {
    return true;
  }
  for (let i = 2; i < max; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
