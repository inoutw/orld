

var fs = require('fs');
let path = require('path')
function copyCloumn(sourceDir, targetDir) {
	let files = fs.readdirSync(sourceDir);
	for (let file of files) {
		let columnDir = path.join(sourceDir, file, 'assets', 'column')
		if (!fs.existsSync(columnDir))
			continue;
		copyDir(columnDir, path.join(targetDir, file, 'assets', 'column'))
	}
}

function copyDir(sourceDir, targetDir) {
	if (!fs.existsSync(targetDir))
		mkdirsSync(targetDir);
	let files = fs.readdirSync(sourceDir);
	for (let file of files) {
		let src = path.join(sourceDir, file);
		console.log('copy file', src)
		let dest = path.join(targetDir, file);
		fs.writeFileSync(dest, fs.readFileSync(src))
	}
}

function deleteFolderRecursive(path) {
	var files = [];
	if (fs.existsSync(path)) {
		files = fs.readdirSync(path);
		files.forEach(function (file, index) {
			var curPath = path + "/" + file;
			if (fs.lstatSync(curPath).isDirectory()) { // recurse
				deleteFolderRecursive(curPath);
				console.log("curPath", index, curPath)
			} else { 
				// delete file
				console.log("curPath", index, curPath)
				fs.unlinkSync(curPath);
			}
		});
		console.log("111", path)
		fs.rmdirSync(path);
	}
};

//递归创建目录
function mkdirsSync(dirname, mode) {
	if (fs.existsSync(dirname)) {
		return true;
	} else {
		if (mkdirsSync(path.dirname(dirname), mode)) {
			fs.mkdirSync(dirname, mode);
			return true;
		}
	}
}

function task() {	
	let sourceDir = path.join(__dirname, 'circle')
	console.log('sourceDir', sourceDir)
	let targetDir = path.join(__dirname, 'dist/targetDir')
	deleteFolderRecursive(targetDir);
	console.log('targetDir', targetDir);
	copyCloumn(sourceDir, targetDir)
}
task();