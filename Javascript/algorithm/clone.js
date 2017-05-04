/**
 * Created by qinai on 11/11/16.
 */

function clone(obj){
    if (obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj){
        return obj;
    }
    var temp = null;
    if(obj instanceof Date){
        temp = new obj.constructor(); //or new Date(obj);
    }else{
        temp = obj.constructor();
    }
    for(var key in obj){
        if(Object.prototype.hasOwnProperty.call(obj, key)){
            obj['isActiveClone'] = null;
            temp[key] = clone(obj[key]);
            delete obj['isActiveClone'];
        }
    }
    return temp;
}
clone({name: 'amy'})


var cloneObj = Object.assign({}, obj);
//with Jquery
var copiedObject = jQuery.extend({}, originalObject)
//deep copy
var copiedObject = jQuery.extend(true, {}, originalObject)


function cloneObject(obj) {
    var clone = {};
    for(var i in obj) {
        if(typeof(obj[i])=="object" && obj[i] != null)
            clone[i] = cloneObject(obj[i]);
        else
            clone[i] = obj[i];
    }
    return clone;
}
cloneObject({name: 'asd'});