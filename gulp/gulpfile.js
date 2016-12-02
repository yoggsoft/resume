let gulp = require('gulp');
let watch = require('gulp-watch');
let path = require('path');

var paths = {
  sass: 'src/sass',
  css: 'src/css',
  js: 'src/js',
  stage: {
    css: 'stage/assets/style',
    js: 'stage/assets/script'
  }
};

gulp.task('watch:sass', () => {
  let options = {
    interval: 1000,
    debounceDelay: 1000
  };
  gulp.watch(path.join(paths.sass, '*.scss'), options);
  gulp.watch(path.join(paths.sass, '**/*.scss'), options);
});

gulp.task('stage:sass', require('./tasks/stage-sass')(paths));
gulp.task('stage:js', require('./tasks/stage-js')(paths));
