var gulp = require('gulp');
var clean = require('gulp-clean');

module.exports = function clean_gulp() {
  return gulp.src('app/tmp', { read: false })
    .pipe(clean());
}