var path = require('path');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

module.exports = function (paths) {
  return function () {
    return gulp.src(path.join(paths.js, '*.js'))
      .pipe(uglify({
        style: 'expanded'
      }))
      .pipe(gulp.dest(paths.stage.css));
  };
};
