var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

module.exports = function (paths) {
  return function () {
    return gulp.src(path.join(paths.sass, '*.scss'))
      .pipe(sass({
        outputStyle: 'compressed'
      }))
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(paths.prod.css));
  };
};
