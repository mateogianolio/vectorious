(function () {
  // logistic regression example based on https://github.com/junku901/dnn
  'use strict';

  var v = require('../vectorious'),
      Matrix = v.Matrix,
      Vector = v.Vector;

  var subtract = Matrix.subtract;

  // perform row-wise softmax on matrix
  function softmax(m) {
    var r = m.shape[0],
        c = m.shape[1],
        max = new Vector(m).max(),
        sum = 0,
        exp;

    return m.map(function (x, i, j) {
      if (j === 0) {
        sum = 0;
        for (var k = 0; k < c; k++)
          sum += Math.exp(m.get(i, k) - max);
      }

      return Math.exp(x - max) / sum;
    });
  }

  // get row-wise mean of matrix as vector
  function mean(m) {
    var r = m.shape[0],
        c = m.shape[1],
        v = Vector.zeros(c),
        sum;

    return v.map(function (x, i) {
      sum = 0;
      for (var j = 0; j < r; j++)
        sum += m.data[i * c + j];

      return sum / c;
    });
  }

  // add vector to matrix
  function addMatVec(m, v) {
    return m.map(function (x, r, c) {
      return x + v.get(c);
    });
  }

  var X = new Matrix([
    [1, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [0, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 0]
  ]);

  var y = new Matrix([
    [1, 0],
    [1, 0],
    [1, 0],
    [0, 1],
    [0, 1],
    [0, 1]
  ]);

  var W = Matrix.zeros(X.shape[0], y.shape[1]),
      b = Vector.zeros(y.shape[1]),
      rate = 0.01,
      prob,
      delta;

  // train
  for (var i = 0; i < 800; i++) {
    prob = softmax(addMatVec(X.multiply(W), b));
    delta = subtract(y, prob);

    W.add(X.T.multiply(delta).scale(rate));
    b.add(mean(delta).scale(rate));
  }

  // predict
  var x = new Matrix([
    [1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 0]
  ]);

  console.log(softmax(addMatVec(x.multiply(W), b)).toArray());
  // prediction should be close to [[1, 0], [0, 1], [0.5, 0.5]]
}());
