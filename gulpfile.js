(function() {
  'use strict';

  var gulp = require('gulp'),
      tsify = require('tsify'),
      streamify = require('gulp-streamify'),
      uglify = require('gulp-uglify'),
      browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      del = require('del');

  gulp.task('clean', function () {
    return del(['dist']);
  });

  gulp.task('build', function () {
    var files = [
      'src/vector.ts',
      'src/matrix.ts'
    ];

    return browserify({ entries: files })
      .plugin(tsify)
      .bundle()
      .pipe(source('vectorious.min.js'))
      .pipe(streamify(uglify()))
      .pipe(gulp.dest('./dist'));
  });
})();
