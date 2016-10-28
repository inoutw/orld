var lis = document.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
    lis[i].onclick = (function (i) {
        return function () {
            console.log(i);
        }
    })(i)
}
;
