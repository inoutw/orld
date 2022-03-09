var count = 0;
// 输入 n，打印 n 个 tab 缩进
function printIndent(n) {
	for (let i = 0; i < n; i++) {
		console.log("   ");
	}
}

image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
sr = 1, sc = 1, newColor = 2

var floodFill = function (image, sr, sc, newColor) {
	const row = image.length, col = image[0].length
	const oldColor = image[sr][sc]
	//如果新老颜色相同则无需填充更改
	if (oldColor == newColor) return image
	//开启dfs递归
	const dfs = (i, j) => {
		count++
		printIndent(count)
		//判断边界条件，若越界或不同色，则直接返回上一轮递归
		if (i < 0 || i >= row || j < 0 || j >= col || image[i][j] != oldColor) return
		image[i][j] = newColor
		//分别向四个方向dfs深度优先遍历
		dfs(i - 1, j)
		dfs(i + 1, j)
		dfs(i, j - 1)
		dfs(i, j + 1)
	}
	dfs(sr, sc)
	return image
};
floodFill(image, sr, sc, newColor)