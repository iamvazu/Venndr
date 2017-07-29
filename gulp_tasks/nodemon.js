// so i can use browsersync and nodemon together

const gulp = require('gulp');
const gulp_nodemon = require('gulp-nodemon');

gulp.task('nodemon', nodemon);

function nodemon(cb) {
    var started = false;
	
	return gulp_nodemon({
		script: 'server.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		if (!started) {
			cb();
			started = true; 
		} 
	});
}

