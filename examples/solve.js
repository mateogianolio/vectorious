(function() {
  'use strict';

  var Matrix = require('../vectorious').Matrix;

  var a = Matrix.random(3, 3).scale(10),
      b = Matrix.random(3, 1).scale(10);

  console.log('a:');
  console.log(a.toArray());

  console.log('b:');
  console.log(b.toArray());

  console.log('a.solve(b):');
  console.log(a.solve(b).toArray());
}());
