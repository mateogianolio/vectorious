// benchmark.js

var vectorious = require('../../vectorious');

var Vector = vectorious.Vector;
var Matrix = vectorious.Matrix;

// A few benchmarks.
// Test adding a bunch of numbers

var repetitions = 1000000;

var c_rep;

var hrt_start = process.hrtime();

var vector, matrix;

for (c_rep = 0; c_rep < repetitions; c_rep++) {
	vector = new vectorious.Vector();
	

}

var hrt_diff = process.hrtime(hrt_start);

console.log(hrt_diff);
