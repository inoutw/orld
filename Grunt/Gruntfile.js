module.exports = function(grunt) {
	grunt.initConfig({
		
	});
	grunt.registerTask('logmsg', ('this is the description of the task - print log').red, function(){
		grunt.log.write('this is the log from grunt').ok();
	});
};