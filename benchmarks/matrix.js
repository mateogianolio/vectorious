(function(log) {
  var Benchmark = require('benchmark'),
      vectorious = require('../vectorious'),
      suite = new Benchmark.Suite;
  
  var Matrix = vectorious.Matrix;
  
  var a = Matrix.ones(128, 128),
      b = Matrix.ones(128, 128).scale(2);
  
  suite
    .add('Matrix.add()', function() {
      a.add(b);
    })
    .add('Matrix.subtract()', function() {
      a.subtract(b);
    })
    .add('Matrix.scale()', function() {
      a.scale(Math.random());
    })
    .add('Matrix.multiply()', function() {
      a.multiply(b);
    })
    .add('Matrix.transpose()', function() {
      a.transpose();
    })
    .add('Matrix.inverse()', function() {
      a.inverse();
    })
    .add('Matrix.gauss()', function() {
      a.gauss();
    })
    .add('Matrix.diag()', function() {
      a.diag();
    })
    .add('Matrix.augment()', function() {
      Matrix.augment(a, b);
    })
    .add('Matrix.trace()', function() {
      a.trace();
    })
    .add('Matrix.identity()', function() {
      Matrix.identity(128);
    })
    .add('Matrix.zeros()', function() {
      Matrix.zeros(128, 128);
    })
    .add('Matrix.ones()', function() {
      Matrix.ones(128, 128);
    })
    .on('cycle', function(event) {
      log(String(event.target));
    })
    .run({ 'async': true });
})(console.log);