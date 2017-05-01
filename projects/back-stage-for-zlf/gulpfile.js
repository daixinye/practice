var gulp = require('gulp');
var less = require('gulp-less');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

var PATH = 'dist';
var SRC_PATH = PATH + '/src';
var CSS_PATH = SRC_PATH + '/css';
var JS_PATH = SRC_PATH + '/js';

gulp.task('css', function() {
	gulp.src('src/css/*.less').pipe(less()).pipe(cleanCSS({ debug: true })).pipe(gulp.dest(CSS_PATH));

	gulp.src('src/css/*.css').pipe(cleanCSS({ debug: true })).pipe(gulp.dest(CSS_PATH));
});

gulp.task('js', function() {
	gulp.src('src/js/*').pipe(babel({
		presets: [
			'es2015'
		]
	})).pipe(uglify({
		mangle: true,
		compress: true,
		preserveComments: 'all'
	})).pipe(gulp.dest(JS_PATH));
});

gulp.task('html', function() {
	gulp.src('*.html').pipe(gulp.dest(PATH));
});

gulp.task('default', ['css', 'js', 'html']);
