# Vectorious ![npm version](https://img.shields.io/npm/v/vectorious.svg) ![travis](https://img.shields.io/travis/mateogianolio/vectorious.svg) ![npm downloads](https://img.shields.io/npm/dm/vectorious.svg)

Vectorious is a high performance linear algebra library. It is written in
JavaScript using single- and double-precision C++ bindings to CBLAS — with native fallbacks,
in case you want to use it in your browser.

* [Installation](#-installation)
  * [For the browser](#-for-the-browser)
* [Extensions](#-extensions)
* [Usage](#-usage)
* [Vector](#-vector)
* [Matrix](#-matrix)
* [Benchmarks](#-benchmark-)
  * [2.0.0](#200)
  * [2.1.0](#210)
  * [2.2.0](#220)
  * [3.0.0](#300)
  * [4.0.0](#400)


## [&uarr;](#vectorious) Installation

Install with ```npm```

```bash
$ npm install vectorious
```

Test with

```bash
$ npm test
```

Run benchmarks with

```bash
$ npm run benchmark
```

#### [&uarr;](#vectorious) For the browser

Download a [release](https://github.com/mateogianolio/vectorious/releases) and use it like this:

```html
<script src="vectorious-3.0.0.js"></script>
<script>
  // e.g. var vector = new vectorious.Vector()
</script>
```

## [&uarr;](#vectorious) Usage

Since [2.1.0](https://github.com/mateogianolio/vectorious/releases/tag/2.1.0) ```Vector``` implements [JavaScript typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) for increased performance. The default ```Vector``` type is ```Float64Array```, but this can be specified upon creation.

```javascript
var vectorious = require('vectorious'),
    Vector = vectorious.Vector,
    Matrix = vectorious.Matrix;

var vector,
    matrix;

// Create an empty vector of default type Float64Array
vector = new Vector();
/* Vector { type: [Function: Float64Array], length: 0 } */

// Create an empty vector of type Uint8Array
vector = new Vector(Uint8Array);
/* Vector { type: [Function: Uint8Array], length: 0 } */

matrix = new Matrix();
/* Matrix { type: [Function: Float64Array], shape: [] } */

vector = Vector.zeros(5);
/* Vector {
  type: [Function: Float64Array],
  length: 5,
  buffer: ArrayBuffer {},
  values: Float64Array { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0 } } */

vector = new Vector(1, 2, 3, 4, 5);
/* Vector {
  type: [Function: Float64Array],
  length: 5,
  buffer: ArrayBuffer {},
  values: Float64Array { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 } } */

matrix = new Matrix(vector);
/* Matrix {
  type: [Function: Float64Array],
  shape: [ 5, 1 ],
  data: Float64Array { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 } } */

matrix = Matrix.zeros(2, 2);
/* Matrix {
  shape: [ 2, 2 ],
  data: Float64Array { '0': 0, '1': 0, '2': 0, '3': 0 },
  type: [Function: Float64Array] } */

var input = [
  [1, 2],
  [3, 4]
];

matrix = new Matrix(input);
/* Matrix {
  shape: [ 2, 2 ],
  data: Float64Array { '0': 1, '1': 2, '2': 3, '3': 4 },
  type: [Function: Float64Array] } */
```

Now that you've got a hang of the basics, let me show you a useful application example.

```javascript
var time = Vector.range(0, Math.PI / 12, Math.PI);
/* Vector {
  type: [Function: Float64Array],
  length: 12,
  buffer: ArrayBuffer {},
  values:
   Float64Array {
     '0': 0,
     '1': 0.2617993877991494,
     '2': 0.5235987755982988,
     '3': 0.7853981633974483,
     '4': 1.0471975511965976,
     '5': 1.308996938995747,
     '6': 1.5707963267948963,
     '7': 1.8325957145940457,
     '8': 2.0943951023931953,
     '9': 2.356194490192345,
     '10': 2.6179938779914944,
     '11': 2.879793265790644 } } */

var sine = time.map(Math.sin);
/* Vector {
  type: [Function: Float64Array],
  length: 12,
  buffer: ArrayBuffer {},
  values:
   Float64Array {
     '0': 0,
     '1': 0.25881904510252074,
     '2': 0.49999999999999994,
     '3': 0.7071067811865475,
     '4': 0.8660254037844386,
     '5': 0.9659258262890682,
     '6': 1,
     '7': 0.9659258262890684,
     '8': 0.8660254037844387,
     '9': 0.7071067811865476,
     '10': 0.49999999999999994,
     '11': 0.2588190451025206 } } */
```

For more advanced uses, check out the extensions [solve](https://github.com/mateogianolio/vectorious-solve) and [plot](https://github.com/mateogianolio/vectorious-plot).

## [&uarr;](#vectorious) [API](https://github.com/mateogianolio/vectorious/wiki)

## [&uarr;](#vectorious) Benchmarks

#### [2.0.0](https://github.com/mateogianolio/vectorious/releases/tag/2.0.0)

```
$ node ./benchmarks/vector.js && node ./benchmarks/matrix.js

a = Vector.ones(1024)
b = Vector.ones(1024).scale(2)

Vector.zeros(1024) x 27,400 ops/sec ±0.47% (94 runs sampled)
Vector.ones(1024) x 26,838 ops/sec ±0.45% (98 runs sampled)
Vector.range(0, 1024) x 32,830 ops/sec ±0.74% (95 runs sampled)
Vector.combine(a, b) x 27,724 ops/sec ±0.36% (99 runs sampled)
a.add(b) x 53,644 ops/sec ±0.41% (100 runs sampled)
a.subtract(b) x 53,582 ops/sec ±0.39% (100 runs sampled)
a.scale(Math.random()) x 10,452 ops/sec ±0.53% (99 runs sampled)
a.normalize() x 5,212 ops/sec ±0.54% (99 runs sampled)
a.dot(b) x 361,011 ops/sec ±0.42% (101 runs sampled)
a.magnitude() x 420,937 ops/sec ±0.44% (101 runs sampled)
a.angle(b) x 132,931 ops/sec ±0.34% (97 runs sampled)
a.project(b) x 5,661 ops/sec ±0.35% (95 runs sampled)

a = Matrix.ones(128, 128)
b = Matrix.ones(128, 128).scale(2)

Matrix.identity(128) x 1,454 ops/sec ±1.84% (92 runs sampled)
Matrix.zeros(128, 128) x 1,482 ops/sec ±2.08% (92 runs sampled)
Matrix.ones(128, 128) x 1,581 ops/sec ±1.15% (96 runs sampled)
Matrix.augment(a, b) x 1,561 ops/sec ±1.32% (96 runs sampled)
a.add(b) x 3,238 ops/sec ±1.10% (97 runs sampled)
a.subtract(b) x 3,224 ops/sec ±1.31% (97 runs sampled)
a.scale(Math.random()) x 586 ops/sec ±1.09% (92 runs sampled)
a.multiply(b) x 25.22 ops/sec ±1.65% (46 runs sampled)
a.transpose() x 817 ops/sec ±2.54% (89 runs sampled)
a.gauss() x 174 ops/sec ±4.27% (65 runs sampled)
a.diag() x 18,717 ops/sec ±2.20% (88 runs sampled)
a.trace() x 19,097 ops/sec ±1.28% (96 runs sampled)
```

#### [2.1.0](https://github.com/mateogianolio/vectorious/releases/tag/2.1.0)

```
$ node ./benchmarks/vector.js && node ./benchmarks/matrix.js

a = Vector.ones(1024)
b = Vector.ones(1024).scale(2)

Vector.zeros(1024) x 138,658 ops/sec ±4.84% (67 runs sampled)
Vector.ones(1024) x 140,214 ops/sec ±4.75% (66 runs sampled)
Vector.range(0, 1024) x 37,543 ops/sec ±4.80% (81 runs sampled)
Vector.combine(a, b) x 6,120 ops/sec ±2.94% (91 runs sampled)
a.add(b) x 93,725 ops/sec ±7.82% (68 runs sampled)
a.subtract(b) x 95,672 ops/sec ±7.67% (70 runs sampled)
a.scale(Math.random()) x 99,214 ops/sec ±7.74% (72 runs sampled)
a.normalize() x 84,459 ops/sec ±7.32% (72 runs sampled)
a.dot(b) x 501,345 ops/sec ±0.43% (98 runs sampled)
a.magnitude() x 623,274 ops/sec ±0.56% (94 runs sampled)
a.angle(b) x 191,828 ops/sec ±0.52% (92 runs sampled)
a.project(b) x 73,958 ops/sec ±6.82% (79 runs sampled)

a = Matrix.ones(128, 128)
b = Matrix.ones(128, 128).scale(2)

Matrix.identity(128) x 4,042 ops/sec ±5.32% (76 runs sampled)
Matrix.zeros(128, 128) x 4,573 ops/sec ±7.11% (79 runs sampled)
Matrix.ones(128, 128) x 5,480 ops/sec ±2.36% (81 runs sampled)
Matrix.augment(a, b) x 292 ops/sec ±5.06% (78 runs sampled)
a.add(b) x 3,688 ops/sec ±9.16% (68 runs sampled)
a.subtract(b) x 4,299 ops/sec ±4.08% (75 runs sampled)
a.scale(Math.random()) x 4,529 ops/sec ±3.01% (75 runs sampled)
a.multiply(b) x 28.85 ops/sec ±0.80% (52 runs sampled)
a.transpose() x 2,255 ops/sec ±5.07% (78 runs sampled)
a.gauss() x 374 ops/sec ±3.55% (86 runs sampled)
a.diag() x 893 ops/sec ±2.11% (93 runs sampled)
a.trace() x 907 ops/sec ±1.63% (95 runs sampled)
```

#### [2.2.0](https://github.com/mateogianolio/vectorious/releases/tag/2.2.0)

```
$ npm run benchmark

> vectorious@2.2.0 benchmark /path/to/vectorious
> node ./benchmarks/vector.js && node ./benchmarks/matrix.js

a = Vector.ones(1024)
b = Vector.ones(1024).scale(2)

Vector.zeros(1024) x 135,355 ops/sec ±5.22% (68 runs sampled)
Vector.ones(1024) x 146,065 ops/sec ±5.23% (72 runs sampled)
Vector.range(0, 1024) x 41,358 ops/sec ±3.29% (90 runs sampled)
Vector.combine(a, b) x 6,369 ops/sec ±2.79% (90 runs sampled)
a.add(b) x 95,535 ops/sec ±7.24% (69 runs sampled)
a.subtract(b) x 96,199 ops/sec ±7.31% (72 runs sampled)
a.scale(Math.random()) x 100,021 ops/sec ±7.21% (68 runs sampled)
a.normalize() x 85,098 ops/sec ±7.00% (73 runs sampled)
a.dot(b) x 505,057 ops/sec ±0.38% (99 runs sampled)
a.magnitude() x 627,442 ops/sec ±0.42% (94 runs sampled)
a.angle(b) x 193,797 ops/sec ±0.36% (93 runs sampled)
a.project(b) x 73,280 ops/sec ±6.85% (73 runs sampled)

a = Matrix.ones(128, 128)
b = Matrix.ones(128, 128).scale(2)

Matrix.identity(128) x 4,806 ops/sec ±2.37% (86 runs sampled)
Matrix.magic(128) x 1,161 ops/sec ±5.96% (61 runs sampled)
Matrix.zeros(128, 128) x 5,406 ops/sec ±2.15% (77 runs sampled)
Matrix.ones(128, 128) x 5,495 ops/sec ±2.54% (67 runs sampled)
Matrix.augment(a, b) x 288 ops/sec ±7.03% (75 runs sampled)
a.add(b) x 4,512 ops/sec ±3.26% (78 runs sampled)
a.subtract(b) x 4,539 ops/sec ±3.09% (79 runs sampled)
a.scale(Math.random()) x 4,681 ops/sec ±3.29% (78 runs sampled)
a.multiply(b) x 30.17 ops/sec ±1.01% (54 runs sampled)
a.transpose() x 2,455 ops/sec ±3.29% (83 runs sampled)
a.gauss() x 396 ops/sec ±2.72% (89 runs sampled)
a.diag() x 945 ops/sec ±1.66% (89 runs sampled)
a.trace() x 940 ops/sec ±1.74% (94 runs sampled)
```

#### [3.0.0](https://github.com/mateogianolio/vectorious/releases/tag/3.0.0)

```
$ npm run benchmark

> vectorious@3.0.0 benchmark /Users/mg/Projects/javascript/vectorious
> node ./benchmarks/vector.js && node ./benchmarks/matrix.js

a = Vector.ones(1024)
b = Vector.ones(1024).scale(2)

Vector.zeros(1024) x 175,737 ops/sec ±3.88% (74 runs sampled)
Vector.ones(1024) x 176,791 ops/sec ±3.55% (75 runs sampled)
Vector.range(0, 1024) x 51,848 ops/sec ±2.50% (85 runs sampled)
Vector.combine(a, b) x 12,330 ops/sec ±2.19% (89 runs sampled)
a.add(b) x 102,070 ops/sec ±8.98% (70 runs sampled)
a.subtract(b) x 101,471 ops/sec ±9.76% (67 runs sampled)
a.scale(Math.random()) x 98,315 ops/sec ±18.46% (62 runs sampled)
a.normalize() x 90,807 ops/sec ±11.18% (68 runs sampled)
a.dot(b) x 675,131 ops/sec ±0.64% (95 runs sampled)
a.magnitude() x 780,969 ops/sec ±4.75% (72 runs sampled)
a.angle(b) x 262,190 ops/sec ±2.46% (90 runs sampled)
a.project(b) x 82,436 ops/sec ±9.08% (70 runs sampled)

data = randomArray(128, 128)
a = Matrix(data)
b = Matrix(data).scale(2)

Matrix.identity(128) x 9,410 ops/sec ±6.46% (77 runs sampled)
Matrix.magic(128) x 2,113 ops/sec ±6.80% (81 runs sampled)
Matrix.zeros(128, 128) x 9,431 ops/sec ±6.51% (80 runs sampled)
Matrix.ones(128, 128) x 9,533 ops/sec ±6.19% (83 runs sampled)
Matrix.augment(a, b) x 3,324 ops/sec ±6.00% (80 runs sampled)
a.add(b) x 9,160 ops/sec ±6.62% (79 runs sampled)
a.subtract(b) x 9,350 ops/sec ±6.23% (85 runs sampled)
a.scale(Math.random()) x 9,605 ops/sec ±6.50% (80 runs sampled)
a.multiply(b) x 207 ops/sec ±1.00% (88 runs sampled)
a.transpose() x 7,366 ops/sec ±4.43% (83 runs sampled)
a.gauss() x 103 ops/sec ±2.37% (54 runs sampled)
a.diag() x 513,075 ops/sec ±7.01% (60 runs sampled)
a.trace() x 412,940 ops/sec ±7.39% (68 runs sampled)
```

#### [4.0.0](https://github.com/mateogianolio/vectorious/releases/tag/4.0.0)

```
$ npm run benchmark

> vectorious@4.0.0 benchmark /Users/mg/Projects/javascript/vectorious
> node ./benchmarks/vector.js && node ./benchmarks/matrix.js

data = randomArray(1024)
a = Vector.ones(data)
b = Vector.ones(data).scale(2)

Vector.zeros(1024) x 161,656 ops/sec ±3.32% (72 runs sampled)
Vector.ones(1024) x 166,243 ops/sec ±1.44% (78 runs sampled)
Vector.range(0, 1024) x 53,888 ops/sec ±2.03% (87 runs sampled)
Vector.combine(a, b) x 37,548 ops/sec ±7.38% (74 runs sampled)
a.add(b) x 4,090,967 ops/sec ±0.63% (92 runs sampled)
a.subtract(b) x 4,134,503 ops/sec ±0.64% (97 runs sampled)
a.scale(Math.random()) x 5,278,867 ops/sec ±0.57% (98 runs sampled)
a.normalize() x 3,869,698 ops/sec ±0.68% (92 runs sampled)
a.dot(b) x 4,719,152 ops/sec ±0.72% (93 runs sampled)
a.magnitude() x 10,948,655 ops/sec ±1.05% (88 runs sampled)
a.angle(b) x 905,799 ops/sec ±0.62% (91 runs sampled)
a.project(b) x 1,779,760 ops/sec ±0.63% (88 runs sampled)

data = randomArray(128, 128)
a = Matrix(data)
b = Matrix(data).scale(2)

Matrix.identity(128) x 9,497 ops/sec ±4.29% (83 runs sampled)
Matrix.magic(128) x 2,231 ops/sec ±5.14% (82 runs sampled)
Matrix.zeros(128, 128) x 9,410 ops/sec ±4.43% (78 runs sampled)
Matrix.ones(128, 128) x 9,531 ops/sec ±4.40% (82 runs sampled)
Matrix.augment(a, b) x 3,322 ops/sec ±4.88% (82 runs sampled)
a.add(b) x 151,391 ops/sec ±0.63% (91 runs sampled)
a.subtract(b) x 150,457 ops/sec ±0.70% (91 runs sampled)
a.scale(Math.random()) x 207,431 ops/sec ±0.56% (94 runs sampled)
a.multiply(b) x 5,651 ops/sec ±6.17% (83 runs sampled)
a.transpose() x 42,127 ops/sec ±1.03% (96 runs sampled)
a.gauss() x 6,127 ops/sec ±5.61% (77 runs sampled)
a.diag() x 533,722 ops/sec ±1.44% (65 runs sampled)
a.trace() x 426,450 ops/sec ±4.11% (64 runs sampled)
```
