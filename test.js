(function(log) {
  var vectorious = require('./vectorious.js');
  
  var vector,
      matrix;

  vector = new vectorious.Vector();
  log(vector);
  // { values: [], length: 0 }

  matrix = new vectorious.Matrix();
  log(matrix);
  // { rows: [] }

  vector = new vectorious.Vector().zeros(5);
  log(vector);
  // { values: [0, 0, 0, 0, 0], length: 5 }

  vector = new vectorious.Vector(1, 2, 3, 4, 5);
  log(vector);
  // { values: [1, 2, 3, 4, 5], length: 5 }

  matrix = new vectorious.Matrix(vector);
  log(matrix);
  // { rows: [ { values: [1, 2, 3, 4, 5], length: 5 } ] }

  matrix = new vectorious.Matrix().zeros(2, 2);
  log(matrix);
  /* {
    rows: [
      { values: [0, 0], length: 2 },
      { values: [0, 0], length: 2 }
    ]
  } */

  var input = [
    [1, 2],
    [3, 4]
  ];

  matrix = new vectorious.Matrix(input);
  log(matrix);
  /* {
    rows: [
      { values: [1, 2], length: 2 },
      { values: [3, 4], length: 2 }
    ]
  } */
})(console.log);