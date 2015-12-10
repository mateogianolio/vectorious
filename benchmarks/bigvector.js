(function() {
  'use strict';

  var Benchmark = require('benchmark'),
      vectorious = require('../vectorious'),
      suite = new Benchmark.Suite();

  var Vector = vectorious.Vector;

  function randomArray(N, M){
    var data = [];
    for(var i = 0; i < N; i++)
      data.push(1 + Math.random());

    return data;
  }

  var N = 262144;
  var data = randomArray(N);
  var a = Vector.ones(data),
      b = Vector.ones(data).scale(2);

  console.log('data = randomArray(' + N + ')');
  console.log('a = Vector.ones(data)');
  console.log('b = Vector.ones(data).scale(2)');
  console.log();

  suite
    .add('Vector.zeros(' + N + ')', function() {
      Vector.zeros(N);
    })
    .add('Vector.ones(' + N + ')', function() {
      Vector.ones(N);
    })
    .add('Vector.range(0, ' + N + ')', function() {
      Vector.range(0, N);
    })
    .add('Vector.combine(a, b)', function() {
      Vector.combine(a, b);
    })
    .add('Vector.add(a, b)', function() {
      Vector.add(a, b);
    })
    .add('a.add(b)', function() {
      a.add(b);
    })
    .add('Vector.subtract(a, b)', function() {
      Vector.subtract(a, b);
    })
    .add('a.subtract(b)', function() {
      a.subtract(b);
    })
    .add('Vector.scale(a, b)', function() {
      Vector.scale(a, b);
    })
    .add('a.scale(Math.random())', function() {
      a.scale(Math.random());
    })
    .add('a.normalize()', function() {
      a.normalize();
    })
    .add('a.dot(b)', function() {
      a.dot(b);
    })
    .add('a.magnitude()', function() {
      a.magnitude();
    })
    .add('a.angle(b)', function() {
      a.angle(b);
    })
    .add('Vector.project(a, b)', function() {
      Vector.project(a, b);
    })
    .add('a.project(b)', function() {
      a.project(b);
    })
    .on('cycle', function(event) {
      console.log(String(event.target));
    })
    .on('complete', function() {
      console.log();
    })
    .run({ 'async': true });
}());
