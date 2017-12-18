/**
 *  内部函数创建了一个闭包，该闭包包含函数声明和函数声明时作用域的变量
 */
var outerValue = 'ninja';
var later;
function outerFunction(){
    var innerValue = 'Qingmin';
    function innerFunction(){
        assert(outerValue, 'I can get outer value');
        assert(innerValue, 'I can get inner value');
    }
    later = innerFunction;
}

outerFunction();
later();
innerValue;

/**
 * compare
 */
var outerValue = 'ninja';
var later;
function outerFunction(){
    var innerValue = 'Qingmin';
    assert(outerValue, 'I can get outer value');
    assert(innerValue, 'I can get inner value');
}

outerFunction();
innerValue;

/**
 *  
 */
var outerValue = 'ninja';
var later;
function outerFunction(){
    var innerValue = 'Qingmin';
    function innerFunction(paramValue){
        assert(outerValue, 'I can get outer value');
        assert(innerValue, 'I can get inner value');
        assert(paramValue, 'I can see param value ' + paramValue);
        assert(tooLate, 'I can get the value late');
    }
    later = innerFunction;
}

assert(!tooLate, 'Outer can not get the later value');
var tooLate = 'Yuhan';
outerFunction();
later('Yuxuan');

