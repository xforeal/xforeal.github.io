'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var inputSass = 'sass/**/*.sass';
var outputSass = 'css';
var sourcemaps = require('gulp-sourcemaps');
// var livereload = require('gulp-livereload');

// convert sass to css
gulp.task('sass', function () {
 return gulp.src(inputSass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer('last 7 versions'))
    .pipe(gulp.dest(outputSass));
    // .pipe(livereload());
});

 // watch sass
gulp.task('watch', function () {
  // livereload.listen();
  gulp.watch('sass/**/*.sass', ['sass']);
});

// order task to do
gulp.task('default', ['sass', 'watch']);
