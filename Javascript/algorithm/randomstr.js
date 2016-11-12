/**
 * Created by qinai on 11/12/16.
 * desc: 随机生成指制定长度的字符窜。
 * input: 8
 * output: sd5jkf6c
 */
function generateRandomStr(n) {
    let allCharsStr = 'abcdefghijklmnopqrstuvwxyz9876543210';
    let randomStr = '', len = allCharsStr.length;
    for (i = 0; i < n; i++) {
        randomStr += allCharsStr.charAt(Math.floor(Math.random() * len));
    }
    return randomStr;
}
generateRandomStr(8);
