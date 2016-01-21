(function() {
  'use strict';

  var package_json = require('./package'),
      browserify = require('browserify'),
      gulp = require('gulp'),
      source = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      uglify = require('gulp-uglify'),
      sourcemaps = require('gulp-sourcemaps'),
      gutil = require('gulp-util'),
      es = require('event-stream');

  gulp.task('javascript', function () {
    var vector = browserify({ entries: './vector.js', standalone: 'Vector' })
      .bundle()
      .pipe(source('vectorious-'+ package_json.version + '.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .on('error', gutil.log)
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/'));

    var matrix = browserify({ entries: './matrix.js', standalone: 'Matrix' })
      .bundle()
      .pipe(source('vectorious-'+ package_json.version + '.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .on('error', gutil.log)
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/'));

    es.merge(vector, matrix);
  });
})();
