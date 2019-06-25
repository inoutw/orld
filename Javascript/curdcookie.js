/**
 * Created by qinai on 2/23/17.
 */


var cookies = document.cookie;


function getCookie(name) {
	var cookieStr = document.cookie, cookieArr = cookieStr.split(';');
	for (var i = 0; i < cookieArr.length; i++) {
		var curCookie = cookieArr[i].split('=');
		if (curCookie[0] == name) {
			return curCookie[1];
		}
	}
	return '';
}
getCookie('SID');

function regGetCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}

document.cookie = "name=min"
document.cookie
// "APISID=A04QWs; SAPISID=nJAL2Y/ZVOeFX; OGPC=604-4:; SID=g39g-36ACx8Zw.; name=min"

function addCookie(objName, objValue, objHours) {
	var str = objName + "=" + escape(objValue);
	if (objHours > 0) {//为0时不设定过期时间，浏览器关闭时cookie自动消失
		var date = new Date();
		var ms = objHours * 3600 * 1000;
		date.setTime(date.getTime() + ms);
		str += "; expires=" + date.toGMTString();
	}
	document.cookie = str;
}

function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if (cval != null) {
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
	}
}
delCookie('name');