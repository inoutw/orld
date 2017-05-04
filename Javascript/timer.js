/**
 * Created by qinai on 1/19/17.
 */
var timerExc;
timerExc = setInterval(function(){
    var targetObj = $("#seat_detail .seat_detail_row");
    var initailText = targetObj.text();
    targetObj.text(initailText.replace(/\|.(\w|\W)+/g, ""));
    if(/\|/.test(targetObj.text()) == false){
        clearInterval(timerExc);
    }
}, 1000);

var timerExc;
clearInterval(timerExc);
timerExc = setInterval(function(){
    var targetObj = $("#seat_detail .seat_detail_row");
    var initailText = targetObj.text();
    targetObj.text(initailText.replace(/\|.(\w|\W)+/g, ""));
    if(!(/\|/.test(targetObj.text()))){
        clearInterval(timerExc);
    }
}, 1000);
