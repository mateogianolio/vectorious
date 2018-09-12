(function() {
  'use strict';

  var gulp = require('gulp'),
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
      'vector.js',
      'matrix.js'
    ];

    return browserify({ entries: files })
      .transform('babelify', { presets: ['@babel/preset-env'] })
      .bundle()
      .pipe(source('vectorious.min.js'))
      .pipe(streamify(uglify()))
      .pipe(gulp.dest('./dist'));
  });
})();
