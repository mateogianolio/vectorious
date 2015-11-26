(function(log) {
  'use strict';

  var Benchmark = require('benchmark'),
      vectorious = require('../vectorious'),
      suite = new Benchmark.Suite();

  var Vector = vectorious.Vector;

  function randomArray(N, M){

    var data = [];

    for(var i = 0; i < N; i++){
      var row = [];
      for(var j = 0; j < M; j++){
          row[j] = Math.random();
      }
      data.push(row.length ? row : Math.random());
    }

    return data;
  }

  var N = 262144;
  var data = randomArray(N);
  var a = Vector.ones(data),
      b = Vector.ones(data).scale(2);

  log('data = randomArray(' + N + ')');
  log('a = Vector.ones(data)');
  log('b = Vector.ones(data).scale(2)');
  log();

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
    .add('a.add(b)', function() {
      a.add(b);
    })
    .add('a.subtract(b)', function() {
      a.subtract(b);
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
    .add('a.project(b)', function() {
      a.project(b);
    })
    .on('cycle', function(event) {
      log(String(event.target));
    })
    .on('complete', function() {
      log();
    })
    .run({ 'async': true });
})(console.log);
