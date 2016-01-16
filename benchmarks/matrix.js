(function() {
  'use strict';

  var Benchmark = require('benchmark'),
      Matrix = require('../vectorious').Matrix,
      suite = new Benchmark.Suite();

  var N = 128,
      a = Matrix.random(N, N),
      b = Matrix.random(N, N);

  console.log('a, b = Matrix.random(' + N + ', ' + N + ')');

  suite
    .add('Matrix.identity(' + N + ')', () => { Matrix.identity(N); })
    .add('Matrix.magic(' + N + ')', () => { Matrix.magic(N); })
    .add('Matrix.zeros(' + N + ', ' + N + ')', () => { Matrix.zeros(N, N); })
    .add('Matrix.ones(' + N + ', ' + N + ')', () => { Matrix.ones(N, N); })
    .add('Matrix.augment(a, b)', () => { Matrix.augment(a, b); })
    .add('Matrix.add(a, b)', () => { Matrix.add(a, b); })
    .add('Matrix.subtract(a, b)', () => { Matrix.subtract(a, b); })
    .add('Matrix.scale(Math.random())', () => { Matrix.scale(a, Math.random()); })
    .add('Matrix.transpose(a)', () => { Matrix.transpose(a); })
    .add('a.add(b)', () => { a.add(b); })
    .add('a.subtract(b)', () => { a.subtract(b); })
    .add('a.scale(Math.random())', () => { a.scale(Math.random()); })
    .add('a.multiply(b)', () => { a.multiply(b); })
    .add('a.transpose()', () => { a.transpose(); })
    .add('a.gauss()', () => { a.gauss(); })
    .add('a.lu()', () => { a.lu(); })
    .add('a.trace()', () => { a.trace(); })
    .add('a.swap(i, j)', () => { a.swap(Math.floor(Math.random() * N), Math.floor(Math.random() * N)); })
    .on('cycle', event => { console.log(String(event.target)); })
    .run();
}());
