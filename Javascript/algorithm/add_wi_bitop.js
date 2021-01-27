function add(x, y) {
	let sum = 0;
	let carry = 0;
	while (y != 0) {
		sum = x ^ y; // 异或运算
		carry = (x & y) << 1; // 进位
		x = sum;
		y = carry;
	}
	return x;
}

add(1, 2)

function plus(a, b) {
	if (x == 0) return y;
	if (y == 0) return x;
	let s,c; //s为加法sum, c为进位carry
  s=a^b; //半加器实现低位
  c=(a&b)<<1;//高位
  return plus(s,c);
}