require('gulp-watch');
let gulp = require('gulp');
let path = require('path');

var paths = {
  sass: 'gulp/src/sass',
  css: 'gulp/src/css',
  js: 'gulp/src/js',
  stage: {
    css: 'gulp/stage/assets/style',
    js: 'gulp/stage/assets/script'
  },
  prod: {
    css: '.',
    js: '.'
  }
};

gulp.task('watch:sass', () => {
  let options = {
    interval: 1000,
    debounceDelay: 1000,
    ignoreInitial: false
  };
  gulp.watch(path.join(paths.sass, '*.scss'), options, ['stage:sass']);
  gulp.watch(path.join(paths.sass, '**/*.scss'), options, ['stage:sass']);
  gulp.watch(path.join(paths.sass, '*.scss'), options, ['prod:sass']);
  gulp.watch(path.join(paths.sass, '**/*.scss'), options, ['prod:sass']);
});

gulp.task('watch:js', () => {
  let options = {
    interval: 1000,
    debounceDelay: 1000
  };
  gulp.watch(path.join(paths.js, '*.js'), options, ['stage:js']);
  gulp.watch(path.join(paths.js, '**/*.js'), options, ['stage:js']);
  gulp.watch(path.join(paths.js, '*.js'), options, ['prod:js']);
  gulp.watch(path.join(paths.js, '**/*.js'), options, ['prod:js']);
});

gulp.task('stage:sass', require('./gulp/tasks/stage-sass')(paths));
gulp.task('stage:js', require('./gulp/tasks/stage-js')(paths));
gulp.task('prod:sass', require('./gulp/tasks/prod-sass')(paths));
gulp.task('prod:js', require('./gulp/tasks/prod-js')(paths));

gulp.task(
  'default',
  [
    'watch:sass',
    'watch:js'
  ]
);
