import './types';
import Vector from './Vector';

let axpy: any;
let scal: any;
let gemm: any;

try {
  const nblas = require('nblas');

  axpy = nblas.axpy;
  scal = nblas.scal;
  gemm = nblas.gemm;
} catch (err) {
  console.log('skipping nblas...');
}

export default class Matrix {
  type: TypedArrayConstructor;
  shape: number[];
  data: TypedArray;

  /**
   * Creates a `Matrix` from the supplied arguments.
   */
  constructor(data?: any, options?: any) {
    this.type = Float64Array;
    this.data = new this.type(0);
    this.shape = [0, 0];

    if (data && data.buffer && data.buffer instanceof ArrayBuffer) {
      return Matrix.fromTypedArray(data, options && options.shape);
    } else if (data instanceof Array) {
      return Matrix.fromArray(data);
    } else if (data instanceof Vector) {
      return Matrix.fromVector(data, options && options.shape);
    } else if (data instanceof Matrix) {
      return Matrix.fromMatrix(data);
    } else if (typeof data === "number" && typeof options === "number") {
      // Handle new Matrix(r, c)
      return Matrix.fromShape([data, options]);
    } else if (data && !data.buffer && data.shape) {
      // Handle new Matrix({ shape: [r, c] })
      return Matrix.fromShape(data.shape);
    }
  }
  
  static fromTypedArray(data: TypedArray, shape: number[]) {
    if (data.length !== shape[0] * shape[1])
      throw new Error("Shape does not match typed array dimensions.");

    var self = Object.create(Matrix.prototype);
    self.shape = shape;
    self.data = data;
    self.type = data.constructor;

    return self;
  }

  static fromArray(array: number[][]) {
    var r = array.length, // number of rows
        c = array[0].length,  // number of columns
        data = new Float64Array(r * c);

    var i, j;
    for (i = 0; i < r; ++i)
      for (j = 0; j < c; ++j)
        data[i * c + j] = array[i][j];

    return Matrix.fromTypedArray(data, [r, c]);
  }
  
  static fromMatrix(matrix: Matrix) {
    var self = Object.create(Matrix.prototype);
    self.shape = [matrix.shape[0], matrix.shape[1]];
    self.data = new matrix.type(matrix.data);
    self.type = matrix.type;
    
    return self;
  }
  
  static fromVector(vector: Vector, shape?: number[]) {
    if (shape && vector.length !== shape[0] * shape[1])
      throw new Error("Shape does not match vector dimensions.");

    var self = Object.create(Matrix.prototype);
    self.shape = shape ? shape : [vector.length, 1];
    self.data = new vector.type(vector.data);
    self.type = vector.type;

    return self;
  }

  static fromShape(shape: number[]) {
    var r = shape[0], // number of rows
        c = shape[1]; // number of columns

    return Matrix.fromTypedArray(new Float64Array(r * c), shape);
  }

  /**
   * Static method. Perform binary operation on two matrices `a` and `b` together.
   */
  static binOp(a: Matrix, b: Matrix, op: (a: number, b: number, index?: number) => number): Matrix {
    return new Matrix(a).binOp(b, op);
  }

  /**
   * Perform binary operation on `matrix` to the current matrix.
   */
  binOp(matrix: Matrix, op: (a: number, b: number, index?: number) => number): Matrix {
    var r = this.shape[0],          // rows in this matrix
        c = this.shape[1],          // columns in this matrix
        size = r * c,
        d1 = this.data,
        d2 = matrix.data;

    if (r !== matrix.shape[0] || c !== matrix.shape[1])
      throw new Error('sizes do not match!');

    var i;
    for (i = 0; i < size; i++)
      d1[i] = op(d1[i], d2[i], i);

    return this;
  }

  /**
   * Static method. Adds two matrices `a` and `b` together.
   */
  static add(a: Matrix, b: Matrix): Matrix {
    return new Matrix(a).add(b);
  }

  /**
   * Adds `matrix` to current matrix.
   */
  add(matrix: Matrix): Matrix {
    try {
      const [r1, c1] = this.shape;
      const [r2, c2] = matrix.shape;

      if (r1 !== r2 || c1 !== c2)
        throw new Error('sizes do not match!');

      axpy(matrix.data, this.data);
      return this;
    } catch (err) {
      return this.binOp(matrix, (a, b) => a + b);
    }
  }

  /**
   * Static method. Subtracts the matrix `b` from matrix `a`.
   */
  static subtract(a: Matrix, b: Matrix): Matrix {
    return new Matrix(a).subtract(b);
  }

  /**
   * Subtracts `matrix` from current matrix.
   */
  subtract(matrix: Matrix): Matrix {
    try {
      const [r1, c1] = this.shape;
      const [r2, c2] = matrix.shape;

      if (r1 !== r2 || c1 !== c2)
        throw new Error('sizes do not match!');

      axpy(matrix.data, this.data, -1);
      return this;
    } catch (err) {
      return this.binOp(matrix, (a, b) => a - b);
    }
  }

  /**
   * Static method. Hadamard product of matrices
   */
  static product(a: Matrix, b: Matrix): Matrix {
    return new Matrix(a).product(b);
  }

  /**
   * Hadamard product of matrices
   */
  product(matrix: Matrix): Matrix {
    return this.binOp(matrix, (a, b) => a * b);
  }

  /**
   * Static method. Multiplies all elements of a matrix `a` with a specified `scalar`.
   */
  static scale(a: Matrix, scalar: number): Matrix {
    return new Matrix(a).scale(scalar);
  }

  /**
   * Multiplies all elements of current matrix with a specified `scalar`.
   */
  scale(scalar: number): Matrix {
    try {
      scal(this.data, scalar);
      return this;
    } catch (err) {
      var r = this.shape[0],          // rows in this matrix
          c = this.shape[1],          // columns in this matrix
          size = r * c,
          d1 = this.data,
          i;

      for (i = 0; i < size; i++)
        d1[i] *= scalar;

      return this;
    }
  }

  /**
   * Static method. Creates a `r x c` matrix containing optional 'value' (default 0), takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   */
  static fill(r: number, c: number, value: number | ((r: number, c: number) => number), type?: TypedArrayConstructor): Matrix {
    if (r <= 0 || c <= 0)
      throw new Error('invalid size');

    value = value || +0.0;
    type = type || Float64Array;

    var size = r * c,
        data = new type(size),
        i, j, k = 0;
    
    for (i = 0; i < r; i++)
      for (j = 0; j < c; j++, k++)
        data[k] = value instanceof Function ? value(i, j) : value;

    return Matrix.fromTypedArray(data, [r, c]);
  }

  /**
   * Static method. Creates an `r x c` matrix containing zeros (`0`), takes an
   * optional `type` argument which should be an instance of `TypedArray`.
   */
  static zeros(r: number, c: number, type?: TypedArrayConstructor): Matrix {
    return Matrix.fill(r, c, +0.0, type);
  }

  /**
   * Static method. Creates an `r x c` matrix containing ones (`1`), takes an
   * optional `type` argument which should be an instance of `TypedArray`.
   */
  static ones(r: number, c: number, type?: TypedArrayConstructor): Matrix {
    return Matrix.fill(r, c, +1.0, type);
  }

  /**
   * Static method. Creates an `r x c` matrix containing random values
   * according to a normal distribution, takes an optional `type` argument
   * which should be an instance of `TypedArray`.
   */
  static random(r: number, c: number, deviation?: number, mean?: number, type?: TypedArrayConstructor): Matrix {
    if (deviation == null) {
      deviation = 1;
    }
    if (mean == null) {
      mean = 0;
    }

    return Matrix.fill(r, c, function() {
      return (deviation as number) * Math.random() + (mean as number);
    }, type);
  }

  /**
   * Static method. Multiplies two matrices `a` and `b` of matching dimensions.
   */
  static multiply(a: Matrix, b: Matrix): Matrix {
    return a.multiply(b);
  }

  /**
   * Multiplies two matrices `a` and `b` of matching dimensions.
   */
  multiply(matrix: Matrix): Matrix {
    var r1 = this.shape[0],   // rows in this matrix
        c1 = this.shape[1],   // columns in this matrix
        r2 = matrix.shape[0], // rows in multiplicand
        c2 = matrix.shape[1], // columns in multiplicand
        d1 = this.data,
        d2 = matrix.data;

    if (c1 !== r2)
      throw new Error('sizes do not match');
    

    var data = new this.type(r1 * c2),
        i, j, k,
        sum;
    
    try {
      gemm(d1, d2, data, r1, c2, c1);
      return Matrix.fromTypedArray(data, [r1, c2]);
    } catch (err) {
      for (i = 0; i < r1; i++) {
        for (j = 0; j < c2; j++) {
          sum = +0;
          for (k = 0; k < c1; k++)
            sum += d1[i * c1 + k] * d2[j + k * c2];
  
          data[i * c2 + j] = sum;
        }
      }

      return Matrix.fromTypedArray(data, [r1, c2]);
    }
  }

  /**
   * Getter for transpose.
   */
  get T(): Matrix {
    return this.transpose();
  }

  /**
   * Transposes a matrix (mirror across the diagonal).
   */
  transpose(): Matrix {
    var r = this.shape[0],
        c = this.shape[1],
        i, j;

    var data = new this.type(c * r);
    for (i = 0; i < r; i++)
      for (j = 0; j < c; j++)
        data[j * r + i] = this.data[i * c + j];

    return Matrix.fromTypedArray(data, [c, r]);
  }

  /**
   * Determines the inverse of any invertible square matrix using
   * Gaussian elimination.
   */
  inverse(): Matrix {
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
  }

  /**
   * Performs Gaussian elimination on a matrix.
   */
  gauss(): Matrix {
    var l = this.shape[0],
        m = this.shape[1];

    var copy = new Matrix(this),
        lead = 0,
        pivot,
        i, j, k,
        leadValue;

    for (i = 0; i < l; i++) {
      if (m <= lead)
        throw new Error('matrix is singular');

      j = i;
      while (copy.data[j * m + lead] === 0) {
        j++;
        if (l === j) {
          j = i;
          lead++;

          if (m === lead)
            throw new Error('matrix is singular');
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
  }

  /**
   * Performs full LU decomposition on a matrix.
   */
  lu(): [Matrix, Matrix, Int32Array] {
    var r = this.shape[0],
        c = this.shape[1],
        plu = Matrix.plu(this),
        ipiv = plu[1],
        lower = new Matrix(plu[0]),
        upper = new Matrix(plu[0]),
        i, j;

    for (i = 0; i < r; i++)
      for (j = i; j < c; j++)
        lower.data[i * c + j] = i === j ? 1 : 0;

    for (i = 0; i < r; i++)
      for (j = 0; j < i && j < c; j++)
        upper.data[i * c + j] = 0;

    return [lower, upper, ipiv];
  }

  /**
   * Static method. Performs LU factorization on current matrix.
   */
  static plu(matrix: Matrix): [Matrix, Int32Array] {
    return new Matrix(matrix).plu();
  }

  /**
   * Performs LU factorization on current matrix.
   */
  plu(): [Matrix, Int32Array] {
    var data = this.data,
        n = this.shape[0],
        ipiv = new Int32Array(n),
        max, abs, diag, p,
        i, j, k;

    for (k = 0; k < n; ++k) {
      p = k;
      max = Math.abs(data[k * n + k]);
      for (j = k + 1; j < n; ++j) {
        abs = Math.abs(data[j * n + k]);
        if (max < abs) {
          max = abs;
          p = j;
        }
      }

      ipiv[k] = p;

      if (p !== k)
        this.swap(k, p);

      diag = data[k * n + k];
      for (i = k + 1; i < n; ++i)
        data[i * n + k] /= diag;

      for (i = k + 1; i < n; ++i) {
        for (j = k + 1; j < n - 1; ++j) {
          data[i * n + j] -= data[i * n + k] * data[k * n + j];
          ++j;
          data[i * n + j] -= data[i * n + k] * data[k * n + j];
        }

        if(j === n - 1)
          data[i * n + j] -= data[i * n + k] * data[k * n + j];
      }
    }

    return [this, ipiv];
  }

  /**
   * Solves an LU factorized matrix with the supplied right hand side(s)
   */
  lusolve(rhs: Matrix, ipiv: Int32Array): Matrix {
    var lu = this.data,
        n = rhs.shape[0],
        nrhs = rhs.shape[1],
        x = rhs.data,
        i, j, k;

    // pivot right hand side
    for (i = 0; i < ipiv.length; i++)
      if (i !== ipiv[i])
        rhs.swap(i, ipiv[i]);

    for (k = 0; k < nrhs; k++) {
      // forward solve
      for (i = 0; i < n; i++)
        for (j = 0; j < i; j++)
          x[i * nrhs + k] -= lu[i * n + j] * x[j * nrhs + k];

      // backward solve
      for (i = n - 1; i >= 0; i--) {
        for (j = i + 1; j < n; j++)
          x[i * nrhs + k] -= lu[i * n + j] * x[j * nrhs + k];
        x[i * nrhs + k] /= lu[i * n + i];
      }
    }

    return rhs;
  }

  /**
   * Solves AX = B using LU factorization, where A is the current matrix and
   * B is a Vector/Matrix containing the right hand side(s) of the equation.
   */
  solve(rhs: Matrix): Matrix {
    var [lu, ipiv] = Matrix.plu(this);

    return lu.lusolve(new Matrix(rhs), ipiv);
  }

  /**
   * Static method. Augments two matrices `a` and `b` of matching dimensions
   * (appends `b` to `a`).
   */
  static augment(a: Matrix, b: Matrix): Matrix {
    return new Matrix(a).augment(b);
  }

  /**
   * Augments `matrix` with current matrix.
   */
  augment(matrix: Matrix): Matrix {
    var r1 = this.shape[0],
        c1 = this.shape[1],
        r2 = matrix.shape[0],
        c2 = matrix.shape[1],
        d1 = this.data,
        d2 = matrix.data,
        i, j;
    
    if (r2 === 0 && c2 === 0)
      return this;

    if (r1 !== r2)
      throw new Error("Rows do not match.");

    var length = c1 + c2,
        data = new this.type(length * r1);

    for (i = 0; i < r1; i++)
      for (j = 0; j < c1; j++)
        data[i * length + j] = d1[i * c1 + j];

    for (i = 0; i < r2; i++)
      for (j = 0; j < c2; j++)
        data[i * length + j + c1] = d2[i * c2 + j];

    this.shape = [r1, length];
    this.data = data;

    return this;
  }

  /**
   * Static method. Creates an identity matrix of `size`, takes an optional `type` argument
   * which should be an instance of `TypedArray`.
   */
  static identity(size: number, type?: TypedArrayConstructor): Matrix {
    return Matrix.fill(size, size, function (i, j) {
      return i === j ? +1.0 : +0.0;
    }, type);
  }

  /**
   * Static method. Creates a magic square matrix of `size`, takes an optional `type` argument
   * which should be an instance of `TypedArray`.
   */
  static magic(size: number, type?: TypedArrayConstructor): Matrix {
    if (size < 0)
      throw new Error('invalid size');

    function f(n: number, x: number, y: number) {
      return (x + y * 2 + 1) % n;
    }

    type = type || Float64Array;
    var data = new type(size * size),
        i, j;
    for (i = 0; i < size; i++)
      for (j = 0; j < size; j++)
        data[(size - i - 1) * size + (size - j - 1)] =
          f(size, size - j - 1, i) * size + f(size, j, i) + 1;

    return Matrix.fromTypedArray(data, [size, size]);
  }

  /**
   * Gets the diagonal of a matrix.
   */
  diag(): Vector {
    var r = this.shape[0],
        c = this.shape[1],
        data = new this.type(Math.min(r, c)),
        i;

    for (i = 0; i < r && i < c; i++)
      data[i] = this.data[i * c + i];

    return new Vector(data);
  }

  /**
   * Gets the determinant of any square matrix using LU factorization.
   */
  determinant(): number {
    if (this.shape[0] !== this.shape[1])
      throw new Error('matrix is not square');

    var plu = Matrix.plu(this),
        lu = plu[0],
        ipiv = plu[1],
        r = this.shape[0],
        c = this.shape[1],
        product = 1,
        sign = 1,
        i;

    // get sign from ipiv
    for (i = 0; i < r; i++)
      if (i !== ipiv[i])
        sign *= -1;

    for (i = 0; i < r; i++)
      product *= lu.data[i * c + i];

    return sign * product;
  }

  /**
   * Gets the trace of the matrix (the sum of all diagonal elements).
   */
  trace(): number {
    var diagonal = this.diag(),
        result = 0,
        i, l;

    for (i = 0, l = diagonal.length; i < l; i++)
      result += diagonal.get(i);

    return result;
  }

  /**
   * Static method. Checks the equality of two matrices `a` and `b`.
   */
  static equals(a: Matrix, b: Matrix): boolean {
    return a.equals(b);
  }

  /**
   * Checks the equality of `matrix` and current matrix.
   */
  equals(matrix: Matrix): boolean {
    var r = this.shape[0],
        c = this.shape[1],
        size = r * c,
        d1 = this.data,
        d2 = matrix.data;

    if (r !== matrix.shape[0] || c !== matrix.shape[1] || this.type !== matrix.type)
      return false;

    var i;
    for (i = 0; i < size; i++)
      if (d1[i] !== d2[i])
        return false;

    return true;
  }

  /**
   * Check if `i` and `j` is within the bounds for current matrix.
   */
  check(i: number, j: number): void {  
    if (isNaN(i) || isNaN(j) || i < 0 || j < 0 || i > this.shape[0] - 1 || j > this.shape[1] - 1)
      throw new Error('index out of bounds');
  }

  /**
   * Gets the value of the element in row `i`, column `j` of current matrix
   */
  get(i: number, j: number): number {
    this.check(i, j);
    return this.data[i * this.shape[1] + j];
  }

  /**
   * Sets the element at row `i`, column `j` to value
   */
  set(i: number, j: number, value: number): Matrix {
    this.check(i, j);
    this.data[i * this.shape[1] + j] = value;
    return this;
  }

  /**
   * Swaps two rows `i` and `j` in a matrix
   */
  swap(i: number, j: number): Matrix {
    if (i < 0 || j < 0 || i > this.shape[0] - 1 || j > this.shape[0] - 1)
      throw new Error('index out of bounds');

    var c = this.shape[1];

    // copy first row
    var copy = this.data.slice(i * c, (i + 1) * c);
    // move second row into first row spot
    this.data.copyWithin(i * c, j * c, (j + 1) * c);
    // copy first row back into second row spot
    this.data.set(copy, j * c);

    return this;
  }

  /**
   * Maps a function `callback` to all elements of a copy of current matrix.
   */
  map(callback: (value: number, i: number, j: number, src: TypedArray) => number): Matrix {
    var r = this.shape[0],
        c = this.shape[1],
        size = r * c,
        mapped = new Matrix(this),
        data = mapped.data,
        i;

    for (i = 0; i < size; i++)
      data[i] = callback.call(mapped, data[i], i / c | 0, i % c, data);

    return mapped;
  }

  /**
   * Functional version of for-looping the elements in a matrix, is
   * equivalent to `Array.prototype.forEach`.
   */
  each(callback: (value: number, i: number, j: number) => void): Matrix {
    var r = this.shape[0],
        c = this.shape[1],
        size = r * c,
        i;

    for (i = 0; i < size; i++)
      callback.call(this, this.data[i], i / c | 0, i % c);

    return this;
  }

  /**
   * Equivalent to `TypedArray.prototype.reduce`.
   */
  reduce(callback: (acc: number, value: number, i: number, j: number) => number, initialValue?: number): number {
    var r = this.shape[0],
        c = this.shape[1],
        size = r * c;

    if (size === 0 && !initialValue)
      throw new Error('Reduce of empty matrix with no initial value.');

    var i = 0,
        value = initialValue || this.data[i++];

    for (; i < size; i++)
      value = callback.call(this, value, this.data[i], i / c | 0, i % c);
    return value;
  }

  /**
   * Static method. Finds the rank of the matrix using row echelon form
   */
  static rank(matrix: Matrix): number {
    return new Matrix(matrix).rank();
  }

  /**
   * Finds the rank of the matrix using row echelon form
   */
  rank(): number {
    var vectors = this
      .toArray()
      .map(function(r) {
        return new Vector(r);
      });

    var r = this.shape[0],
        c = this.shape[1],
        counter = 0,
        i, j, tmp,
        pivot, target, scalar;

    for (i = 0; i < r - 1; i++) {
      // go through each row until the row before the last
      pivot = null;
      for (j = i; j < r; j++) {
        // find the pivot (first row where column of same index is non-zero)
        if (vectors[i].get(i)) {
          if (i !== j) {
            // if not the current row, swap the rows, bring pivot the current row index
            tmp = vectors[i];
            vectors[i] = vectors[j];
            vectors[j] = tmp;
          }
          pivot = vectors[i];
          break;
        }
      }
      // if pivot not found, continue
      if (!pivot)
        continue;

      // otherwise, for all rows underneath pivot, cancel all column index to zero
      for (j = (i + 1); j < r; j++) {
        target = vectors[j];
        scalar = target.get(i) / pivot.get(i);
        vectors[j] = target.subtract(pivot.scale(scalar));
      }
    }

    // now vectors should be in row echelon form!
    // use optimized loops to count number of vectors that have non-zero values
    for (i = 0; i < r; i++) {
      for (j = 0; j < c; j++) {
        if (vectors[i].get(j)) {
          counter++;
          break;
        }
      }
    }

    // should be rank
    return counter;
  }

  /**
   * Converts current matrix into a readable formatted string
   */
  toString(): string {
    var result = [],
        r = this.shape[0],
        c = this.shape[1],
        i;

    for (i = 0; i < r; i++)
      // get string version of current row and store it
      result.push('[' + this.data.subarray(i * c, (i + 1) * c ).toString() + ']');

    return '[' + result.join(', \n') + ']';
  }

  /**
   * Converts current matrix into a two-dimensional array
   */
  toArray(): number[][] {
    var result = [],
        r = this.shape[0],
        c = this.shape[1],
        i;

    for (i = 0; i < r; i++)
      // copy current row into a native array and store it
      result.push(Array.prototype.slice.call(this.data.subarray(i * c, (i + 1) * c)));

    return result;
  }
}

try {
  (<any>window).Matrix = Matrix;
} catch (error) {}
