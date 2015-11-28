(function(log) {
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
          row[j] = Math.random();
      }
      data.push(row);
    }

    return data;
  }

  var N = 4096;
  var data = randomArray(N, N);

  var a = new Matrix(data),
      b = new Matrix(data).scale(2);

  log('data = randomArray(' + N + ', ' + N + ')');
  log('a = Matrix(data)');
  log('b = Matrix(data).scale(2)');
  log();

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
    .add('a.add(b)', function() {
      a.add(b);
    })
    .add('a.subtract(b)', function() {
      a.subtract(b);
    })
    .add('a.scale(Math.random())', function() {
      a.scale(Math.random());
    })
    .add('a.multiply(b)', function() {
      a.multiply(b);
    })
    .add('a.transpose()', function() {
      a.transpose();
    })
    .add('a.diag()', function() {
      a.diag();
    })
    .add('a.trace()', function() {
      a.trace();
    })
    .on('cycle', function(event) {
      log(String(event.target));
    })
    .on('complete', function() {
      log();
      log('Done!');
    })
    .run({ 'async': true });
}(console.log));
