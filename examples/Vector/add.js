// benchmark.js

var vectorious = require('../../vectorious');

var Vector = vectorious.Vector;
//var Matrix = vectorious.Matrix;

// A few benchmarks.
// Test adding a bunch of numbers
var size = 16;

var i;

var vector_1, vector_2;
var vector_res;

vector_1 = new vectorious.Vector();
vector_2 = new vectorious.Vector();

for (i = 0; i < size; i++) {
	vector_1.push(i);
	vector_2.push(i * 2 + 1);
}


var vector_res;
//var hrt_start = process.hrtime();
vector_res = vector_1.add(vector_2);

//var hrt_diff = process.hrtime(hrt_start);

console.log('vector_res', vector_res);
