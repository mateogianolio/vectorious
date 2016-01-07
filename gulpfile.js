(function() {
  'use strict';

  var package_json = require('./package'),
      browserify = require('browserify'),
      gulp = require('gulp'),
      source = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      uglify = require('gulp-uglify'),
      sourcemaps = require('gulp-sourcemaps'),
      gutil = require('gulp-util');

  gulp.task('javascript', function () {
    // set up the browserify instance on a task basis
    var b = browserify({
      entries: './vectorious.js',
      debug: false,
      standalone: 'vectorious'
    }).ignore('nblas');

    return b.bundle()
      .pipe(source('vectorious-'+ package_json.version + '.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
          // Add transformation tasks to the pipeline here.
          .pipe(uglify())
          .on('error', gutil.log)
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/'));
  });
})();
