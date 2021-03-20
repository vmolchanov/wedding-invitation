const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const svgo = require('gulp-svgo');

module.exports = () => gulp
    .src('img/**/*.*')
    .pipe(imagemin())
    .pipe(svgo())
    .pipe(gulp.dest('dist/img'));
