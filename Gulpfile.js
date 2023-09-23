const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const scss = require('gulp-sass')(require('sass'));

gulp.task('scss', function () {
  return gulp.src('./assets/scss/**/*.scss') // パスを修正
    .pipe(scss())
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./**/*.html').on('change', browserSync.reload);
  gulp.watch('./**/*.css').on('change', browserSync.reload);
  gulp.watch('./**/*.js').on('change', browserSync.reload);

  gulp.watch('./assets/scss/**/*.scss', gulp.series('scss')); // パスを修正
});

gulp.task('default', gulp.series('scss', 'serve'));
