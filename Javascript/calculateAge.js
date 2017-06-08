/*
 * desc: 应用于类似宠物年龄
 * 已知： 宠物出生日期value
 * 返回值： 小于一个月返回天数，小于一年返回月数，大于一年返回X岁X个月
 */
function calAge(value){
	var age = '0';
	if(!value){
		return '未知';
	}
	var unitStr = '';
	var bDate = new Date(value);
	var cDate = new Date();
	var durTime = cDate.getTime() -bDate.getTime();
	var dayTime = 24*3600*1000;
	let year = parseInt(durTime/(dayTime * 365));
    let month = Math.floor( durTime/(dayTime * 30)) % 12;
    if (year > 0) {
    	age = year + '岁';
    	if(month > 0) {
    		age += month + '个月';
    	}
    	return age;
    }
    if (month > 0){
    	return month + '个月';
    }
    let day = Math.trunc( durTime/dayTime)+'' //同floor
      return day+'天'
}
calAge("2016-03-05");
