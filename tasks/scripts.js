import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log, colors} from 'gulp-util';
import args from './util/args';
import path from 'path';

gulp.task('scripts', ()=>{
    return gulp.src(['app/js/*.js'])
    .pipe(plumber({
        errorHandle: function () {

        }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
        module: {
            loaders: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [
                  path.resolve(__dirname, "../app/js")
                ],
                exclude: /node_modules/
            },{
              test:/\.vue$/,
              loader:'vue-loader'
            }]
        },
        resolve: {
          alias: {
            'vue$': 'vue/dist/vue.esm.js'
          }
        },
        plugins:[
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
          })
        ]
    }, webpack, (err, stats)=>{
        log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
            chunks: false
        }));
    }))
    .pipe(uglify({compress: {properties: false}, output: {quote_keys: true}}))
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch, livereload()));
});
