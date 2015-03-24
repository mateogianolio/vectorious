# Vectorious

Vectorious is a generalized n-dimensional matrix and vector library written in JavaScript, which can be used both in node.js and the browser.

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

vector = new vectorious.Vector().zeros(2);
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

```javascript
// (Matrix, Matrix) => (Matrix)
Matrix.prototype.subtract = function(matrix)
```

```javascript
// (Matrix, Number) => (Matrix)
Matrix.prototype.scale = function(scalar)
```

```javascript
// (Matrix, Matrix) => (Matrix)
Matrix.prototype.multiply = function(matrix)
```

```javascript
// (Matrix) => (Matrix)
Matrix.prototype.transpose = function()
```

```javascript
// (Matrix) => (Matrix)
Matrix.prototype.gauss = function()
```

```javascript
// (Matrix) => (Vector)
Matrix.prototype.diag = function()
```

```javascript
// (Matrix) => (Number)
Matrix.prototype.trace = function()
```

```javascript
// (Matrix, Number) => (Matrix)
Matrix.prototype.identity = function(size)
```

```javascript
// (Matrix, Number, Number) => (Matrix)
Matrix.prototype.zeros = function(i, j)
```

```javascript
// (Matrix, Number, Number) => (Matrix)
Matrix.prototype.ones = function(i, j)
```

```javascript
// (Matrix, Number, Number) => (Number)
Matrix.prototype.get = function(i, j)
```

```javascript
// (Matrix, Number, Number, Number) => (Matrix)
Matrix.prototype.set = function(i, j, value)
```

```javascript
// (Matrix) => (String)
Matrix.prototype.toString = function()
```

## Vector

The following vector operations and methods are implemented in ```vector.js```.

```javascript
// (Vector, Vector) => (Vector)
Vector.prototype.add = function(vector)
```

```javascript
// (Vector, Vector) => (Vector)
Vector.prototype.subtract = function(vector)
```

```javascript
// (Vector, Number) => (Vector)
Vector.prototype.scale = function(scalar)
```

```javascript
// (Vector) => (Vector)
Vector.prototype.normalize = function()
```

```javascript
// (Vector, Vector) => (Number)
Vector.prototype.dot = function(vector)
```

```javascript
// (Vector) => (Number)
Vector.prototype.magnitude = function()
```

```javascript
// (Vector, Vector) => (Angle)
Vector.prototype.angle = function(vector)
```

```javascript
// (Vector, Number) => (Vector)
Vector.prototype.zeros = function(count)
```

```javascript
// (Vector, Number) => (Vector)
Vector.prototype.ones = function(count)
```

```javascript
// (Vector, Vector) => (Boolean)
Vector.prototype.equals = function(vector)
```

```javascript
// (Vector, Number) => (Number)
Vector.prototype.get = function(index)
```

```javascript
// (Vector, Number, Number) => (Vector)
Vector.prototype.set = function(index, value)
```

```javascript
// (Vector) => (String)
Vector.prototype.toString = function()
```