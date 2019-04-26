var gulp = require('gulp');
var sass = require('gulp-sass');

function defaultTask(cb) {
  cb();
}

gulp.task('sass', function(){
  return gulp.src('assets/SCSS/*.scss')
	.pipe(sass()) 
	.pipe(gulp.dest('assets/CSS'))
});

gulp.task('watch', function() {
  gulp.watch('assets/SCSS/*.scss', gulp.series('sass'));
});

exports.default = defaultTask