(function() {
  'use strict';

  var gulp = require('gulp'),
      tsify = require('tsify'),
      streamify = require('gulp-streamify'),
      uglify = require('gulp-uglify'),
      browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      del = require('del'),
      typedoc = require('gulp-typedoc');

  gulp.task('clean', function () {
    return del(['dist']);
  });

  gulp.task('typedoc', function () {
    return gulp
      .src(['src/**/*.ts'])
      .pipe(typedoc({
        module: 'commonjs',
        target: 'es5',
        mode: 'file',
        out: 'docs/',
        name: 'Vectorious',
        theme: 'default',
        readme: 'none',
        hideGenerator: true
      }))
  });

  gulp.task('build', function () {
    var files = [
      'src/index.ts'
    ];

    return browserify({ entries: files })
      .ignore('nblas')
      .plugin(tsify)
      .bundle()
      .pipe(source('vectorious.min.js'))
      .pipe(streamify(uglify()))
      .pipe(gulp.dest('./dist'));
  });
})();
