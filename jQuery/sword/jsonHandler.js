

//获取key/value
var obj = {};
for(var k in obj){
    console.log(k);
    console.log(obj[k]);
}


//将两个JSON对象组装到一个里面
//targetJson 目标JSON，packJson 被组装JSON
function addGroupJson(targetJson, packJson){

    if(targetJson && packJson){

       for(var p in packJson){

           targetJson[p] = packJson[p];

       }

    }

}
