# Vectorious

Vectorious is a generalized n-dimensional matrix and vector library written in JavaScript, which can be used both in node.js and the browser.

Clone or install with

```bash
$ npm install vectorious
```

## Usage

The constructors of both ```Matrix``` and ```Vector``` are designed to be flexible, so they can be initialized using several different arguments.

```javascript
var vectorious = require('vectorious');

var vector,
    matrix;

vector = new vectorious.Vector();
// { values: [], length: 0 }

matrix = new vectorious.Matrix();
// { rows: [] }

vector = new vectorious.Vector().zeros(5);
// { values: [0, 0, 0, 0, 0], length: 5 }

vector = new vectorious.Vector(1, 2, 3, 4, 5);
// { values: [1, 2, 3, 4, 5], length: 5 }

matrix = new vectorious.Matrix(vector);
// { rows: [ { values: [1, 2, 3, 4, 5], length: 5 } ] }

matrix = new vectorious.Matrix().zeros(2, 2);
/* {
  rows: [
    { values: [0, 0], length: 2 },
    { values: [0, 0], length: 2 }
  ]
} */

var input = [
  [1, 2],
  [3, 4]
];

matrix = new vectorious.Matrix(input);
/* {
  rows: [
    { values: [1, 2], length: 2 },
    { values: [3, 4], length: 2 }
  ]
} */
```

## Matrix

The following matrix operations and methods are implemented in ```matrix.js```.

```javascript
// (Matrix, Matrix) => (Matrix)
Matrix.prototype.add = function(matrix)
```

Add two matrices together.

```javascript
// (Matrix, Matrix) => (Matrix)
Matrix.prototype.subtract = function(matrix)
```

Subtract two matrices.

```javascript
// (Matrix, Number) => (Matrix)
Matrix.prototype.scale = function(scalar)
```

Multiply all elements in matrix with a scalar.

```javascript
// (Matrix, Matrix) => (Matrix)
Matrix.prototype.multiply = function(matrix)
```

Multiply two matrices together.

```javascript
// (Matrix) => (Matrix)
Matrix.prototype.transpose = function()
```

Transpose a matrix.

```javascript
// (Matrix, Boolean) => (Matrix)
Matrix.prototype.gauss = function(reduce)
```

Convert a matrix to (reduced) row echelon form.

```javascript
// (Matrix) => (Vector)
Matrix.prototype.diag = function()
```

Get matrix diagonal as a ```Vector```.

```javascript
// (Matrix, Matrix) => (Matrix)
Matrix.prototype.augment = function(matrix)
```

Create an augmented matrix.

```javascript
// (Matrix) => (Number)
Matrix.prototype.trace = function()
```

Get matrix trace (the sum of the diagonal).

```javascript
// (Matrix, Number) => (Matrix)
Matrix.prototype.identity = function(size)
```

Create an identity matrix.

```javascript
// (Matrix, Number, Number) => (Matrix)
Matrix.prototype.zeros = function(i, j)
```

Create an ```i x j``` matrix of zeros.

```javascript
// (Matrix, Number, Number) => (Matrix)
Matrix.prototype.ones = function(i, j)
```

Create an ```i x j``` matrix of ones.

```javascript
// (Matrix, Matrix) => (Boolean)
Matrix.prototype.equals = function(matrix)
```

Compare two matrices.

```javascript
// (Matrix, Number, Number) => (Number)
Matrix.prototype.get = function(i, j)
```

Get element at row ```i```, column ```j```.

```javascript
// (Matrix, Number, Number, Number) => (Matrix)
Matrix.prototype.set = function(i, j, value)
```

Set the value of an element at row ```i```, column ```j```.

```javascript
// (Matrix, Number, Number) => (Matrix)
Matrix.prototype.swap = function(i, j)
```

Swaps the position of rows ```i``` and ```j```.

```javascript
// (Matrix) => (String)
Matrix.prototype.toString = function()
```

Convert matrix to string.

## Vector

The following vector operations and methods are implemented in ```vector.js```.

```javascript
// (Vector, Vector) => (Vector)
Vector.prototype.add = function(vector)
```

Add two vectors together.

```javascript
// (Vector, Vector) => (Vector)
Vector.prototype.subtract = function(vector)
```

Subtract two vectors.

```javascript
// (Vector, Number) => (Vector)
Vector.prototype.scale = function(scalar)
```

Multiply a vector by a scalar.

```javascript
// (Vector) => (Vector)
Vector.prototype.normalize = function()
```

Normalize a vector.

```javascript
// (Vector, Vector) => (Number)
Vector.prototype.dot = function(vector)
```

Get dot product of two vectors.

```javascript
// (Vector) => (Number)
Vector.prototype.magnitude = function()
```

Get magnitude of vector (Pythagoras).

```javascript
// (Vector, Vector) => (Angle)
Vector.prototype.angle = function(vector)
```

Get the angle (in radians) between two vectors.

```javascript
// (Vector, Number) => (Vector)
Vector.prototype.zeros = function(count)
```

Create a vector of ```count``` zeros.

```javascript
// (Vector, Number) => (Vector)
Vector.prototype.ones = function(count)
```

Create a vector of ```count``` ones.

```javascript
// (Vector, Vector) => (Boolean)
Vector.prototype.equals = function(vector)
```

Compare two vectors.

```javascript
// (Vector, Number) => (Number)
Vector.prototype.get = function(index)
```

Get value of an element at ```index```.

```javascript
// (Vector, Number, Number) => (Vector)
Vector.prototype.set = function(index, value)
```

Set value of an element at ```index```.

```javascript
// (Vector) => (String)
Vector.prototype.toString = function()
```

Convert vector to string.

## Todo

* Add testing suite
* Add more useful operations :)

## Contribute

Feel free to fork and commit pull requests. If you have any problems just submit an issue or send me an email.