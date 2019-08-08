(function () {
  // logistic regression example based on https://github.com/junku901/dnn
  'use strict';

  var v = require('../built');
  var subtract = v.subtract;

  // perform row-wise softmax on matrix
  function softmax(m) {
    var c = m.shape[1],
        max = m.max(),
        sum;

    return m
      .add(v.ones(...m.shape).scale(-max))
      .exp()
      .map(function (x, index) {
        var i = Math.floor(index / c);
        var j = index % c;

        if (j === 0) {
          sum = 0;
          for (var k = 0; k < c; k++)
            sum += d1[i * c + k];
        }

        return x / sum;
      });
  }

  // get col-wise mean of matrix as vector
  function mean(m) {
    var c = m.shape[1],
        vec = v.zeros(c),
        sum;

    return vec.map(function (x, i) {
      sum = 0;
      for (var j = 0; j < c; j++)
        sum += m.data[i * c + j];

      return sum / c;
    });
  }

  // row-wise add vector to matrix
  function addMatVec(m, v) {
    var c = m.shape[1];
    return m.map(function (x, index) {
      var j = index % c;
      return x + v.data[j];
    });
  }

  var x = v.array([
    [1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1]
  ]);

  var y = v.array([
    [1, 0],
    [0, 1]
  ]);

  var w = v.zeros(x.shape[1], y.shape[1]),
      b = v.zeros(y.shape[1]);

  var alpha = 0.01, // learning rate
      prob, delta;

  // train
  for (var i = 0; i < 800; i++) {
    prob = softmax(addMatVec(x.multiply(w), b));
    delta = subtract(y, prob);

    w.add(x.copy().T.multiply(delta).scale(alpha));
    b.add(mean(delta).scale(alpha));
  }

  // predict
  var x = v.array([
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1]
  ]);

  console.log(softmax(addMatVec(x.multiply(w), b)));
  // prediction should be close to [[1, 0], [0, 1], [0.5, 0.5]]
}());
