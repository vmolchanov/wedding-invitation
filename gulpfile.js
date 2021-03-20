const gulp = require('gulp');
const html = require('./gulp-scripts/html');
const styles = require('./gulp-scripts/styles');
const scripts = require('./gulp-scripts/scripts');
const fonts = require('./gulp-scripts/fonts');
const images = require('./gulp-scripts/images');

gulp.task('build', gulp.parallel(html, styles, scripts, fonts, images));
