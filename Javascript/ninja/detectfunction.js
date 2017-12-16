/**
 * 判断对象是函数实例
 */
// general compability issue
function ninja(){}
assert(typeof ninja == 'function', 'ninja is function');

function isFunc(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]'
}