var lis = document.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
    //立即执行函数表达式,将当前i传给函数,触发onclick事件,当前i保存在内存中。
    lis[i].onclick = (function (i) {
        return function () {
            console.log(i);
        }
    })(i)
}

function fn(n){
    lis[n].onclick = function(){
        alert(n)
    }
}
for(var i=0;i<lis.length;i++){
    fn(i)
}