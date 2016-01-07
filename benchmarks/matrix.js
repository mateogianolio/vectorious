(function() {
  'use strict';

  var Benchmark = require('benchmark'),
      Matrix = require('../matrix'),
      chalk = require('chalk'),
      copy = new Benchmark.Suite(),
      inplace = new Benchmark.Suite();

  var N = 128,
      a = Matrix.random(N, N),
      b = Matrix.random(N, N);

  console.log('a, b = Matrix.random(' + N + ', ' + N + ')');
  console.log(chalk.yellow('copy'), chalk.green('in-place'));
  copy
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
    .add('Matrix.subtract(a, b)', function() {
      Matrix.subtract(a, b);
    })
    .add('Matrix.scale(Math.random())', function() {
      Matrix.scale(a, Math.random());
    })
    .add('Matrix.transpose(a)', function() {
      Matrix.transpose(a);
    })
    .on('cycle', function(event) {
      console.log(chalk.yellow(String(event.target)));
    })
    .run();

  inplace
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
      console.log(chalk.green(String(event.target)));
    })
    .on('complete', function() {
      console.log();
    })
    .run();
}());
