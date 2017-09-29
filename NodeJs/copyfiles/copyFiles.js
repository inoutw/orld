/**
 * copy files and create the same folder structure
 */

var fs = require('fs');
var path = require('path');

function copyFileSync(source, target) {
	var targetFile = target;

	//if target is a directory a new file with the same name will be created
	if(fs.existsSync(target)) {
		if(fs.lstatSync(target).isDirectory()) {
			console.log(path.basename(source));
			targetFile = path.join(target, path.basename(source));
		}
	}
	fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function mkdirRecure(pathToCreate) {
	pathToCreate
		.split(path.sep)
		.reduce((currentPath, folder) => {
			currentPath += folder + path.sep;
			if(!fs.existsSync(currentPath)) {
				fs.mkdirSync(currentPath);
			}
			return currentPath;
		}, '');
}

function copyFolderRecursiveSync(source, target) {
	var files = [];
	//check if folder needs to be created or integrated
	var targetFolder = path.join(target, path.dirname(source), path.basename(source));
	if(!fs.existsSync(targetFolder)) {
		mkdirRecure(targetFolder);
	}
	//copy
	if(fs.lstatSync(source).isDirectory()) {
		files = fs.readdirSync(source);
		files.forEach(function(file) {
			var curSource = path.join(source, file);
			console.log('curSource', curSource);
			if(fs.lstatSync(curSource).isDirectory()) {
				copyFolderRecursiveSync(curSource, targetFolder);
			} else {
				copyFileSync(curSource, targetFolder);
			}
		});
	}
}

function copyTask() {
	let sourceCircles = fs.readdirSync('circle/');
	for(let circle of sourceCircles) {
		let sourceColumn = 'circle/' + circle + '/assets/column/';
		let columnPath = path.join(__dirname, sourceColumn);
		if(fs.existsSync(columnPath)) {
			copyFolderRecursiveSync(sourceColumn, 'targetFolder');
		}
	}
}
copyTask();
