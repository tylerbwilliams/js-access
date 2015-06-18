
var gulp = require('gulp'),
	babel = require('gulp-babel');

gulp.task('default', function() {
	return gulp.src('source/**')
		.pipe( babel() )
		.pipe( gulp.dest('build') );
});