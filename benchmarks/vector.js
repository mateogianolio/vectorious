(function(log) {
  var Benchmark = require('benchmark'),
      vectorious = require('../vectorious'),
      suite = new Benchmark.Suite;
  
  var Vector = vectorious.Vector;
  
  var a = Vector.ones(1024),
      b = Vector.ones(1024).scale(2);
  
  log('a = Vector.ones(1024)');
  log('b = Vector.ones(1024).scale(2)');
  log();
  
  suite
    .add('Vector.zeros(1024)', function() {
      Vector.zeros(1024);
    })
    .add('Vector.ones(1024)', function() {
      Vector.ones(1024);
    })
    .add('Vector.range(0, 1024)', function() {
      Vector.range(0, 1024);
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