(function() {
  'use strict';

  var v = require('../built');

  var a = v.random(3, 3).scale(10),
      b = v.random(3, 1).scale(10);

  console.log('a:');
  console.log(a);

  console.log('b:');
  console.log(b);

  console.log('a.solve(b):');
  console.log(a.solve(b));
}());
