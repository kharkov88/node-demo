module.exports = function(grunt) {
	[
		'grunt-cafe-mocha',
		'grunt-contrib-jshint',
		'grunt-exec'
	].forEach(function(task){
		grunt.loadNpmTasks(task);
	});

	grunt.initConfig({
		cafemocha: {
			all: { src: 'ga/tests-*.js', options: {ui:'tdd'}}
		},
		jshint: {
			app: ['app.js', 'lib/**/*.js'],
			ga: ['Gruntfile.js']
		},
		exec: {
			linkchecker: {cmd: 'linkchecker http://localhost:3000'}
		}
	});

	grunt.registerTask('default', ['cafemocha', 'jshint']);
};