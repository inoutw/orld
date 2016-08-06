/**
 * Created by qinai on 7/30/16.
 */
window.onload = function(){
    var gotopBtn = document.getElementById('gotop'), timer = null;

    var clientHeight = document.documentElement.clientHeight;

    window.onscroll = function(){
        //alert('hello');
        var backtop = document.body.scrollTop;
        if(backtop >= clientHeight){
            gotopBtn.style.display = "block";
        }else{
            gotopBtn.style.display = "none";
        }
    }

    gotopBtn.onclick = function(event){
        // console.log('clicked');
        timer = setInterval(function(){
            var backtop = document.body.scrollTop;
            //速度从快到慢
            var speedTop = backtop/5;
            document.body.scrollTop -= speedTop;
            if(backtop == 0){
                clearInterval(timer);
            }
        },30);

    }
}