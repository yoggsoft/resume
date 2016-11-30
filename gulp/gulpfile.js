var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

var paths = {
  sass: 'src/sass',
  less: 'src/less',
  css: 'src/css',
  svg: 'src/svg',
  js: 'src/js',
  img: 'src/img',
  stage: {
    css: 'staging/assets/style',
    js: 'staging/assets/script',
    svg: 'staging/assets/svg',
    img: 'staging/assets/img'
  },
  build: {
    css: '../assets/style',
    js: '../assets/script',
    svg: '../assets/svg',
    img: '../assets/img'
  }
};
