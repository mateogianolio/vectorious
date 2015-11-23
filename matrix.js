(function () {
  'use strict';

  var Vector = require('./vector.js');

  function Matrix (data, options) {
    var self = this;

    self.type = Float64Array;
    self.shape = [];

    if (typeof data === 'object' &&
        !(data instanceof Vector) &&
        Object.prototype.toString.call(data.buffer) === '[object ArrayBuffer]' &&
        options.shape) {
      if (data.length !== options.shape[0] * options.shape[1])
        throw "Shape does not match typed array dimensions.";

      self.shape = options.shape;
      self.data = data;
      self.type = data.constructor;

      return self;
    } else if (Object.prototype.toString.call(data) === '[object Array]') {
      return Matrix.fromArray(data);
    } else if (data instanceof Vector) {
      self.shape = options && options.shape ? options.shape : [data.length, 1];
      self.data = data.values;
      self.type = data.type;
    } else if (data instanceof Matrix) {
      // copy contructor
      self.shape = [data.shape[0], data.shape[1]];
      self.data = new data.type(data.data);
      self.type = data.type;

      return self;
    }

  }

  Matrix.fromTypedArray = function (data, shape) {
    var self = Object.create(Matrix.prototype);
    self.shape = shape;
    self.data = data;
    self.type = data.constructor;

    return self;
  };

  Matrix.fromArray = function (array) {
    var shape = [],
        data,
        c;   // number of columns

    shape[0] = array.length;
    shape[1] = array[0].length;
    c = shape[1];

    data = new Float64Array(shape[0]*shape[1]);

    for (var ii = 0; ii < shape[0]; ++ii)
      for (var jj = 0; jj < shape[1]; ++jj)
        data[ii*c + jj] = array[ii][jj];

    return Matrix.fromTypedArray(data, shape);
  };

  // Matrix(.prototype).add
  // ?> adds two matrices a and b together
  // => returns a new matrix containing the sum of a and b
  Matrix.add = function (a, b) {
    return a.add(b);
  };

  Matrix.prototype.add = function (matrix) {
    var r = this.shape[0],          // rows in this matrix
        c = this.shape[1],          // columns in this matrix
        d1 = this.data,
        d2 = matrix.data;

    if (r !== matrix.shape[0] || c !== matrix.shape[1])
      throw new Error('sizes do not match: ' + r + 'x' + c + ', ' + matrix.shape[0] + 'x' + matrix.shape[1]);

    var data = new this.type(r * c);

    for (var ii = 0; ii < r; ii++)
      for (var jj = 0; jj < c; jj++)
        data[ii*c + jj] = d1[ii*c + jj] + d2[ii*c + jj];

    return Matrix.fromTypedArray(data, this.shape);
  };

  // Matrix(.prototype).subtract
  // ?> subtracts the matrix b from matrix a
  // => returns a new matrix containing the difference between a and b
  Matrix.subtract = function (a, b) {
    return a.subtract(b);
  };

  Matrix.prototype.subtract = function (matrix) {
      var r = this.shape[0],          // rows in this matrix
          c = this.shape[1],          // columns in this matrix
          d1 = this.data,
          d2 = matrix.data;

      if (r !== matrix.shape[0] || c !== matrix.shape[1])
        throw new Error('sizes do not match');

      var data = new this.type(r * c);

      for (var ii = 0; ii < r; ii++)
        for (var jj = 0; jj < c; jj++)
          data[ii*c + jj] = d1[ii*c + jj] - d2[ii*c + jj];

      return Matrix.fromTypedArray(data, this.shape);
  };

  // Matrix.prototype.scale
  // ?> multiplies all elements of a matrix with a specified scalar
  // => returns a new resultant scaled matrix
  Matrix.prototype.scale = function (scalar) {
    var r = this.shape[0],          // rows in this matrix
        c = this.shape[1],          // columns in this matrix
        d1 = this.data;

    var data = new this.type(r * c);

    for (var ii = 0; ii < r; ii++)
      for (var jj = 0; jj < c; jj++)
        data[ii*c + jj] = d1[ii*c + jj] * scalar;

    return Matrix.fromTypedArray(data, this.shape);
  };

  // Matrix.zeros
  // ?> creates an i x j matrix containing zeros (0), takes an
  //    optional type argument which should be an instance of TypedArray
  // => returns a matrix of the specified dimensions and type
  Matrix.zeros = function (i, j, type) {
    if (i <= 0 || j <= 0)
      throw new Error('invalid size');

    type = type ? type : Float64Array;
    var data = new type(i * j);
    if (data.fill) {
      // fill not implmeneted on chrome version 43
      data.fill(0.0);
    } else {
      for (var k = 0; k < i * j; k++)
        data[k] = +0.0;
    }

    return Matrix.fromTypedArray(data, [i, j]);
  };

  // Matrix.ones
  // ?> creates an i x j matrix containing ones (1), takes an
  //    optional type argument which should be an instance of TypedArray
  // => returns a matrix of the specified dimensions and type
  Matrix.ones = function (i, j, type) {
    if (i <= 0 || j <= 0)
      throw new Error('invalid size');

    type = type ? type : Float64Array;
    var data = new type(i * j);
    if (data.fill) {
      // fill not implmeneted on chrome version 43
      data.fill(1.0);
    } else {
      for (var k = 0; k < i * j; k++)
        data[k] = +1.0;
    }

    return Matrix.fromTypedArray(data, [i, j]);
  };

  // Matrix(.prototype).multiply
  // ?> multiplies two matrices a and b of matching dimensions together
  // => returns a new resultant matrix containing the matrix product of a and b
  Matrix.multiply = function (a, b) {
    return a.multiply(b);
  };

  Matrix.prototype.multiply = function (matrix) {
    var r1 = this.shape[0],   // rows in this matrix
        c1 = this.shape[1],   // columns in this matrix
        r2 = matrix.shape[0], // rows in multiplicand
        c2 = matrix.shape[1], // columns in multiplicand
        d1 = this.data,
        d2 = matrix.data;

    if (c1 !== r2)
      throw new Error('sizes do not match');

    var out = Matrix.fromTypedArray(
      new this.type(this.shape[0] * matrix.shape[1]),
      [this.shape[0], matrix.shape[1]]
    );
    var data = out.data;

    for (var ii = 0; ii < r1; ii++) {
      for (var jj = 0; jj < c2; jj++) {
        var sum = +0;
        for (var kk = 0; kk < c1; kk++)
          sum += d1[ii*c1+kk] * d2[jj+kk*c2];

        data[ii*c2+jj] = sum;
      }
    }

    return out;
  };

  // Matrix.prototype.transpose
  // ?> transposes a matrix (mirror across the diagonal)
  // => returns a new resultant transposed matrix
  Matrix.prototype.transpose = function () {
    var r = this.shape[0],
        c = this.shape[1];

    var data = new this.type(c * r);
    for (var i = 0; i < r; i++)
      for (var j = 0; j < c; j++)
        data[j * r + i] = this.data[i * c + j];

    return Matrix.fromTypedArray(data, [c, r]);
  };

  // Matrix.prototype.inverse
  // ?> determines the inverse of any invertible square matrix using
  //    Gaussian elimination
  // => returns the inverse of the matrix
  Matrix.prototype.inverse = function () {
    var l = this.shape[0],
        m = this.shape[1];

    if (l !== m)
      throw new Error('invalid dimensions');

    var identity = Matrix.identity(l);
    var augmented = Matrix.augment(this, identity);
    var gauss = augmented.gauss();

    var left = Matrix.zeros(l, m),
        right = Matrix.zeros(l, m),
        n = gauss.shape[1],
        i, j;
    for (i = 0; i < l; i++) {
      for (j = 0; j < n; j++) {
        if (j < m)
          left.set(i, j, gauss.get(i, j));
        else
          right.set(i, j - l, gauss.get(i, j));
      }
    }

    if (!left.equals(Matrix.identity(l)))
      throw new Error('matrix is not invertible');

    return right;
  };

  // Matrix.prototype.gauss
  // ?> performs Gaussian elimination on a matrix
  // => returns the matrix in reduced row echelon form
  Matrix.prototype.gauss = function () {
    var l = this.shape[0],
        m = this.shape[1];

    var copy = new Matrix(this),
        lead = 0,
        pivot,
        i, j, k,
        leadValue;

    for (i = 0; i < l; i++) {
      if (m <= lead)
        return new Error('matrix is singular');

      j = i;
      while (copy.data[j * m + lead] === 0) {
        j++;
        if (l === j) {
          j = i;
          lead++;

          if (m === lead)
            return new Error('matrix is singular');
        }
      }

      copy.swap(i, j);

      pivot = copy.data[i * m + lead];
      if (pivot !== 0) {
        // scale down the row by value of pivot
        for (k = 0; k < m; k++)
          copy.data[(i * m) + k] = copy.data[(i * m) + k] / pivot;
      }


      for (j = 0; j < l; j++) {
        leadValue = copy.data[j * m + lead];
        if (j !== i)
          for (k = 0; k < m; k++)
            copy.data[j * m + k] = copy.data[j * m + k] - (copy.data[i * m + k] * leadValue);
      }

      lead++;
    }

    for (i = 0; i < l; i++) {
      pivot = 0;
      for (j = 0; j < m; j++)
        if (!pivot)
          pivot = copy.data[i * m + j];

      if (pivot)
        // scale down the row by value of pivot
        for (k = 0; k < m; k++)
          copy.data[(i * m) + k] = copy.data[(i * m) + k] / pivot;
    }

    return copy;
  };

  // Matrix.prototype.pivotize
  // ?> pivots a matrix until elements are in upper triangular form
  // => returns a tuple (array) of the resultant pivotized matrix and its sign
  //    (used in LU factorization)
  Matrix.prototype.pivotize = function () {
    var l = this.shape[0],
        result = Matrix.identity(l),
        sign = 1,
        pivot,
        lead,
        row;

    var i, j;
    for (i = 0; i < l; i++) {
      pivot = 0;
      row = i;

      for (j = i; j < l; j++) {
        lead = Math.abs(this.get(j, i));
        if (pivot < lead) {
          pivot = lead;
          row = j;
        }
      }

      if (i !== row) {
        result.swap(i, row);
        sign *= -1;
      }
    }

    return [result, sign];
  };

  // Matrix.prototype.lu
  // ?> performs LU factorization on a matrix
  // => returns a triple (array) of the lower triangular resultant matrix L, the upper
  //    triangular resultant matrix U and the pivot matrix P
  Matrix.prototype.lu = function () {
    var l = this.shape[0];

    var L = Matrix.identity(l),
        U = Matrix.zeros(l, l),
        P = this.pivotize(),
        A = Matrix.multiply(P[0], this);

    var i, j, k,
        sum = [0, 0];

    for (i = 0; i < l; i++) {
      for (j = 0; j < i + 1; j++) {
        sum[0] = 0;
        for (k = 0; k < j; k++)
          sum[0] += U.get(k, i) * L.get(j, k);

        U.set(j, i, A.get(j, i) - sum[0]);
      }

      for (j = i; j < l; j++) {
        sum[1] = 0;
        for (k = 0; k < j; k++)
          sum[1] += U.get(k, i) * L.get(j, k);

        L.set(j, i, (A.get(j, i) - sum[1]) / U.get(i, i));
      }
    }

    return [L, U, P];
  };

  // Matrix(.prototype).augment
  // ?> augments two matrices a and b of matching dimensions (appends b to a)
  // => returns the resultant matrix of b appended to a
  Matrix.augment = function (a, b) {
    return new Matrix(a).augment(b);
  };

  Matrix.prototype.augment = function (matrix) {
    if (matrix.shape.length === 0)
     return this;

    var r1 = this.shape[0],
        c1 = this.shape[1],
        r2 = matrix.shape[0],
        c2 = matrix.shape[1],
        d1 = this.data,
        d2 = matrix.data,
        i, j;

    if (r1 !== r2)
      throw new Error("Rows do not match.");

    var data = new this.type((c1 + c2) * r1);

    for (i = 0; i < r1; i++)
      for (j = 0; j < c1; j++)
        data[i * (c1 + c2) + j] = d1[i * r1 + j];

    for (i = 0; i < r1; i++)
      for (j = 0; j < c2; j++)
        data[i * (c1 + c2) + j + c1] = d2[i * r1 + j];

    this.shape = [r1, c1 + c2];
    this.data = data;

    return this;
  };

  // Matrix.identity
  // ?> creates an identity matrix of size, takes an optional type argument
  //    which should be an instance of TypedArray
  // => returns an identity matrix of the specified size and type
  Matrix.identity = function (size, type) {
    if (size < 0)
      throw new Error('invalid size');

    type = type ? type : Float64Array;
    var matrix = Matrix.zeros(size, size, type),
        i, j;
    for (i = 0; i < size; i++)
      matrix.data[i * size + i] = 1.0;

    return matrix;
  };

  // Matrix.magic
  // ?> creates a magic square matrix of size, takes an optional type argument
  //    which should be an instance of TypedArray
  // => returns a magic square matrix of the specified size and type
  Matrix.magic = function (size, type) {
    if (size < 0)
      throw new Error('invalid size');

    function f(n, x, y) {
      return (x + y * 2 + 1) % n;
    }

    type = type ? type : Float64Array;
    var magic = Matrix.zeros(size, size, type),
        i, j;
    for (i = 0; i < size; i++)
      for (j = 0; j < size; j++)
        magic.data[(size - i - 1) * size + (size - j - 1)] =
          f(size, size - j - 1, i) * size + f(size, j, i) + 1;

    return magic;
  };

  // Matrix.prototype.diag
  // ?> gets the diagonal of a matrix
  // => returns the diagonal of the matrix as a vector
  Matrix.prototype.diag = function () {
    var r = this.shape[0],
        c = this.shape[1],
        data = new this.type(Math.min(r, c));

    for (var i = 0; i < r && i < c; i++)
      data[i] = this.data[i * c + i];

    return new Vector(this.type, data);
  };

  // Matrix.prototype.determinant
  // ?> gets the determinant of any square matrix using LU factorization
  // => returns the determinant of the matrix
  Matrix.prototype.determinant = function () {
    if (this.shape[0] !== this.shape[1])
      throw new Error('matrix is not square');

    var lu = this.lu();
    var P = lu.pop(),
        U = lu.pop(),
        L = lu.pop();

    var sum = 0,
        product = 1,
        l = this.shape[0],
        i, j;

    for (i = 0; i < l; i++)
      product *= L.get(i, i) * U.get(i, i);

    return P.pop() * product;
  };

  // Matrix.trace
  // ?> gets the trace of the matrix (the sum of all diagonal elements
  // => returns the trace of the matrix
  Matrix.prototype.trace = function () {
    var diagonal = this.diag(),
        result = 0,
        i, l;

    for (i = 0, l = diagonal.length; i < l; i++)
      result += diagonal.get(i);

    return result;
  };

  // Matrix(.prototype).equals
  // ?> checks the equality of two matrices a and b
  // => returns true if equal, false otherwise
  Matrix.equals = function (a, b) {
    return a.equals(b);
  };

  Matrix.prototype.equals = function (matrix) {
    var r = this.shape[0],
        c = this.shape[1],
        d1 = this.data,
        d2 = matrix.data;

    if (r !== matrix.shape[0] || c !== matrix.shape[1] || this.type !== matrix.type)
      return false;

    for (var i = 0; i < r * c; i++)
      if (d1[i] !== d2[i])
        return false;

    return true;
  };

  // Matrix.prototype.get
  // ?> gets the value of the element in row i, column j of a matrix
  // => returns the element at row i, column j of the matrix
  Matrix.prototype.get = function (i, j) {
    if (i < 0 || j < 0 || i > this.shape[0] - 1 || j > this.shape[1] - 1)
      throw new Error('index out of bounds');

    return this.data[i*this.shape[1]+j];
  };

  // Matrix.prototype.set
  // ?> sets the element at row i, column j to value
  // => returns this for function chaining
  Matrix.prototype.set = function (i, j, value) {
    if (i < 0 || j < 0 || i > this.shape[0] - 1 || j > this.shape[1] - 1)
      throw new Error('index out of bounds');

    this.data[i*this.shape[1]+j] = value;
    return this;
  };

  // Matrix.prototype.swap
  // ?> swaps two rows i and j in a matrix
  // => returns this for function chaining
  Matrix.prototype.swap = function (i, j) {
    if (i < 0 || j < 0 || i > this.shape[0] - 1 || j > this.shape[0] - 1)
      throw new Error('index out of bounds');

    var c = this.shape[1];

    // copy first row
    var copy = this.data.slice(i * c, (i + 1) * c);
    // move second row into first row spot
    this.data.copyWithin(i * c, j * c, (j + 1) * c);
    // copy first row back into second row spot
    this.data.set(copy, j * c);

    return this;
  };

  // Matrix.prototype.map
  // ?> maps a function callback to all rows in a matrix
  // => returns the resultant mapped matrix
  Matrix.prototype.map = function (callback) {
    var result = new Matrix(this);
    result.data = this.data.map(callback);

    return result;
  };

  // Matrix.prototype.each
  // ?> functional version of for-looping the rows in a matrix, is
  //    equivalent to Array.prototype.forEach
  // => returns this for function chaining
  Matrix.prototype.each = function (callback) {

    var c = this.shape[1];

    this.data.forEach(function (value, i) {
      callback(value, i / c | 0, i % c);
    });

    return this;
  };

  // Matrix.prototype.toString
  // ?> converts a matrix into a readable formatted string
  // => returns a string of the matrix' contents
  Matrix.prototype.toString = function () {
    var result = [],
        r = this.shape[0],
        c = this.shape[1];

    for (var i = 0; i < r; i++)
      // get string version of current row and store it
      result.push('[' + this.data.subarray(i * c, (i + 1) * c ).toString() + ']');

    return '[' + result.join(', \n') + ']';
  };

  // Matrix.prototype.toArray
  // ?> converts a matrix into a two-dimensional array
  // => returns an array of the matrix' contents
  Matrix.prototype.toArray = function () {
    var result = [],
        r = this.shape[0],
        c = this.shape[1];

    for (var i = 0; i < r; i++)
      // copy current row into a native array and store it
      result.push(Array.prototype.slice.call(this.data.subarray(i * c, (i + 1) * c)));

    return result;
  };

  module.exports = Matrix;
})();
