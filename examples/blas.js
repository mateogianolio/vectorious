(function () {
  'use strict';

  var v = require('../vectorious'),
      Matrix = v.Matrix,
      BLAS = v.BLAS;

  if (!BLAS)
    throw new Error('no blas support!');

  var a = new Matrix([[1, 2, 3]]),
      b = new Matrix([[3], [2], [1]]);

  console.log('a:', a.toArray());
  console.log('b:', b.toArray());

  // BLAS sum of absolute values
  var sum = BLAS.dasum(3, a.data, 1);
  console.log('dasum:', sum);

  // BLAS dot product
  var dot = BLAS.ddot(3, a.data, 1, b.data, 1);
  console.log('ddot:', dot);

  // BLAS memory swap
  BLAS.dswap(3, a.data, 1, b.data, 1);
  console.log('a:', a.toArray());
  console.log('b:', b.toArray());

  // see http://www.netlib.org/blas/ for a complete list of routines
}());
