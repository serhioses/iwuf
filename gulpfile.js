const gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  sass = require('gulp-ruby-sass'),
  imagemin = require('gulp-imagemin'),
  cssmin = require('gulp-cssmin'),
  newer = require('gulp-newer'),
  rename = require('gulp-rename')
  watch = require('gulp-watch'),
  path = require('path'),
  devDir = path.resolve(__dirname, './app/dev'),
  distDir = path.resolve(__dirname, './app/dist'),
  paths = {
    sass: devDir + '/sass',
    cssDev: devDir + '/css',
    cssDist: distDir + '/css',
    imgDev: devDir + '/images',
    imgDist: distDir + '/images'
  },
  browsers = ['> 5%', 'Firefox > 10', 'ie >= 8', 'Chrome > 15', 'Safari > 3'],
  isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    
gulp.task('styles', function () {
  return sass(paths.sass + '/style.scss', {
    style: 'expanded',
    loadPath: [paths.sass]
  })
  .pipe(autoprefixer({
    browsers: browsers
  }))
  .pipe(gulp.dest(paths.cssDist));
});

gulp.task('minifycss', function () {
  return gulp.src([paths.cssDist + '/style.css', paths.cssDev + '/*.css'])
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.cssDist));
});

gulp.task('images', function() {
  return gulp.src(paths.imgDev + '/*')
    .pipe(newer(paths.imgDist))
    .pipe(imagemin())
    .pipe(gulp.dest(paths.imgDist));
});

gulp.task('watch', function () {
  gulp.watch(paths.sass + '/*.scss', gulp.series('styles', 'minifycss'));
  gulp.watch(paths.imgDev + '/*', gulp.series('images'));
});

gulp.task('default', gulp.parallel('watch', 'images'));
