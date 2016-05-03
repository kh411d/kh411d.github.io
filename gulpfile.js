const gulp = require('gulp');
const concat = require('gulp-concat');
var minifyCss     = require('gulp-minify-css');
const cssFiles = ['public/css/poole.css','public/css/syntax.css','public/css/hyde.css'];
var imagemin    = require('gulp-imagemin');
var pngquant    = require('imagemin-pngquant');

gulp.task('css', () => {
  gulp.src(cssFiles)
    .pipe(concat('all.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('public/css'))

});

gulp.task('imagemin',() => {
	gulp.src(['images/*'])
     .pipe(imagemin({
       progressive: true,
       use: [pngquant({
         quality: '65-75'
       })]
     }))
     .pipe(gulp.dest('_site/images/'));
});



gulp.task('watch', () => {
  gulp.watch(cssFiles, ['css']);
});

gulp.task('default', ['css','imagemin', 'watch']);
