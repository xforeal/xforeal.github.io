'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var spritesmith = require('gulp.spritesmith');
var inputSass = 'sass/**/*.sass';
var outputSass = '../css';
var sourcemaps = require('gulp-sourcemaps');
// var livereload = require('gulp-livereload');
var cssnano = require('gulp-cssnano');

// convert sass to css
gulp.task('sass', function () {
 return gulp.src(inputSass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer('last 7 versions'))
    .pipe(cssnano())
    .pipe(gulp.dest(outputSass));
    // .pipe(livereload());
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('../img/icon/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    cssFormat: 'css'
  }));
   spriteData.img.pipe(gulp.dest('../img/icon/')); 
   spriteData.css.pipe(gulp.dest('../img/icon/')); 
});

 // watch sass
gulp.task('watch', function () {
  // livereload.listen();
  gulp.watch('sass/**/*.sass', ['sass']);
});

// order task to do
gulp.task('default', ['sass', 'watch']);
