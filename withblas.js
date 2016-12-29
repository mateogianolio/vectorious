(function () {
  'use strict';

  var Vector = module.exports.Vector = require('./vector'),
      Matrix = module.exports.Matrix = require('./matrix'),
      nblas = module.exports.BLAS = require('nblas'),

      applyBlasOptimizations = require('./applyBlasOptimizations');

  applyBlasOptimizations(Vector, Matrix, nblas);
}());
