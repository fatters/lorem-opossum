var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');

var gutil = require('gulp-util');

gulp.task('default', ['js'], function () {
});

gulp.task('html', function () {
	return gulp.src('src/html/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('css', function () {
	return gulp.src('src/sass/*.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('js', function () {
	return gulp.src('src/js/*.js')
		.pipe(concat('all.min.js'))
		.pipe(uglify().on('error', gutil.log))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('lint', function () {
	return gulp.src('src/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('copy', function(){
	return gulp.src('src/img/**/*')
		.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function () {
	gulp.watch('src/js/*.js', ['js']);
	gulp.watch('src/sass/*.scss', ['css']);
    gulp.watch('src/img/**/*', ['copy']);
    gulp.watch('src/html/*.html', ['html']);
});