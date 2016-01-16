(function() {
  'use strict';

  var Benchmark = require('benchmark'),
      Vector = require('../vectorious').Vector,
      nblas = require('nblas'),
      chalk = require('chalk'),
      copy = new Benchmark.Suite(),
      inplace = new Benchmark.Suite();

  var N = 1024,
      a = Vector.random(N),
      b = Vector.random(N);

  console.log('a, b = Vector.random(' + N + ')');
  console.log(chalk.yellow('copy'), chalk.green('in-place'));

  suite
    .add('Vector.zeros(' + N + ')', () => { Vector.zeros(N); })
    .add('Vector.ones(' + N + ')', () => { Vector.ones(N); })
    .add('Vector.range(0, ' + N + ')', () => { Vector.range(0, N); })
    .add('Vector.combine(a, b)', () => { Vector.combine(a, b); })
    .add('Vector.add(a, b)', () => { Vector.add(a, b); })
    .add('Vector.subtract(a, b)', () => { Vector.subtract(a, b); })
    .add('Vector.scale(a, Math.random())', () => { Vector.scale(a, Math.random()); })
    .add('Vector.project(a, b)', () => { Vector.project(a, b); })
    .add('a.add(b)', () => { a.add(b); })
    .add('a.subtract(b)', () => { a.subtract(b); })
    .add('a.scale(Math.random())', () => { a.scale(Math.random()); })
    .add('a.normalize()', () => { a.normalize(); })
    .add('a.dot(b)', () => { a.dot(b); })
    .add('a.magnitude()', () => { a.magnitude(); })
    .add('a.angle(b)', () => { a.angle(b); })
    .add('a.project(b)', () => { a.project(b); })
    .on('cycle', event => { console.log(String(event.target)); })
    .run();
}());
