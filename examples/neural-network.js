(function () {
  // example is based on the numpy neural network tutorial featured here
  // https://iamtrask.github.io/2015/07/12/basic-python-network/
  'use strict';

  var v = require('../built');

  function sigmoid(ddx) {
    return function (x) {
      return ddx ?
        x * (1 - x) :
        1.0 / (1 + Math.exp(-x));
    };
  }

  // input
  var X = v.array([
    [0, 0, 1],
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ]);

  // output
  var y = v.array([[0, 1, 1, 0]]).T;

  // initialize weights with a standard deviation of 2 and mean -1
  var syn0 = v.random(3, 4).scale(2).subtract(v.ones(3, 4)),
      syn1 = v.random(4, 1).scale(2).subtract(v.ones(4, 1));

  // layers and deltas
  var l0, l1, l0_delta, l1_delta;

  for (var i = 0; i < 60000; i++) {
    l0 = X.multiply(syn0).map(sigmoid());
    l1 = l0.multiply(syn1).map(sigmoid());

    l1_delta = v.subtract(y, l1).product(l1.map(sigmoid(true)));
    l0_delta = l1_delta.multiply(syn1.T).product(l0.map(sigmoid(true)));

    syn1.add(l0.T.multiply(l1_delta));
    syn0.add(X.T.multiply(l0_delta));
  }

  // final trained neural network output!
  // should be close to [[0, 1, 1, 0]] transpose
  console.log(l1.toArray());
}());
