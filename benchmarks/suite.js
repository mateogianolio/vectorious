(function(log) {
  var Benchmark = require('benchmark'),
      vectorious = require('../vectorious'),
      suite = new Benchmark.Suite;
  
  var Vector = vectorious.Vector,
      Matrix = vectorious.Matrix;
  
  var a = Vector.ones(10),
      b = Vector.ones(10);
  
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
    .on('cycle', function(event) {
      log(String(event.target));
    })
    .on('complete', function(event) {
      log('done!');
    })
    .run({ 'async': true });
})(console.log);