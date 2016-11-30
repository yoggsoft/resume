let gulp = require('gulp');

var paths = {
  sass: 'src/sass',
  css: 'src/css',
  js: 'src/js',
  stage: {
    css: 'stage/assets/style',
    js: 'stage/assets/script'
  }
};

gulp.task('stage:sass', require('./tasks/stage-sass')(paths));
