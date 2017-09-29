/**
 * 读取指定文件夹下所有文件
 */
var fs = require('fs');
var path = require('path');

let files = fs.readdirSync('circle/hlwq/assets/column');
console.log('files', files); // file name list

/**
 * 读取文件夹下所有目录
 */
let dirList = fs.readdirSync('circle');
console.log('dir-list', dirList); // dir name list

/**
 * 拷贝文件到已创建的文件夹
 */
fs.writeFileSync('readdest', fs.readFileSync(src));
