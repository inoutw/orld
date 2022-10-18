/**
 * 实现数组的flat, 支持传入深度depth
 * [1, [2, [3, 4]]], 1 => [1,2,[3,4]]
 * [1, [2, [3, 4]]], 2 => [1,2,3,4]
 */

const flat = (arr, depth=1) => {
	let res = []
	for (let item of arr) {
		if (depth === 1 && item instanceof Array) {
			res.push(...item)
			continue
		} else if(item instanceof Array && depth > 1){
			res.push(...flat(item, depth--))
		} else {
			res.push(item)
		}
	}
	return res
}
flat([1, [2, [3,4]]], 2)