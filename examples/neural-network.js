(function () {
  // example is based on the numpy neural network tutorial featured here
  // https://iamtrask.github.io/2015/07/12/basic-python-network/
  'use strict';

  var Matrix = require('../vectorious').Matrix;

  // aliases
  var add = Matrix.add,
      subtract = Matrix.subtract,
      dot = Matrix.multiply,
      random = Matrix.random;

  // element-wise matrix multiplication
  function mul(a, b) {
    return a.map(function (val, i, j) {
      return val * b.get(i, j);
    });
  }

  // sigmoid function (and derivative)
  function sigmoid(ddx) {
    return function (x) {
      return ddx ?
        x * (1 - x) :
        1.0 / (1 + Math.exp(-x));
    };
  }

  // inputs and outputs
  var X = new Matrix([[0, 0, 1], [0, 1, 1], [1, 0, 1], [1, 1, 1]]),
      y = new Matrix([[0, 1, 1, 0]]).T;

  console.log(X.shape, y.shape);

  // initialize weights with a standard deviation of 2 and mean -1
  var syn0 = random.apply(null, X.T.shape, 2, -1),
      syn1 = random.apply(null, y.shape, 2, -1);

  // layers and deltas
  var l0,
      l1,
      l0_delta,
      l1_delta;

  for (var i = 0; i < 60000; i++) {
    l0 = dot(X, syn0).map(sigmoid());
    l1 = dot(l0, syn1).map(sigmoid());

    l1_delta = mul(subtract(y, l1), l1.map(sigmoid(true)));
    l0_delta = mul(dot(l1_delta, syn1.T), l0.map(sigmoid(true)));

    syn1 = add(syn1, dot(l0.T, l1_delta));
    syn0 = add(syn0, dot(X.T, l0_delta));
  }

  // final trained neural network output!
  // should be closed to [[0, 1, 1, 0]] transpose
  console.log(l1.toArray());
}());
