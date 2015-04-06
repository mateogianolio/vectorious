// Benchmark suite

var benchmark_js_files = [
	'add.js',
	'subtract.js',
	'constructor.js',
	'equals.js',
	'ones.js',
	'zeros.js',
	'scale.js'
];


// Want to run the benchmarks, and get the time they take.
// Should get the reading output from the benchmark program.


var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
var async = require('async');

var js_runtime = 'iojs';

var sns, s, ns, tns;
var parse = JSON.parse;

var total_ns = 0;

var task_total_ns;

var num_repetitions_per_file = 10;

var repeat_run_file = function(filename, num_repetitions, callback) {
	var process = function(callback) {
		if (num_repetitions > 0) {
			run_file(filename, function(err, res) {
				//console.log()
				num_repetitions--;
				process(callback);

			})
		} else {
			callback();
		}
	}
	process(callback);
}

var run_file = function(filename, callback) {
	var test_add = spawn(js_runtime, [filename]);
	test_add.stdout.on('data', function (data) {
		sns = parse(data), s = sns[0], ns = sns[1];
		tns = s * 1000000000 + ns;
		//console.log('tns', tns);

		total_ns += tns;
		task_total_ns += tns;
		callback();
	});
}

// Need to call functions in an order.

var fns = [];

var task_total_s;

String.prototype.rpad = function(padString, length) {
	var str = this;
    while (str.length < length)
        str = str + padString;
    return str;
}

var benchmark_js_file;
for (var c = 0, l = benchmark_js_files.length; c < l; c++) {
	benchmark_js_file = benchmark_js_files[c];

	(function(benchmark_js_file) {
		fns.push(function(callback) {
		task_total_ns = 0;
		repeat_run_file(benchmark_js_file, num_repetitions_per_file, function() {
			task_total_s = task_total_ns / 1000000000;
			console.log(benchmark_js_file.rpad(' ', 16) + ' * ' + num_repetitions_per_file + '     ', task_total_s);
			callback();
		});
	});
	})(benchmark_js_file);
	
}

fns.push(function() {
	//console.log('total_ns', total_ns);

	var total_s = total_ns / 1000000000;
	console.log('total_s', total_s);

});

async.series(fns);


