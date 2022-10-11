/**示例 1：
输入：name = "alex", typed = "aaleex"
输出：true
解释：'alex' 中的 'a' 和 'e' 被长按。

示例 2：
输入：name = "saeed", typed = "ssaaedd"
输出：false
解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。
*/
const getJudgeArr = (name) => {
  let nameArr = name.split("");
  let len = nameArr.length;
  let res = [];
  for (let i = 0; i < len; i++) {
    let num = 1;
    let curChar = nameArr[i];
    for (let j = i + 1; j < len; j++) {
      if (curChar === nameArr[j]) {
        num++;
        i++;
      }
    }
    let obj = { [curChar]: num };
    res.push(obj);
  }
  return res;
};
function isObjectValueEqual(a, b) {
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];
    var propA = a[propName];
    var propB = b[propName];
    if (propA > propB) {
      return false;
    }
  }
  return true;
}
const judge = (name, typed) => {
  let nameRes = getJudgeArr(name);
  let typedRes = getJudgeArr(typed);
  console.log(nameRes, typedRes);

  if (nameRes.legnth !== typedRes.length) return false;
  for (let i = 0; i < nameRes?.length; i++) {
    return isObjectValueEqual(nameRes[i], typedRes[i]);
  }
  return true;
};
judge("alex", "aaleex");
judge("saeed", "ssaaedd");
