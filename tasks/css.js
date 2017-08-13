import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import gap from 'gulp-append-prepend';
import sass from 'gulp-sass';
import uglify from 'gulp-uglifycss';
import base64 from 'gulp-inline-base64';
import prefixer from 'gulp-autoprefixer';
import path from 'path';
import args from './util/args';


gulp.task('css',()=>{
  return gulp.src('app/css/*.scss')
    .pipe(sass())
    .pipe(base64({
      baseDir:path.resolve(__dirname,'../app/css'),
      debug:true
    }))
    .pipe(prefixer())
    .pipe(uglify({
      "uglyComments": true
    }))
    .pipe(gulp.dest('server/public/css'))
    .pipe(gulpif(args.watch, livereload()));
})
