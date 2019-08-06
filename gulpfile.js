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
    return del(['built', 'dist', 'docs']);
  });

  gulp.task('docs', function () {
    return gulp
      .src(['src/**/*.ts'])
      .pipe(typedoc({
        module: 'commonjs',
        target: 'es5',
        mode: 'file',
        out: 'docs/',
        name: 'Vectorious',
        readme: 'none',
        media: 'benchmarks',
      }))
  });

  gulp.task('build', function () {
    return browserify({ entries: ['src/index.ts'] })
      .ignore('nblas')
      .ignore('nlapack')
      .plugin(tsify)
      .bundle()
      .pipe(source('vectorious.min.js'))
      .pipe(streamify(uglify()))
      .pipe(gulp.dest('./dist'));
  });
})();
