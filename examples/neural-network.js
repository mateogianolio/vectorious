(function () {
  // example is based on the numpy neural network tutorial featured here
  // https://iamtrask.github.io/2015/07/12/basic-python-network/
  'use strict';

  var Matrix = require('../vectorious').Matrix;

  // aliases
  var add = Matrix.add,
      subtract = Matrix.subtract,
      dot = Matrix.multiply,
      scale = Matrix.scale,
      ones = Matrix.ones,
      zeros = Matrix.zeros,
      random = Matrix.random;

  function addScalar(matrix, scalar) {
    return add(scale(ones.apply(null, matrix.shape), scalar), matrix);
  }

  // element-wise multiplication
  function mul(a, b) {
    return a.map(function (val, i, j) {
      return val * b.get(i, j);
    });
  }

  // apply sigmoid function on a matrix
  function sigmoid(matrix, deriv) {
    return matrix.map(function (x) {
      return deriv ?
        x * (1 - x) :
        1.0 / (1 + Math.exp(-x));
    });
  }

  // inputs and outputs
  var X = new Matrix([[0, 0, 1], [0, 1, 1], [1, 0, 1], [1, 1, 1]]),
      y = new Matrix([[0, 1, 1, 0]]).transpose();

  // weights
  var syn0 = addScalar(scale(random(3, 4), 2), -1),
      syn1 = addScalar(scale(random(4, 1), 2), -1);

  // layers and deltas
  var l0,
      l1,
      l0_delta,
      l1_delta;

  for (var i = 0; i < 60000; i++) {
    l0 = sigmoid(dot(X, syn0));
    l1 = sigmoid(dot(l0, syn1));

    l1_delta = mul(subtract(y, l1), sigmoid(l1, true));
    l0_delta = mul(dot(l1_delta, syn1.transpose()), sigmoid(l0, true));

    syn1 = add(syn1, dot(l0.transpose(), l1_delta));
    syn0 = add(syn0, dot(X.transpose(), l0_delta));
  }

  // final trained neural network output!
  // should be closed to [[0, 1, 1, 0]] transpose
  console.log(l1.toArray());
}());
