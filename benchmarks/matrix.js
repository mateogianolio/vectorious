(function() {
  'use strict';

  var Benchmark = require('benchmark'),
      vectorious = require('../vectorious'),
      suite = new Benchmark.Suite();

  var Matrix = vectorious.Matrix;

  function randomArray(N, M){

    var data = [];

    for(var i = 0; i < N; i++){
      var row = [];
      for(var j = 0; j < M; j++){
          row[j] = 1 + Math.random();
      }
      data.push(row);
    }

    return data;
  }

  var N = 128;
  var data = randomArray(N, N);

  var a = new Matrix(data),
      b = new Matrix(data).scale(2);

  console.log('data = randomArray(' + N + ', ' + N + ')');
  console.log('a = Matrix(data)');
  console.log('b = Matrix(data).scale(2)');
  console.log();

  suite
    .add('Matrix.identity(' + N + ')', function() {
      Matrix.identity(N);
    })
    .add('Matrix.magic(' + N + ')', function() {
      Matrix.magic(N);
    })
    .add('Matrix.zeros(' + N + ', ' + N + ')', function() {
      Matrix.zeros(N, N);
    })
    .add('Matrix.ones(' + N + ', ' + N + ')', function() {
      Matrix.ones(N, N);
    })
    .add('Matrix.augment(a, b)', function() {
      Matrix.augment(a, b);
    })
    .add('Matrix.add(a, b)', function() {
      Matrix.add(a, b);
    })
    .add('a.add(b)', function() {
      a.add(b);
    })
    .add('Matrix.subtract(a, b)', function() {
      Matrix.subtract(a, b);
    })
    .add('a.subtract(b)', function() {
      a.subtract(b);
    })
    .add('Matrix.scale(Math.random())', function() {
      Matrix.scale(a, Math.random());
    })
    .add('a.scale(Math.random())', function() {
      a.scale(Math.random());
    })
    .add('a.multiply(b)', function() {
      a.multiply(b);
    })
    .add('Matrix.transpose(a)', function() {
      Matrix.transpose(a);
    })
    .add('a.transpose()', function() {
      a.transpose();
    })
    .add('a.gauss()', function() {
      a.gauss();
    })
    .add('a.lu()', function() {
      a.lu();
    })
    .add('a.determinant()', function() {
      a.determinant();
    })
    .add('a.diag()', function() {
      a.diag();
    })
    .add('a.trace()', function() {
      a.trace();
    })
    .add('a.swap(i, j)', function() {
      a.swap(Math.floor(Math.random() * N), Math.floor(Math.random() * N));
    })
    .on('cycle', function(event) {
      console.log(String(event.target));
    })
    .on('complete', function() {
      console.log();
      console.log('Done!');
    })
    .run({ 'async': true });
}());
