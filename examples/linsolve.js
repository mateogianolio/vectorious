(function() {
  'use strict';

  var Matrix = require('../vectorious').Matrix;

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

  function round(x) {
    return Number(x.toPrecision(4));
  }

  var A = Matrix.random(5, 5).scale(10).map(round),
      B = Matrix.random(5, 1).scale(10).map(round);

  console.log('A:');
  console.log(A.toArray());
  console.log();

  console.log('B:');
  console.log(B.toArray());
  console.log();

  console.log('linsolve(A, B):');
  console.log(linsolve(A, B));
}());
