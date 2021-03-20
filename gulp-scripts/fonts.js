const gulp = require('gulp');

module.exports = () => gulp
    .src('fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
