(function () {
  'use strict';

  var v = require('../built'),
      BLAS = require('nblas');

  if (!BLAS)
    throw new Error('no blas support!');

  var a = v.array([[1, 2, 3]]),
      b = v.array([[3], [2], [1]]);

  console.log('a:', a.toArray());
  console.log('b:', b.toArray());

  // BLAS sum of absolute values
  var sum = BLAS.sasum(3, a.data, 1);
  console.log('sasum:', sum);

  // BLAS dot product
  var dot = BLAS.sdot(3, a.data, 1, b.data, 1);
  console.log('sdot:', dot);

  // BLAS memory swap
  BLAS.sswap(3, a.data, 1, b.data, 1);
  console.log('a:', a.toArray());
  console.log('b:', b.toArray());

  // see http://www.netlib.org/blas/ for a complete list of routines
}());
