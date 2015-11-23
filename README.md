# Vectorious

![npm version](https://img.shields.io/npm/v/vectorious.svg?style=flat-square) ![npm downloads](https://img.shields.io/npm/dm/vectorious.svg?style=flat-square) ![travis](https://img.shields.io/travis/mateogianolio/vectorious.svg?style=flat-square)

Vectorious is a high performance linear algebra library written in Javascript, which can be used both in node.js and the browser.

* [Installation](#installation-)
    * [For the browser](#for-the-browser-)
* [Extensions](#extensions-)
* [Usage](#usage-)
* [Vector](#vector-)
* [Matrix](#matrix-)
* [Benchmarks](#benchmarks-)
    * [2.0.0](#200)
    * [2.1.0](#210)
    * [2.2.0](#220)


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
<script src="vectorious-2.x.x.js"></script>
<script>
  // e.g. var vector = new vectorious.Vector()
</script>
```

## [&uarr;](#vectorious) Extensions

* [**Solve**](https://github.com/mateogianolio/vectorious-solve) &mdash; *Solves matrix equations of the form Ax = B.*
* [**Plot**](https://github.com/mateogianolio/vectorious-plot) &mdash; *Generates a two-dimensional SVG plot from two input vectors.*

## [&uarr;](#vectorious) Usage

The constructors of both ```Matrix``` and ```Vector``` are designed to be flexible, so they can be initialized using several different arguments.

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

## [&uarr;](#vectorious) Vector

The following vector operations and methods are implemented in ```vector.js```.

* [```add```](#user-content-vector_add)
* [```subtract```](#user-content-vector_subtract)
* [```scale```](#user-content-vector_scale)
* [```normalize```](#user-content-vector_normalize)
* [```dot```](#user-content-vector_dot)
* [```magnitude```](#user-content-vector_magnitude)
* [```angle```](#user-content-vector_angle)
* [```project```](#user-content-vector_project)
* [```zeros```](#user-content-vector_zeros)
* [```ones```](#user-content-vector_ones)
* [```range```](#user-content-vector_range)
* [```equals```](#user-content-vector_equals)
* [```get```](#user-content-vector_get)
* [```min```](#user-content-vector_min)
* [```max```](#user-content-vector_max)
* [```set```](#user-content-vector_set)
* [```combine```](#user-content-vector_combine)
* [```push```](#user-content-vector_push)
* [```map```](#user-content-vector_map)
* [```each```](#user-content-vector_each)
* [```toString```](#user-content-vector_toString)
* [```toArray```](#user-content-vector_toArray)

<p id="vector_add"></p>

```javascript
// (Vector, Vector) => (Vector)
Vector.add = function(a, b)
Vector.prototype.add = function(vector)
```

Add two vectors together.

<p id="vector_subtract"></p>

```javascript
// (Vector, Vector) => (Vector)
Vector.subtract = function(a, b)
Vector.prototype.subtract = function(vector)
```

Subtract two vectors.

<p id="vector_scale"></p>

```javascript
// (Vector, Number) => (Vector)
Vector.prototype.scale = function(scalar)
```

Multiply a vector by a [scalar](http://en.wikipedia.org/wiki/Scalar_multiplication).

<p id="vector_normalize"></p>

```javascript
// (Vector) => (Vector)
Vector.prototype.normalize = function()
```

[Normalize](http://en.wikipedia.org/wiki/Unit_vector) a vector.

<p id="vector_dot"></p>

```javascript
// (Vector, Vector) => (Number)
Vector.dot = function(a, b)
Vector.prototype.dot = function(vector)
```

Get [dot product](http://en.wikipedia.org/wiki/Dot_product) of two vectors.

<p id="vector_magnitude"></p>

```javascript
// (Vector) => (Number)
Vector.prototype.magnitude = function()
```

Get [magnitude (norm)](http://en.wikipedia.org/wiki/Norm_(mathematics)#Euclidean_norm) of vector.

<p id="vector_angle"></p>

```javascript
// (Vector, Vector) => (Angle)
Vector.angle = function(a, b)
Vector.prototype.angle = function(vector)
```

Get the angle (in radians) between two vectors.

<p id="vector_project"></p>

```javascript
// (Vector, Vector) => (Vector)
Vector.project = function(a, b)
Vector.prototype.project = function(vector)
```

[Project](http://en.wikipedia.org/wiki/Vector_projection) a vector onto another vector.

<p id="vector_zeros"></p>

```javascript
// (Number) => (Vector)
Vector.zeros = function(count, [type])
```

Create a vector of ```count``` zeros. ```type``` is optional and specifies the type of ```TypedArray``` used in computations.

<p id="vector_ones"></p>

```javascript
// (Number) => (Vector)
Vector.ones = function(count, [type])
```

Create a vector of ```count``` ones. ```type``` is optional and specifies the type of ```TypedArray``` used in computations.

<p id="vector_range"></p>

```javascript
// (Number, [Number], Number) => (Vector)
Vector.range = function(start, [step], end, [type])
```

Create a vector containing the range from ```start``` to ```end``` in steps of ```step``` (optional). ```type``` is optional and specifies the type of ```TypedArray``` used in computations.

<p id="vector_equals"></p>

```javascript
// (Vector, Vector) => (Boolean)
Vector.equals = function(a, b)
Vector.prototype.equals = function(vector)
```

Compare two vectors.

<p id="vector_get"></p>

```javascript
// (Vector, Number) => (Number)
Vector.prototype.get = function(index)
```

Get value of an element at ```index```.

<p id="vector_min"></p>

```javascript
// (Vector) => (Number)
Vector.prototype.min = function()
```

Get the minimum value of a vector.

<p id="vector_max"></p>

```javascript
// (Vector) => (Number)
Vector.prototype.max = function()
```

Get the maximum value of a vector.

<p id="vector_set"></p>

```javascript
// (Vector, Number, Number) => (Vector)
Vector.prototype.set = function(index, value)
```

Set value of an element at ```index```.

<p id="vector_combine"></p>

```javascript
// (Vector, Vector) => (Vector)
Vector.combine = function(a, b)
Vector.prototype.combine = function(vector)
```

Combines two vectors.

<p id="vector_push"></p>

```javascript
// (Vector, Number) => (Vector)
Vector.prototype.push = function(value)
```

Pushes ```value``` into the vector.

<p id="vector_map"></p>

```javascript
// (Vector, Function) => (Vector)
Vector.prototype.map = function(callback)
```

Maps a function ```callback``` to all elements of the vector.

<p id="vector_each"></p>

```javascript
// (Vector, Function) => (Vector)
Vector.prototype.each = function(callback)
```

Calls ```callback(value, index)``` for each element in the vector.

<p id="vector_toString"></p>

```javascript
// (Vector) => (String)
Vector.prototype.toString = function()
```

Convert vector to string.

<p id="vector_toArray"></p>

```javascript
// (Vector) => (Array)
Vector.prototype.toArray = function()
```

Convert vector to array.

## [&uarr;](#vectorious) Matrix

The following matrix operations and methods are implemented in ```matrix.js```.

* [```add```](#user-content-matrix_add)
* [```subtract```](#user-content-matrix_subtract)
* [```scale```](#user-content-matrix_scale)
* [```multiply```](#user-content-matrix_multiply)
* [```transpose```](#user-content-matrix_transpose)
* [```inverse```](#user-content-matrix_inverse)
* [```gauss```](#user-content-matrix_gauss)
* [```pivotize```](#user-content-matrix_pivotize)
* [```lu```](#user-content-matrix_lu)
* [```diag```](#user-content-matrix_diag)
* [```augment```](#user-content-matrix_augment)
* [```trace```](#user-content-matrix_trace)
* [```determinant```](#user-content-matrix_determinant)
* [```identity```](#user-content-matrix_identity)
* [```magic```](#user-content-matrix_magic)
* [```zeros```](#user-content-matrix_zeros)
* [```ones```](#user-content-matrix_ones)
* [```equals```](#user-content-matrix_equals)
* [```get```](#user-content-matrix_get)
* [```set```](#user-content-matrix_set)
* [```swap```](#user-content-matrix_swap)
* [```map```](#user-content-matrix_map)
* [```each```](#user-content-matrix_each)
* [```toString```](#user-content-matrix_toString)
* [```toArray```](#user-content-matrix_toArray)

<p id="matrix_add"></p>

```javascript
// (Matrix, Matrix) => (Matrix)
Matrix.add = function(a, b)
Matrix.prototype.add = function(matrix)
```

[Add](http://en.wikipedia.org/wiki/Matrix_addition) two matrices together.

<p id="matrix_subtract"></p>

```javascript
// (Matrix, Matrix) => (Matrix)
Matrix.subtract = function(a, b)
Matrix.prototype.subtract = function(matrix)
```

Subtract two matrices.

<p id="matrix_scale"></p>

```javascript
// (Matrix, Number) => (Matrix)
Matrix.prototype.scale = function(scalar)
```

Multiply all elements in matrix with a [scalar](http://en.wikipedia.org/wiki/Matrix_multiplication#Scalar_multiplication).

<p id="matrix_multiply"></p>

```javascript
// (Matrix, Matrix) => (Matrix)
Matrix.multiply = function(a, b)
Matrix.prototype.multiply = function(matrix)
```

[Multiply](http://en.wikipedia.org/wiki/Matrix_multiplication#Matrix_product_.28two_matrices.29) two matrices together.

<p id="matrix_transpose"></p>

```javascript
// (Matrix) => (Matrix)
Matrix.prototype.transpose = function()
```

[Transpose](http://en.wikipedia.org/wiki/Transpose) a matrix.

<p id="matrix_gauss"></p>

```javascript
// (Matrix, Boolean) => (Matrix)
Matrix.prototype.gauss = function()
```

Convert a matrix to [reduced row echelon (RREF)](http://en.wikipedia.org/wiki/Row_echelon_form#Reduced_row_echelon_form) form using [Gauss-Jordan eliminiation](http://en.wikipedia.org/wiki/Gaussian_elimination).

<p id="matrix_pivotize"></p>

```javascript
// (Matrix) => ([Matrix, Number])
Matrix.prototype.pivotize = function()
```

Get the pivot permutation matrix ```P``` and corresponding determinant ```sign``` in the form of the array ```[P, sign]``` (used in [LU factorization](http://en.wikipedia.org/wiki/LU_decomposition)).

<p id="matrix_lu"></p>

```javascript
// (Matrix) => ([Matrix, Matrix, [Matrix, Number]])
Matrix.prototype.lu = function()
```

Get the [LU factorization](http://en.wikipedia.org/wiki/LU_decomposition) of a matrix in the form of the array  ```[L, U, P]```, where ```P``` is the return value of [```pivotize()```](#user-content-matrix_pivotize).

<p id="matrix_inverse"></p>

```javascript
// (Matrix) => (Matrix)
Matrix.prototype.inverse = function()
```

Get the [inverse](http://en.wikipedia.org/wiki/Invertible_matrix) of any invertible square matrix using [Gauss-Jordan elimination](http://en.wikipedia.org/wiki/Gaussian_elimination#Finding_the_inverse_of_a_matrix).

<p id="matrix_diag"></p>

```javascript
// (Matrix) => (Vector)
Matrix.prototype.diag = function()
```

Get [matrix diagonal](http://en.wikipedia.org/wiki/Main_diagonal) as a ```Vector```.

<p id="matrix_augment"></p>

```javascript
// (Matrix, Matrix) => (Matrix)
Matrix.augment = function(a, b)
Matrix.prototype.augment = function(matrix)
```

Create an [augmented matrix](http://en.wikipedia.org/wiki/Augmented_matrix).

<p id="matrix_trace"></p>

```javascript
// (Matrix) => (Number)
Matrix.prototype.trace = function()
```

Get [matrix trace](http://en.wikipedia.org/wiki/Trace_(linear_algebra)) (the sum of the diagonal).

<p id="matrix_determinant"></p>

```javascript
// (Matrix) => (Number)
Matrix.prototype.determinant = function()
```

Get [matrix determinant](http://en.wikipedia.org/wiki/Determinant) (*note:* inefficient for large matrices).

<p id="matrix_identity"></p>

```javascript
// (Number) => (Matrix)
Matrix.identity = function(size, [type])
```

Create a ```size x size``` [identity matrix](http://en.wikipedia.org/wiki/Identity_matrix). ```type``` is optional and specifies the type of ```TypedArray``` used in computations.

<p id="matrix_magic"></p>

```javascript
// (Number) => (Matrix)
Matrix.magic = function(size, [type])
```

Create a ```size x size``` [magic square matrix](http://en.wikipedia.org/wiki/Magic_square). ```type``` is optional and specifies the type of ```TypedArray``` used in computations.

<p id="matrix_zeros"></p>

```javascript
// (Number, Number) => (Matrix)
Matrix.zeros = function(i, j, [type])
```

Create an ```i x j``` matrix of zeros. ```type``` is optional and specifies the type of ```TypedArray``` used in computations.

<p id="matrix_ones"></p>

```javascript
// (Number, Number) => (Matrix)
Matrix.ones = function(i, j, [type])
```

Create an ```i x j``` matrix of ones. ```type``` is optional and specifies the type of ```TypedArray``` used in computations.

<p id="matrix_equals"></p>

```javascript
// (Matrix, Matrix) => (Boolean)
Matrix.equals = function(a, b)
Matrix.prototype.equals = function(matrix)
```

Compare two matrices.

<p id="matrix_get"></p>

```javascript
// (Matrix, Number, Number) => (Number)
Matrix.prototype.get = function(i, j)
```

Get element at row ```i```, column ```j```.

<p id="matrix_set"></p>

```javascript
// (Matrix, Number, Number, Number) => (Matrix)
Matrix.prototype.set = function(i, j, value)
```

Set the value of an element at row ```i```, column ```j```.

<p id="matrix_swap"></p>

```javascript
// (Matrix, Number, Number) => (Matrix)
Matrix.prototype.swap = function(i, j)
```

Swaps the position of rows ```i``` and ```j```.

<p id="matrix_map"></p>

```javascript
// (Matrix, Function) => (Matrix)
Matrix.prototype.map = function(callback)
```

Maps a function ```callback``` to all elements of the matrix.

<p id="matrix_each"></p>

```javascript
// (Matrix, Function) => (Matrix)
Matrix.prototype.each = function(callback)
```

Calls ```callback(row, index)``` for each row in the matrix.

<p id="matrix_toString"></p>

```javascript
// (Matrix) => (String)
Matrix.prototype.toString = function()
```

Convert matrix to string.

<p id="matrix_toArray"></p>

```javascript
// (Matrix) => (Array)
Matrix.prototype.toArray = function()
```

Convert matrix to array.

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
