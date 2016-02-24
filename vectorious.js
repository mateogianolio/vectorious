(function () {
  'use strict';

  var Vector = require('./vector'),
      Matrix = require('./matrix');
  try {
    var nblas = require('nblas'),
        nlapack = require('nlapack');
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

  Vector.prototype.max = function () {
    return this.data[nblas.idamax(this.length, this.data, 1)];
  };

  Matrix.prototype.multiply = function (matrix) {
    var r1 = this.shape[0],
        c1 = this.shape[1],
        r2 = matrix.shape[0],
        c2 = matrix.shape[1],
        data = new this.type(r1 * c2);

    if (c1 !== r2)
      throw new Error('sizes do not match');

    nblas.gemm(this.data, matrix.data, data, r1, c2, c1);
    return Matrix.fromTypedArray(data, [r1, c2]);
  };

  // LAPACK optimizations
  Matrix.prototype.plu = function () {
    var r = this.shape[0],
        c = this.shape[1],
        ipiv = new Int32Array(r);

    nlapack.getrf(r, c, this.data, ipiv);
    return [this, ipiv];
  };

  Matrix.prototype.lusolve = function (rhs, ipiv) {
    var r = this.shape[0],
        nrhs = rhs.shape[1];

    nlapack.getrs(r, this.data, rhs.data, ipiv, nrhs);
    return rhs;
  };

  module.exports.Vector = Vector;
  module.exports.Matrix = Matrix;
}());
