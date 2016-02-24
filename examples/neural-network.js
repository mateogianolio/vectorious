// example is based on the numpy neural network tutorial featured here
// https://iamtrask.github.io/2015/07/12/basic-python-network/

var Matrix = require('../vectorious').Matrix;

function addScalar(matrix, scalar) {
  return Matrix.scale(Matrix.ones.apply(null, matrix.shape), scalar).add(matrix);
}

function mul(m1, m2) {
  var copy = Matrix.zeros.apply(null, m1.shape);
  m1.each(function each(val, i, j) {
    var result = val * m2.get(i, j);
    copy.set(i, j, result);
  });
  return copy;
}

function dot(m1, m2) {
  return Matrix.multiply(m1, m2);
}

function sigmoid(val) {
  return 1.0 / (1 + Math.exp(-val));
}

function map(matrix, fn) {
  var copy = Matrix.zeros.apply(null, matrix.shape);
  matrix.each(function each(val, i, j) {
    copy.set(i, j, fn(val));
  });
  return copy;
}

var X = new Matrix([[0,0,1],[0,1,1],[1,0,1],[1,1,1]]);
var y = new Matrix([[0,1,1,0]]).transpose();

var syn0 = addScalar(Matrix.scale(Matrix.random(3, 4), 2), -1);
var syn1 = addScalar(Matrix.scale(Matrix.random(4, 1), 2), -1);

var l1, l2, l2_delta, l1_delta;

for (var i = 0; i < 60000; i++) {
  l1 = map(dot(X, syn0), sigmoid);
  l2 = map(dot(l1, syn1), sigmoid);
  l2_delta = mul(Matrix.subtract(y, l2), mul(l2, (Matrix.subtract(Matrix.ones.apply(null, l2.shape), l2))));
  l1_delta = mul(dot(l2_delta, syn1.transpose()), mul(l1 , Matrix.subtract(Matrix.ones.apply(null, l1.shape), l1)));
  syn1 = syn1.add(dot(l1.transpose(), l2_delta));
  syn0 = syn0.add(dot(X.transpose(), l1_delta));
}

// final trained neural network output!
// should be closed to [[0, 1, 1, 0]] transpose
console.log(l2.toArray());