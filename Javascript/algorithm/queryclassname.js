/**
 * Created by qinai on 11/12/16.
 * desc: 实现类似getElementsByClassName 的功能, 查找某个DOM节点下面的包含某个class的所有DOM节点
 */
function queryClassName(domNode, cname){
    var starts = '(^|[ \n\r\t\f])',
        ends = '([ \n\r\t\f]|$)';
    var array = [], regex = new RegExp(starts, cname, ends),
        elesInDomNode = domNode.getElementsByTagName('*'),
        len = elesInDomNode.length,
        i = 0, element;
    while(i<len){
        element = elements[i];
        if(regex.test(element.className)){
            array.push(element);
        }
        i += 1;
    }
    return array;
}
queryClassName(document.body, 'row');


