var path = require('path');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

module.exports = function (paths) {
  return function () {
    return gulp.src(path.join(paths.js, '*.js'))
      .pipe(uglify({
        style: 'compressed'
      }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(paths.prod.js));
  };
};
