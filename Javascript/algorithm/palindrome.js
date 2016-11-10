/**
 * Created by qinai on 11/10/16.
 * function: check if a string is palindrome
 * extend: get the longest palindromic substring in a string
 */

//1. 利用reverse函数，将字符串转换成数组
function checkPalindrome_reverse(str) {
    // \W means non-word, a character is from a-z, A-Z, 0-9, including underscore character.
    str = str.replace(/\W/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
}
checkPalindrome_reverse('delivered');

//2. 用for将字符串对半比较
function checkPalindrome_for(str) {
    var lowRegStr = str.replace(/\W/g, '').toLowerCase(), len = lowRegStr.length;
    for (var i = 0, halfLen = len / 2; i < halfLen; i++) {
        if (lowRegStr[i] !== lowRegStr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
checkPalindrome_for('deliviled');

//3. 递归比较
function checkPalingdrome_recursion(str) {
    var lowRegStr = str.replace(/\W/g, '').toLowerCase(), len = lowRegStr.length;
    if (len == 0) {
        return true;
    }
    if (lowRegStr[0] !== lowRegStr[len - 1]) {
        return false;
    } else {
        return checkPalingdrome_recursion(lowRegStr.slice(1, len - 1));
    }
}
checkPalingdrome_recursion('madam');

//extend: TODO - 求最长回文子串 - leetcode 5.Longest Palindromic Substring