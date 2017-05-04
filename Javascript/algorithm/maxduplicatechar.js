/**
 * Created by qinai on 11/11/16.
 * desc: 统计一个字符串出现最多的字母
 * input: afjghdfraaaasdenas
 * output: a
 */
function getMaxDuplicateChar(str){
    if(str.length == 1){
        return str;
    }
    let charObj = {};
    //把每个字符的重复次数赋给charObj;
    for(let i=0; i<str.length; i++){
        if(!charObj[str.charAt(i)]){ //该字符未出现过
            charObj[str.charAt(i)] = 1; //charObj[a]=1
        }else{
            charObj[str.charAt(i)] +=1;
        }
    }
    //找出charObj中重复次数最多的char
    let maxChar = '', maxValue = 1;
    for(var k in charObj){
        console.log(k + ' ' + charObj[k]);
        if(charObj[k]>=maxValue){
            maxChar = k;
            maxValue = charObj[k];
        }
    }
    return maxChar;
}
module.exports = getMaxDuplicateChar;