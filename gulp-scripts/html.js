const gulp = require('gulp');

module.exports = () => gulp
    .src('*.html')
    .pipe(gulp.dest('dist'));
