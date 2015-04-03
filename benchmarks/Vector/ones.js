var vectorious = require('../../vectorious');
var Vector = vectorious.Vector;

var repetitions = 1000;
var size = 4096;

var c_rep;
var i;

var vector_res;

var hrt_start = process.hrtime();
for (c_rep = 0; c_rep < repetitions; c_rep++) {
	vector_res = Vector.ones(size);
}

var hrt_diff = process.hrtime(hrt_start);

console.log(hrt_diff);
