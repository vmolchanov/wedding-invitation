const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;

module.exports = () => gulp
    .src('js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
