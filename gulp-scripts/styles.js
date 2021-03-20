const gulp = require('gulp');
const cleanCss = require('gulp-clean-css');

module.exports = () => gulp
    .src('css/**/*.css')
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
