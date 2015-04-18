(function(log) {
  var Benchmark = require('benchmark'),
      vectorious = require('../vectorious'),
      suite = new Benchmark.Suite;
  
  var Vector = vectorious.Vector;
  
  var a = Vector.ones(1024),
      b = Vector.ones(1024).scale(2);
  
  suite
    .add('Vector.add()', function() {
      a.add(b);
    })
    .add('Vector.subtract()', function() {
      a.subtract(b);
    })
    .add('Vector.scale()', function() {
      a.scale(Math.random());
    })
    .add('Vector.normalize()', function() {
      a.normalize();
    })
    .add('Vector.dot()', function() {
      a.dot(b);
    })
    .add('Vector.magnitude()', function() {
      a.magnitude();
    })
    .add('Vector.angle()', function() {
      a.angle(b);
    })
    .add('Vector.project()', function() {
      a.project(b);
    })
    .add('Vector.zeros()', function() {
      Vector.zeros(1024);
    })
    .add('Vector.ones()', function() {
      Vector.ones(1024);
    })
    .add('Vector.range()', function() {
      Vector.range(0, 1024);
    })
    .add('Vector.combine()', function() {
      Vector.combine(a, b);
    })
    .on('cycle', function(event) {
      log(String(event.target));
    })
    .run({ 'async': true });
})(console.log);