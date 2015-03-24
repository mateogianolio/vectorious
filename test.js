(function(log) {
  var vectorious = require('./main.js');
  
  var matrix = new vectorious.Matrix().zeros(2, 2);
  var vector = new vectorious.Vector().zeros(2);
  
  console.log(matrix.toString());
  console.log(vector.toString());
})(console.log);