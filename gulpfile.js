
var gulp = require("gulp");
var sass = require("gulp-sass");
var watch = require("gulp-watch");
var browserSync = require("browser-sync");
var reload = browserSync.reload;

gulp.task('sass', function(){
	gulp.src('sass/main.scss')
		.pipe(sass({
			includePaths: ['sass']
		}))
		.pipe(gulp.dest("."))
});

gulp.task('serve', function(){
	
	browserSync.init(['main.css','*.html', 'js/*.js'], {
		server: {
			baseDir: './'
		}
	});
});

gulp.task('watch', ['sass', 'serve'], function(){
	gulp.watch(['sass/*.scss'], ['sass']);
})


// The pipe() function reads data from a readable stream as it becomes available and writes it to a destination writable stream.

