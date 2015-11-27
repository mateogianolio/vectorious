# Vector

Creates a `Vector` from the supplied arguments.
```javascript
$ node
> var v = require('vectorious');

> new v.Vector(1, 2, 3);
Vector {
  type: [Function: Float64Array],
  length: 3,
  buffer: ArrayBuffer {},
  values: Float64Array { '0': 1, '1': 2, '2': 3 } }

> new v.Vector(Float32Array, 1, 2, 3);
Vector {
  type: [Function: Float32Array],
  length: 3,
  buffer: ArrayBuffer {},
  values: Float32Array { '0': 1, '1': 2, '2': 3 } }

> new v.Vector([1, 2, 3]);
Vector {
  type: [Function: Float64Array],
  length: 3,
  buffer: ArrayBuffer {},
  values: Float64Array { '0': 1, '1': 2, '2': 3 } }
```



* * *

### Vector.constructor() 

Creates a two-dimensional `Vector` from the supplied arguments.



### Vector.add(a, b) 

Static method. Adds two vectors `a` and `b` together.

**Parameters**

**a**: `Vector`, -

**b**: `Vector`, -

**Returns**: `Vector`, a vector containing the sum of `a` and `b`


### Vector.add(vector) 

Adds `vector` to the current vector.

**Parameters**

**vector**: `Vector`, -

**Returns**: `Vector`, this


### Vector.subtract(a, b) 

Static method. Subtracts the vector `b` from vector `a`.

**Parameters**

**a**: `Vector`, -

**b**: `Vector`, -

**Returns**: `Vector`, a vector containing the difference between `a` and `b`


### Vector.subtract(vector) 

Subtracts `vector` from the current vector.

**Parameters**

**vector**: `Vector`, -

**Returns**: `Vector`, this


### Vector.scale(vector, scalar) 

Static method. Multiplies all elements of `vector` with a specified `scalar`.

**Parameters**

**vector**: `Vector`, -

**scalar**: `Number`, -

**Returns**: `Vector`, a resultant scaled vector


### Vector.scale(scalar) 

Multiplies all elements of current vector with a specified `scalar`.

**Parameters**

**scalar**: `Number`, -

**Returns**: `Vector`, this


### Vector.normalize(vector) 

Static method. Normalizes `vector`, i.e. divides all elements with the magnitude.

**Parameters**

**vector**: `Vector`, -

**Returns**: `Vector`, a resultant normalized vector


### Vector.normalize() 

Normalizes current vector.

**Returns**: `Vector`, a resultant normalized vector


### Vector.project(a, b) 

Static method. Projects the vector `a` onto the vector `b` using
the projection formula `(b * (a * b / b * b))`.

**Parameters**

**a**: `Vector`, -

**b**: `Vector`, -

**Returns**: `Vector`, a new resultant projected vector


### Vector.project(vector) 

Projects the current vector onto `vector` using
the projection formula `(b * (a * b / b * b))`.

**Parameters**

**vector**: `Vector`, -

**Returns**: `Vector`, `vector`


### Vector.zeros(count, type) 

Static method. Creates a vector containing zeros (`0`) of `count` size, takes
an optional `type` argument which should be an instance of `TypedArray`.

**Parameters**

**count**: `Number`, -

**type**: `TypedArray`, -

**Returns**: `Vector`, a new vector of the specified size and `type`


### Vector.ones(count, type) 

Static method. Creates a vector containing ones (`1`) of `count` size, takes
an optional `type` argument which should be an instance of `TypedArray`.

**Parameters**

**count**: `Number`, -

**type**: `TypedArray`, -

**Returns**: `Vector`, a new vector of the specified size and `type`


### Vector.range(start, step, end) 

Static method. Creates a vector containing a range (can be either ascending or descending)
of numbers specified by the arguments provided (e.g. `Vector.range(0, .5, 2)`
gives a vector containing all numbers in the interval `[0, 2)` separated by
steps of `0.5`), takes an optional `type` argument which should be an instance of
`TypedArray`.

**Parameters**

**start**: `Number`, -

**step**: `Number`, optional

**end**: `Number`, -

**Returns**: `Vector`, a new vector containing the specified range of the specified `type`


### Vector.dot(a, b) 

Static method. Performs dot multiplication with two vectors `a` and `b`.

**Parameters**

**a**: `Vector`, -

**b**: `Vector`, -

**Returns**: `Number`, the dot product of the two vectors


### Vector.dot(vector) 

Performs dot multiplication with current vector and `vector`

**Parameters**

**vector**: `Vector`, -

**Returns**: `Number`, the dot product of the two vectors


### Vector.magnitude() 

Calculates the magnitude of a vector (also called L2 norm or Euclidean length).

**Returns**: `Number`, the magnitude (L2 norm) of the vector


### Vector.angle(a, b) 

Static method. Determines the angle between two vectors `a` and `b`.

**Parameters**

**a**: `Vector`, -

**b**: `Vector`, -

**Returns**: `Number`, the angle between the two vectors in radians


### Vector.angle(vector) 

Determines the angle between the current vector and `vector`.

**Parameters**

**vector**: `Vector`, -

**Returns**: `Number`, the angle between the two vectors in radians


### Vector.equals(a, b) 

Static method. Checks the equality of two vectors `a` and `b`.

**Parameters**

**a**: `Vector`, -

**b**: `Vector`, -

**Returns**: `Boolean`, `true` if the two vectors are equal, `false` otherwise


### Vector.equals(vector) 

Checks the equality of the current vector and `vector`.

**Parameters**

**vector**: `Vector`, -

**Returns**: `Boolean`, `true` if the two vectors are equal, `false` otherwise


### Vector.get(index) 

Gets the element at `index` from current vector.

**Parameters**

**index**: `Number`, -

**Returns**: `Number`, the element at `index`


### Vector.min() 

Gets the minimum value (smallest) element of current vector.

**Returns**: `Number`, the smallest element of the current vector


### Vector.max() 

Gets the maximum value (largest) element of current vector.

**Returns**: `Number`, the largest element of current vector


### Vector.set(index, value) 

Sets the element at `index` to `value`.

**Parameters**

**index**: `Number`, -

**value**: `Number`, -

**Returns**: `Vector`, this


### Vector.combine(a, b) 

Static method. Combines two vectors `a` and `b` (appends `b` to `a`).

**Parameters**

**a**: `Vector`, -

**b**: `Vector`, -

**Returns**: `Vector`, `b` appended to vector `a`


### Vector.combine(vector) 

Combines the current vector with `vector`

**Parameters**

**vector**: `Vector`, Combines the current vector with `vector`

**Returns**: `Vector`, `vector` combined with current vector


### Vector.push(value) 

Pushes a new `value` into current vector.

**Parameters**

**value**: `Number`, -

**Returns**: `Vector`, `this`


### Vector.map(callback) 

Maps a function `callback` to all elements of current vector.

**Parameters**

**callback**: `function`, -

**Returns**: `Vector`, `this`


### Vector.each(callback) 

Functional version of for-looping the vector, is equivalent
to `Array.prototype.forEach`.

**Parameters**

**callback**: `function`, -

**Returns**: `Vector`, `this`


### Vector.toString() 

Converts current vector into a readable formatted string.

**Returns**: `String`, a string of the vector's contents


### Vector.toArray() 

Converts current vector into a JavaScript array.

**Returns**: `Array`, an array containing all elements of current vector



* * *










