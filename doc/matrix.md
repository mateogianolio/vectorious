# Matrix

Creates a `Matrix` from the supplied arguments.
```javascript
$ node
> var v = require('vectorious');

> new v.Matrix([[1, 2], [3, 4]]]);
Matrix {
  shape: [ 2, 2 ],
  data: Float64Array { '0': 1, '1': 2, '2': 3, '3': 4 },
  type: [Function: Float64Array] }

> new v.Matrix(new Float32Array([1, 2, 3, 4]), { shape: [2, 2] });
Matrix {
  shape: [ 2, 2 ],
  data: Float32Array { '0': 1, '1': 2, '2': 3, '3': 4 },
  type: [Function: Float32Array] }

> new v.Matrix(new v.Vector(1, 2));
Matrix {
  shape: [ 2, 1 ],
  data: Float64Array { '0': 1, '1': 2 },
  type: [Function: Float64Array] }
```



* * *

### Matrix.constructor() 

Creates a `Matrix` from the supplied arguments.



### Matrix.add(a, b) 

Static method. Adds two matrices `a` and `b` together.

**Parameters**

**a**: `Matrix`, -

**b**: `Matrix`, -

**Returns**: `Matrix`, a new matrix containing the sum of `a` and `b`


### Matrix.add(a, b) 

Adds `matrix` to current matrix.

**Parameters**

**a**: `Matrix`, -

**b**: `Matrix`, -

**Returns**: `Matrix`, `this`


### Matrix.subtract(a, b) 

Static method. Subtracts the matrix `b` from matrix `a`.

**Parameters**

**a**: `Matrix`, -

**b**: `Matrix`, -

**Returns**: `Matrix`, a new matrix containing the difference between `a` and `b`


### Matrix.subtract(a, b) 

Subtracts `matrix` from current matrix.

**Parameters**

**a**: `Matrix`, -

**b**: `Matrix`, -

**Returns**: `Matrix`, `this`


### Matrix.scale(a, scalar) 

Static method. Multiplies all elements of a matrix `a` with a specified `scalar`.

**Parameters**

**a**: `Matrix`, -

**scalar**: `Number`, -

**Returns**: `Matrix`, a new scaled matrix


### Matrix.scale(scalar) 

Multiplies all elements of current matrix with a specified `scalar`.

**Parameters**

**scalar**: `Number`, -

**Returns**: `Matrix`, `this`


### Matrix.zeros(i, j, type) 

Static method. Creates an `i x j` matrix containing zeros (`0`), takes an
optional `type` argument which should be an instance of `TypedArray`.

**Parameters**

**i**: `Number`, -

**j**: `Number`, -

**type**: `TypedArray`, -

**Returns**: `Matrix`, a matrix of the specified dimensions and `type`


### Matrix.ones(i, j, type) 

Static method. Creates an `i x j` matrix containing ones (`1`), takes an
optional `type` argument which should be an instance of `TypedArray`.

**Parameters**

**i**: `Number`, -

**j**: `Number`, -

**type**: `TypedArray`, -

**Returns**: `Matrix`, a matrix of the specified dimensions and `type`


### Matrix.multiply(a, b) 

Static method. Multiplies two matrices `a` and `b` of matching dimensions.

**Parameters**

**a**: `Matrix`, -

**b**: `Matrix`, -

**Returns**: `Matrix`, a new resultant matrix containing the matrix product of `a` and `b`


### Matrix.multiply(a, b) 

Multiplies current matrix with `matrix`.

**Parameters**

**a**: `Matrix`, -

**b**: `Matrix`, -

**Returns**: `Matrix`, a new resultant matrix containing the matrix product of `a` and `b`


### Matrix.transpose() 

Transposes a matrix (mirror across the diagonal).

**Returns**: `Matrix`, a new resultant transposed matrix


### Matrix.inverse() 

Determines the inverse of any invertible square matrix using
Gaussian elimination.

**Returns**: `Matrix`, the inverse of the matrix


### Matrix.gauss() 

Performs Gaussian elimination on a matrix.

**Returns**: `Matrix`, the matrix in reduced row echelon form


### Matrix.pivotize() 

Pivots a matrix until elements are in upper triangular form

**Returns**: `Array`, a tuple of the resultant pivotized matrix and its sign
(used in LU factorization).


### Matrix.lu() 

Performs LU factorization on a matrix.

**Returns**: `Array`, a triple (3-tuple) of the lower triangular resultant matrix `L`, the upper
triangular resultant matrix `U` and the pivot matrix `P`


### Matrix.augment(a, b) 

Static method. Augments two matrices `a` and `b` of matching dimensions
(appends `b` to `a`).

**Parameters**

**a**: `Matrix`, -

**b**: `Matrix`, -

**Returns**: `Matrix`, the resultant matrix of `b` appended to `a`


### Matrix.augment(matrix) 

Augments `matrix` with current matrix.

**Parameters**

**matrix**: `Matrix`, -

**Returns**: `Matrix`, `this`


### Matrix.identity(size, type) 

Static method. Creates an identity matrix of `size`, takes an optional `type` argument
which should be an instance of `TypedArray`.

**Parameters**

**size**: `Number`, -

**type**: `TypedArray`, -

**Returns**: `Matrix`, an identity matrix of the specified `size` and `type`


### Matrix.magic(size, type) 

Static method. Creates a magic square matrix of `size`, takes an optional `type` argument
which should be an instance of `TypedArray`.

**Parameters**

**size**: `Number`, -

**type**: `Number`, -

**Returns**: `Matrix`, a magic square matrix of the specified `size` and `type`


### Matrix.diag() 

Gets the diagonal of a matrix.

**Returns**: `Vector`, the diagonal of the matrix as a vector


### Matrix.determinant() 

Gets the determinant of any square matrix using LU factorization.

**Returns**: `Number`, the determinant of the matrix


### Matrix.trace() 

Gets the trace of the matrix (the sum of all diagonal elements).

**Returns**: `Number`, the trace of the matrix


### Matrix.equals(a, b) 

Static method. Checks the equality of two matrices `a` and `b`.

**Parameters**

**a**: `Matrix`, -

**b**: `Matrix`, -

**Returns**: `Boolean`, `true` if equal, `false` otherwise


### Matrix.equals(matrix) 

Checks the equality of `matrix` and current matrix.

**Parameters**

**matrix**: `Matrix`, -

**Returns**: `Boolean`, `true` if equal, `false` otherwise


### Matrix.get(i, j) 

Gets the value of the element in row `i`, column `j` of current matrix

**Parameters**

**i**: `Number`, -

**j**: `Number`, -

**Returns**: `Number`, the element at row `i`, column `j` of current matrix


### Matrix.set(i, j, value) 

Sets the element at row `i`, column `j` to value

**Parameters**

**i**: `Number`, -

**j**: `Number`, -

**value**: `Number`, -

**Returns**: `Matrix`, `this`


### Matrix.swap(i, j) 

Swaps two rows `i` and `j` in a matrix

**Parameters**

**i**: `Number`, -

**j**: `Number`, -

**Returns**: `Matrix`, `this`


### Matrix.map(callback) 

Maps a function `callback` to all elements of a copy of current matrix.

**Parameters**

**callback**: `function`, -

**Returns**: `Matrix`, the resultant mapped matrix


### Matrix.each(callback) 

Functional version of for-looping the rows in a matrix, is
equivalent to `Array.prototype.forEach`.

**Parameters**

**callback**: `function`, -

**Returns**: `Matrix`, `this`


### Matrix.toString() 

Converts current matrix into a readable formatted string

**Returns**: `String`, a string of the matrix' contents


### Matrix.toArray() 

Converts current matrix into a two-dimensional array

**Returns**: `Array`, an array of the matrix' contents



* * *










