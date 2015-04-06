// benchmark.js

var vectorious = require('../../vectorious');

var Vector = vectorious.Vector;
//var Matrix = vectorious.Matrix;

// A few benchmarks.
// Test adding a bunch of numbers

var repetitions = 1000;
var size = 4096;

var c_rep;
var i;



var vector_1;
var vector_res;

vector_1 = new vectorious.Vector();
//vector_2 = new vectorious.Vector();

for (i = 0; i < size; i++) {
	vector_1.push(i * 2 + 1);
	//vector_2.push(i * 2 + 1);
}


var vector_res;
var hrt_start = process.hrtime();
for (c_rep = 0; c_rep < repetitions; c_rep++) {
	vector_res = vector_1.scale(1000);
}

var hrt_diff = process.hrtime(hrt_start);

console.log(hrt_diff);
