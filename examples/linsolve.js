(function() {
  'use strict';

  var Matrix = require('../vectorious').Matrix;

  function round(x) {
    return Number(x.toPrecision(1));
  }

  var A = Matrix.random(5, 5).scale(10).map(round),
      B = Matrix.random(5, 1).scale(10).map(round);

  console.log('A:');
  console.log(A.toArray());
  console.log();

  console.log('B:');
  console.log(B.toArray());
  console.log();

  console.log('A.solve(B):');
  console.log(A.solve(B).map(round).toArray());
}());
