(function () {
  'use strict';

  var Vector = require('./vector'),
      Matrix = require('./matrix');
  try {
    var nblas = require('nblas');
  } catch (error) {
    module.exports.Vector = Vector;
    module.exports.Matrix = Matrix;
    return;
  }

  // BLAS optimizations
  Vector.prototype.add =
  Matrix.prototype.add = function (data) {
    var l1 = this instanceof Vector ? this.length : this.shape[0] * this.shape[1],
        l2 = data instanceof Vector ? data.length : data.shape[0] * data.shape[1];
    if (l1 !== l2)
      throw new Error('sizes do not match!');
    if (!l1 && !l2)
      return this;

    nblas.axpy(data.data, this.data);
    return this;
  };

  Vector.prototype.subtract =
  Matrix.prototype.subtract = function (data) {
    var l1 = this instanceof Vector ? this.length : this.shape[0] * this.shape[1],
        l2 = data instanceof Vector ? data.length : data.shape[0] * data.shape[1];
    if (l1 !== l2)
      throw new Error('sizes do not match!');
    if (!l1 && !l2)
      return this;

    nblas.axpy(data.data, this.data, -1);
    return this;
  };

  Vector.prototype.scale =
  Matrix.prototype.scale = function (scalar) {
    nblas.scal(this.data, scalar);
    return this;
  };

  Vector.prototype.dot = function (vector) {
    if (this.length !== vector.length)
      throw new Error('sizes do not match!');

    return nblas.dot(this.data, vector.data);
  };

  Vector.prototype.magnitude = function () {
    if (!this.length)
      return 0;

    return nblas.nrm2(this.data);
  };

  Vector.prototype.max = function() {
    return this.data[nblas.idamax(this.length, this.data, 1)];
  };

  module.exports.Vector = Vector;
  module.exports.Matrix = Matrix;
}());
