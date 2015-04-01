var Vector = require('../../vectorious').Vector;
var size = 16;

var c_rep;
var i;

var vector_1, vector_2;
var max;

vector_1 = new Vector();

for (i = 0; i < size; i++) {
	//vector_1.push(i);
	vector_1.push(i * 2 + 1);
}

var vector_res;
console.log('vector_1', vector_1);
var hrt_start = process.hrtime();

max = vector_1.max();

var hrt_diff = process.hrtime(hrt_start);
console.log('max', max);
console.log('hrt_diff', hrt_diff);