var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

module.exports = function (paths) {
  return function () {
    return gulp.src(path.join(paths.sass, '*.scss'))
      .pipe(sass({
        style: 'expanded'
      }))
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest(paths.stage.css));
  };
};
