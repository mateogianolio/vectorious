var vectorious = require('../../vectorious');

var Vector = vectorious.Vector;
//var Matrix = vectorious.Matrix;

// A few benchmarks.
// Test adding a bunch of numbers

//var repetitions = 1000;
var size = 16;

var c_rep;
var i;



var vector_1, vector_2;
var min;

vector_1 = new vectorious.Vector();
//vector_2 = new vectorious.Vector();

for (i = 0; i < size; i++) {
	//vector_1.push(i);
	vector_1.push(i * 2 + 1);
}


var vector_res;
console.log('vector_1', vector_1);
var hrt_start = process.hrtime();
//for (c_rep = 0; c_rep < repetitions; c_rep++) {
min = vector_1.min();
//}

var hrt_diff = process.hrtime(hrt_start);
console.log('min', min);
console.log('hrt_diff', hrt_diff);