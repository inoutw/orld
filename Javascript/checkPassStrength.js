/**
 * Created by qinai on 3/9/17.
 */

/*写一个方法，获取当前页面总共用到了多少种 HTML 标签：*/
function getTags() {
    var all = document.getElementsByTagName("*");
    var hashTag = {}; uniqueArr = [];
    for (var i=0, max=all.length; i < max; i++) {
        if(!hashTag[all[i]]){
            hashTag[all[i]] = true;
            uniqueArr.push(all[i]);
        }
    }
    return uniqueArr.length;
}


/*
写一个函数, 计算用户输入的密码的强度:
1. 纯数字 , 弱
2. 数字加大小写字母, 中
3. 数字加大小写字母加特殊符号, 强
4.
*/
function scorePassword(pass) {
    var score = 0;
    if (!pass)
        return score;

    var checkOptions = {
        digits: /\d/.test(pass),
        char: /[a-zA-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    }

    checkCount = 0;
    for (var key in checkOptions) {
        checkCount += (checkOptions[key] == true) ? 1 : 0;
    }
    score += checkCount * 10;

    return parseInt(score);
}
function checkPassStrength(pass){
    var score = scorePassword(pass);
    if (score > 20)
        return "strong";
    if (score > 10)
        return "good";
    if (score > 0)
        return "weak";

    return "";
}

/*
获取连续整数中缺的那个数
 */
function getMissedInt(arr){
    var maxInt = Math.max.apply(arr), minInt = Math.min.apply(arr);
    var missFlag = false, result = 0;
    while(minInt<maxInt){
        minInt += 1;
        for(var i=0; i< arr.length; i++){
            if(minInt == arr[i]){
                missFlag = false;
            }else{
                missFlag = true;
                result = minInt;
            }
        }

    }
    return result;
}
getMissedInt([2,8,4,5,3,7,9]); //6

