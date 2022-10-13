/**示例 1：
输入：name = "alex", typed = "aaleex"
输出：true
解释：'alex' 中的 'a' 和 'e' 被长按。

示例 2：
输入：name = "saeed", typed = "ssaaedd"
输出：false
解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。
*/
const getCheckArr = (name) => {
  let nameArr = name.split("");
  let len = nameArr.length;
  let res = [];
  let num = 1;
  for (let i = 0; i < len; i++) {
    if (nameArr[i] === nameArr[i + 1]) {
      num++;
      continue;
    } else {
      res.push({ [nameArr[i]]: num });
      num = 1;
    }
  }
  return res;
};

const check = (name, typed) => {
  let nameRes = getCheckArr(name);
  let typedRes = getCheckArr(typed);
  if (nameRes.length !== typedRes.length) return false;
  for (let i = 0; i < nameRes?.length; i++) {
    const curNameObj = nameRes[i];
    const curTypedObj = typedRes[i];
    if (
      Object.keys(curNameObj)[0] === Object.keys(curTypedObj)[0] &&
      Object.values(curNameObj)[0] <= Object.values(curTypedObj)[0]
    ) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
check("alex", "aaleex"); //true
check("saeed", "ssaaedd"); // false
