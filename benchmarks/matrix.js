(function(log) {
  var Benchmark = require('benchmark'),
      vectorious = require('../vectorious'),
      suite = new Benchmark.Suite;
  
  var Matrix = vectorious.Matrix;
  
  var a = Matrix.ones(128, 128),
      b = Matrix.ones(128, 128).scale(2);
  
  log('a = Matrix.ones(128, 128)');
  log('b = Matrix.ones(128, 128).scale(2)');
  log();
  
  suite
    .add('Matrix.identity(128)', function() {
      Matrix.identity(128);
    })
    .add('Matrix.magic(128)', function() {
      Matrix.magic(128);
    })
    .add('Matrix.zeros(128, 128)', function() {
      Matrix.zeros(128, 128);
    })
    .add('Matrix.ones(128, 128)', function() {
      Matrix.ones(128, 128);
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
    .add('a.gauss()', function() {
      a.gauss();
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
})(console.log);