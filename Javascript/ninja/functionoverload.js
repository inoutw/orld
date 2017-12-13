// method to overload function
function addMethod(object, name, fn){
    var old = object[name];
    object[name] = function() {
        if(fn.length == arguments.length) {
            return fn.apply(this, arguments);
        } else if(typeof old == 'function') {
            return old.apply(this, arguments);
        }
    }
}

var ninja = {};
addMethod(ninja, 'whatever', function() {
    console.log('no argument');
});
addMethod(ninja, 'whatever', function(a) {
    console.log('argument is ', a);
});
addMethod(ninja, 'whatever', function(a, b) {
    console.log('arguments are', a, b);
})
ninja['whatever'] = function() {

}

// 测试addMethod函数
var ninjas = {
    values: ['Qingmin Ai', 'Yuqiong Ai', 'Yuhan Ai']
};
addMethod(ninjas, 'find', function(){
    console.log('this', this);
    return this.values;
})
addMethod(ninjas, 'find', function(name){
    var ret = [];
    for(var i=0; i< this.values.length; i++){
        if(this.values[i].indexOf(name) == 0){
            ret.push(this.values[i]);
        }
    }
    return ret;
})
addMethod(ninjas, 'find', function(first, last){
    var ret = [];
    for(var i=0; i<this.values.length; i++) {
        if(this.values[i] == first + ' ' + last){
            ret.push(this.values[i]);
        }
    }
    return ret;
})
// function assert(value, desc){
//     var li = document.createElement('li');
//     li.className = value? "pass":"fail";
//     li.appendChild(document.createTextNode(desc));
//     document.getElementById("results").appendChild(li);
// }
assert(ninjas.find().length == 3, 'Found all ninjas');
assert(ninjas.find('Qingmin').length == 1, 'Found ninja by first name');
assert(ninjas.find('Yuhan', 'Ai').length == 1, 'Found ninja by first and last name');
assert(ninjas.find('Yuhan', 'Ai', 'Qingmin') == null, 'Found nothing');