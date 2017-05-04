/**
 * Created by qinai on 3/4/17.
 */
var newBtn = document.getElementById('new_btn'),
    newWrap = document.getElementById('new_wrap');
var activeReg = new RegExp('active'),
    newWrapClass = newWrap.className;
newBtn.onclick = function(){
    newWrap.className = newWrapClass.replace(activeReg, '');
    newWrap.className += ' active';
};
document.onmousedown = function(e) {
    if(e.target.id != 'new_btn'){
        newWrap.className = newWrapClass.replace(activeReg, '');
    }
};