(function() {
  'use strict';

  var vectorious = require('../vectorious');

  function linsolve(A, B) {
    var RREF = A.augment(B).gauss();
    var n = Math.min(RREF.shape[0], RREF.shape[1]),
        x = new Array(n),
        i, j;

    for(i = n - 1; i >= 0; i--) {
      x[i] = RREF.get(i, n);
      for(j = i + 1; j < n; j++)
        x[i] = x[i] - RREF.get(i, j) * x[j];

      x[i] = x[i] / RREF.get(i, i);
    }

    return x;
  }

  var A = vectorious
    .Matrix
    .random(5, 5)
    .map(function (x) {
      return Math.floor(10 * x);
    });

  console.log('A:');
  console.log(A.toArray());
  console.log();

  var B = vectorious
    .Matrix
    .random(5, 1)
    .map(function (x) {
      return Math.floor(10 * x);
    });

  console.log('B:');
  console.log(B.toArray());
  console.log();

  console.log('Ax = B gives solutions:');
  console.log(linsolve(A, B).map(function (x) {
    return Number(x.toPrecision(6));
  }));
}());
