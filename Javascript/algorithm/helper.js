// debug小技巧
// 全局变量，记录递归函数的递归层数
var count = 0;
// 输入 n，打印 n 个 tab 缩进
export function printIndent(n) {
	for (let i = 0; i < n; i++) {
		console.log("   ");
	}
}
