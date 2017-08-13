import gulp from 'gulp';

gulp.task('online',()=>{
  return gulp.src(['server/public/css/**/*','server/public/js/**/*'])
      .pipe(gulp.dest('dist'))
})
