var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var reload = browserSync.reload;


gulp.task('server', function(){
  browserSync.init({
    server: './'
  })
})

gulp.task('sass', function() {
  return gulp.src('style.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'))
  .pipe(browserSync.reload({stream: true}));
})

gulp.task('default', ['server'], function() {
  gulp.watch("style.scss", ['sass'])
  gulp.watch('*.html').on('change', reload)
});
