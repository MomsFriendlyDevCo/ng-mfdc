var annotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var replace = require('gulp-replace');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

// Configure / Plugins {{{
notify.logLevel(0);
// }}}

// Configure / Paths {{{
global.paths = {
	ignore: [ // Do not monitor these paths for changes
		'app/', // No need to watch this with nodemon as its handled seperately
		'bower_components/',
		'build/',
	],
	scripts: [
		'app/**/*.js',
	],
	build: 'build',
};
// }}}

// Redirectors {{{
gulp.task('default', ['watch']);
gulp.task('build', ['scripts']);
// }}}

/**
* Compile all JS files into the build directory
*/
gulp.task('scripts', function() {
	return gulp.src(paths.scripts)
		.pipe(concat('site.min.js'))
		.pipe(replace("\"app\/", "\"\/app\/")) // Rewrite all literal paths to relative ones
		.pipe(annotate())
		.pipe(uglify({mangle: false}))
		.pipe(gulp.dest(paths.build))
		.pipe(notify({message: 'Rebuilt frontend scripts'}));
});


gulp.task('watch', ['build'], function(finish) {
	watch(paths.scripts, function() {
		gutil.log('Rebuild client-side JS files...');
		gulp.start('scripts');
	});
});
