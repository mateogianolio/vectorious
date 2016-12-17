(function () {
  // logistic regression example based on https://github.com/junku901/dnn
  'use strict';

  var v = require('../vectorious'),
      Matrix = v.Matrix,
      Vector = v.Vector;

  var subtract = Matrix.subtract;

  // perform row-wise softmax on matrix
  function softmax(m) {
    var c = m.shape[1],
        max = m.reduce(Math.max),
        sum;

    return m
      .map(function (x) {
        return Math.exp(x - max);
      })
      .map(function (x, i, j) {
        if (j === 0) {
          sum = 0;
          for (var k = 0; k < c; k++)
            sum += this.get(i, k);
        }

        return x / sum;
      });
  }

  // get col-wise mean of matrix as vector
  function mean(m) {
    var c = m.shape[1],
        v = Vector.zeros(c),
        sum;

    return v.map(function (x, i) {
      sum = 0;
      for (var j = 0; j < c; j++)
        sum += m.get(i, j);

      return sum / c;
    });
  }

  // row-wise add vector to matrix
  function addMatVec(m, v) {
    return m.map(function (x, i, j) {
      return x + v.get(j);
    });
  }

  var X = new Matrix([
    [1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1]
  ]);

  var y = new Matrix([
    [1, 0],
    [0, 1]
  ]);

  var W = Matrix.zeros(X.shape[1], y.shape[1]),
      b = Vector.zeros(y.shape[1]);

  var alpha = 0.01, // learning rate
      prob, delta;

  // train
  for (var i = 0; i < 800; i++) {
    prob = softmax(addMatVec(X.multiply(W), b));
    delta = subtract(y, prob);

    W.add(X.T.multiply(delta).scale(alpha));
    b.add(mean(delta).scale(alpha));
  }

  // predict
  var x = new Matrix([
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1]
  ]);

  console.log(softmax(addMatVec(x.multiply(W), b)).toArray());
  // prediction should be close to [[1, 0], [0, 1], [0.5, 0.5]]
}());
