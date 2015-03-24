(function() {
  'use strict';

  var browserify = require('browserify'),
      gulp = require('gulp'),
      transform = require('vinyl-transform'),
      uglify = require('gulp-uglify'),
      sourcemaps = require('gulp-sourcemaps');

  gulp.task('javascript', function () {
    // transform regular node stream to gulp (buffered vinyl) stream 
    var browserified = transform(function(filename) {
      var b = browserify({entries: filename, debug: true});
      return b.bundle();
    });

    return gulp.src('./vectorious.js')
      .pipe(browserified)
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/'));
  });
})();