// example is based on the numpy neural network tutorial featured here
// https://iamtrask.github.io/2015/07/12/basic-python-network/
'use strict';

var Matrix = require('../vectorious').Matrix;
var add = Matrix.add;
var subtract = Matrix.subtract;
var dot = Matrix.multiply;
var scale = Matrix.scale;
var ones = Matrix.ones;
var zeros = Matrix.zeros;
var random = Matrix.random;

function addScalar(matrix, scalar) {
  return add(scale(ones.apply(null, matrix.shape), scalar), matrix);
}

function mul(m1, m2) {
  var copy = zeros.apply(null, m1.shape);
  return copy.map(function map(val, i, j) {
    return m1.get(i, j) * m2.get(i, j);
  });
}

function sigmoid(val) {
  return 1.0 / (1 + Math.exp(-val));
}

function map(matrix, fn) {
  var copy = zeros.apply(null, matrix.shape);
  matrix.each(function each(val, i, j) {
    copy.set(i, j, fn(val));
  });
  return copy;
}

var X = new Matrix([[0,0,1],[0,1,1],[1,0,1],[1,1,1]]);
var y = new Matrix([[0,1,1,0]]).transpose();

var syn0 = addScalar(scale(random(3, 4), 2), -1);
var syn1 = addScalar(scale(random(4, 1), 2), -1);

var l1, l2, l2_delta, l1_delta;

for (var i = 0; i < 60000; i++) {
  l1 = map(dot(X, syn0), sigmoid);
  l2 = map(dot(l1, syn1), sigmoid);
  l2_delta = mul(subtract(y, l2), mul(l2, addScalar(scale(l2, -1), 1)));
  l1_delta = mul(dot(l2_delta, syn1.transpose()), mul(l1, addScalar(scale(l1, -1), 1)));
  syn1 = add(syn1, dot(l1.transpose(), l2_delta));
  syn0 = add(syn0, dot(X.transpose(), l1_delta));
}

// final trained neural network output!
// should be closed to [[0, 1, 1, 0]] transpose
console.log(l2.toArray());