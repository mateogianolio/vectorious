import { NDArray } from './NDArray';
import { TypedArray, TypedArrayConstructor } from './types';
import { Vector } from './Vector';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

const magicHelper: (n: number, x: number, y: number) => number = (n: number, x: number, y: number): number =>
  (x + y * 2 + 1) % n;

export class Matrix extends NDArray {
  /**
   * Static method. Adds two matrices `a` and `b` together.
   */
  public static add(a: Matrix, b: Matrix): Matrix {
    return a.copy()
      .add(b);
  }

  /**
   * Static method. Augments two matrices `a` and `b` of matching dimensions
   * (appends `b` to `a`).
   */
  public static augment(a: Matrix, b: Matrix): Matrix {
    return a.copy()
      .augment(b);
  }

  /**
   * Static method. Perform binary operation on two matrices `a` and `b` together.
   */
  public static binOp(a: Matrix, b: Matrix, op: (a: number, b: number, index?: number) => number): Matrix {
    return a.copy()
      .binOp(b, op);
  }

  /**
   * Static method. Checks the equality of two matrices `a` and `b`.
   */
  public static equals(a: Matrix, b: Matrix): boolean {
    return a.equals(b);
  }

  /**
   * Static method. Creates a `r x c` matrix containing optional 'value' (default 0), takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   */
  public static fill(
    r: number,
    c: number,
    value: number | ((index: number) => number) = 0,
    type: TypedArrayConstructor = Float64Array
  ): Matrix {
    if (r <= 0 || c <= 0) {
      throw new Error('invalid size');
    }

    const size: number = r * c;
    const data: TypedArray = new type(size);

    return new Matrix(data, { shape: [r, c] }).fill(value);
  }

  /**
   * Static method. Creates an identity matrix of `size`, takes an optional `type` argument
   * which should be an instance of `TypedArray`.
   */
  public static identity(size: number, type: TypedArrayConstructor = Float64Array): Matrix {
    return Matrix.fill(size, size, (i: number) => (i % size) === Math.floor(i / size) ? 1 : 0, type);
  }

  /**
   * Static method. Creates a magic square matrix of `size`, takes an optional `type` argument
   * which should be an instance of `TypedArray`.
   */
  public static magic(size: number, type: TypedArrayConstructor = Float64Array): Matrix {
    if (size < 0) {
      throw new Error('invalid size');
    }

    const data: TypedArray = new type(size * size);

    let i: number;
    let j: number;
    for (i = 0; i < size; i += 1) {
      for (j = 0; j < size; j += 1) {
        data[(size - i - 1) * size + (size - j - 1)] =
          magicHelper(size, size - j - 1, i) * size + magicHelper(size, j, i) + 1;
      }
    }

    return new Matrix(data, { shape: [size, size] });
  }

  /**
   * Static method. Multiplies two matrices `a` and `b` of matching dimensions.
   */
  public static multiply(a: Matrix, b: Matrix): Matrix {
    return a.multiply(b);
  }

  /**
   * Static method. Creates an `r x c` matrix containing ones (`1`), takes an
   * optional `type` argument which should be an instance of `TypedArray`.
   */
  public static ones(r: number, c: number, type: TypedArrayConstructor = Float64Array): Matrix {
    return Matrix.fill(r, c, 1, type);
  }

  /**
   * Static method. Performs LU factorization on current matrix.
   */
  public static plu(matrix: Matrix): [Matrix, Int32Array] {
    return matrix.copy()
      .plu();
  }

  /**
   * Static method. Hadamard product of matrices
   */
  public static product(a: Matrix, b: Matrix): Matrix {
    return a.copy()
      .product(b);
  }

  /**
   * Static method. Creates an `r x c` matrix containing random values
   * according to a uniform distribution bounded by `min` and `max`,
   * takes an optional `type` argument which should be an instance of `TypedArray`.
   */
  public static random(
    r: number,
    c: number,
    min: number = 0,
    max: number = 1,
    type: TypedArrayConstructor = Float64Array
  ): Matrix {
    return Matrix.fill(r, c, min, type)
      .map((value: number) => value + Math.random() * (max - min));
  }

  /**
   * Static method. Finds the rank of the matrix using row echelon form
   */
  public static rank(matrix: Matrix): number {
    return matrix.copy()
      .rank();
  }

  /**
   * Static method. Multiplies all elements of a matrix `a` with a specified `scalar`.
   */
  public static scale(a: Matrix, scalar: number): Matrix {
    return a.copy()
      .scale(scalar);
  }

  /**
   * Static method. Subtracts the matrix `b` from matrix `a`.
   */
  public static subtract(a: Matrix, b: Matrix): Matrix {
    return a.copy()
      .subtract(b);
  }

  /**
   * Static method. Creates an `r x c` matrix containing zeros (`0`), takes an
   * optional `type` argument which should be an instance of `TypedArray`.
   */
  public static zeros(r: number, c: number, type: TypedArrayConstructor = Float64Array): Matrix {
    return Matrix.fill(r, c, 0, type);
  }

  public constructor(data?: any, options?: any) {
    if (typeof data === 'number' && typeof options === 'number') {
      super(new Float64Array(data * options), { shape: [data, options ] });
    } else {
      super(data, options);
    }
  }

  /**
   * Augments `matrix` with current matrix.
   */
  public augment(matrix: Matrix): Matrix {
    const [r1, c1] = this.shape;
    const [r2, c2] = matrix.shape;

    if (r2 === 0 || c2 === 0) {
      return this;
    }

    if (r1 !== r2) {
      throw new Error('rows do not match');
    }

    const { data: d1 } = this;
    const { data: d2 } = matrix;
    const length: number = c1 + c2;
    const data: TypedArray = new this.type(length * r1);

    let i: number;
    let j: number;
    for (i = 0; i < r1; i += 1) {
      for (j = 0; j < c1; j += 1) {
        data[i * length + j] = d1[i * c1 + j];
      }
    }

    for (i = 0; i < r2; i += 1) {
      for (j = 0; j < c2; j += 1) {
        data[i * length + j + c1] = d2[i * c2 + j];
      }
    }

    this.shape = [r1, length];
    this.length = data.length;
    this.data = data;

    return this;
  }

  /**
   * Perform binary operation on `matrix` to the current matrix.
   */
  public binOp(matrix: Matrix, op: (a: number, b: number, index?: number) => number): Matrix {
    const [r1, c1] = this.shape;
    const [r2, c2] = matrix.shape;

    if (r1 !== r2 || c1 !== c2) {
      throw new Error('sizes do not match!');
    }

    const { data: d1, length } = this;
    const { data: d2 } = matrix;

    let i: number;
    for (i = 0; i < length; i += 1) {
      d1[i] = op(d1[i], d2[i], i);
    }

    return this;
  }

  /**
   * Check if `i` and `j` is within the bounds for current matrix.
   */
  public check(i: number, j: number): void {
    const [r, c] = this.shape;

    if (isNaN(i) || isNaN(j)) {
      throw new Error('one of the indices is not a number');
    }

    if (i < 0 || j < 0 || i > r - 1 || j > c - 1) {
      throw new Error('index out of bounds');
    }
  }

  /**
   * Gets the determinant of any square matrix using LU factorization.
   */
  public determinant(): number {
    const [r, c] = this.shape;

    if (r !== c) {
      throw new Error('matrix is not square');
    }

    const [lu, ipiv] = Matrix.plu(this);

    let product: number = 1;
    let sign: number = 1;

    let i: number;
    for (i = 0; i < r; i += 1) {
      if (i !== ipiv[i]) {
        sign *= -1;
      }
    }

    for (i = 0; i < r; i += 1) {
      product *= lu.data[i * c + i];
    }

    return sign * product;
  }

  /**
   * Gets the diagonal of a matrix.
   */
  public diag(): Vector {
    const { data } = this;
    const [r, c] = this.shape;
    const diag: TypedArray = new this.type(Math.min(r, c));

    let i: number;
    for (i = 0; i < r && i < c; i += 1) {
      diag[i] = data[i * c + i];
    }

    return new Vector(diag);
  }

  /**
   * Functional version of for-looping the elements in a matrix, is
   * equivalent to `Array.prototype.forEach`.
   */
  public each(callback: (value: number, i: number, j: number) => void): Matrix {
    const c: number = this.shape[1];
    const { data, length } = this;

    let i: number;
    for (i = 0; i < length; i += 1) {
      callback.call(this, data[i], c === 0 ? 0 : Math.floor(i / c), i % c);
    }

    return this;
  }

  /**
   * Performs Gaussian elimination on a matrix.
   */
  public gauss(): Matrix {
    const [r, c] = this.shape;
    const copy: Matrix = this.copy();

    let lead: number = 0;
    let pivot: number;
    let leadValue: number;

    let i: number;
    let j: number;
    let k: number;
    for (i = 0; i < r; i += 1) {
      if (c <= lead) {
        throw new Error('matrix is singular');
      }

      j = i;
      while (copy.data[j * c + lead] === 0) {
        j += 1;
        if (r === j) {
          j = i;
          lead += 1;

          if (c === lead) {
            throw new Error('matrix is singular');
          }
        }
      }

      copy.swap(i, j);

      pivot = copy.data[i * c + lead];
      if (pivot !== 0) {
        for (k = 0; k < c; k += 1) {
          copy.data[(i * c) + k] = copy.data[(i * c) + k] / pivot;
        }
      }

      for (j = 0; j < r; j += 1) {
        leadValue = copy.data[j * c + lead];
        if (j !== i) {
          for (k = 0; k < c; k += 1) {
            copy.data[j * c + k] = copy.data[j * c + k] - (copy.data[i * c + k] * leadValue);
          }
        }
      }

      lead += 1;
    }

    for (i = 0; i < r; i += 1) {
      pivot = 0;
      for (j = 0; j < c; j += 1) {
        if (pivot === 0) {
          pivot = copy.data[i * c + j];
        }
      }

      if (pivot === 0) {
        for (k = 0; k < c; k += 1) {
          copy.data[(i * c) + k] = copy.data[(i * c) + k] / pivot;
        }
      }
    }

    return copy;
  }

  /**
   * Gets the value of the element in row `i`, column `j` of current matrix
   */
  public get(i: number, j: number): number {
    this.check(i, j);

    return this.data[i * this.shape[1] + j];
  }

  /**
   * Determines the inverse of any invertible square matrix using
   * Gaussian elimination.
   */
  public inverse(): Matrix {
    const [r, c] = this.shape;

    if (r !== c) {
      throw new Error('invalid dimensions');
    }

    const identity: Matrix = Matrix.identity(r);
    const augmented: Matrix = Matrix.augment(this, identity);
    const gauss: Matrix = augmented.gauss();
    const left: Matrix = Matrix.zeros(r, c);
    const right: Matrix = Matrix.zeros(r, c);

    const n: number = gauss.shape[1];

    let i: number;
    let j: number;
    for (i = 0; i < r; i += 1) {
      for (j = 0; j < n; j += 1) {
        if (j < c) {
          left.set(i, j, gauss.get(i, j));
        } else {
          right.set(i, j - r, gauss.get(i, j));
        }
      }
    }

    if (!left.equals(Matrix.identity(r))) {
      throw new Error('matrix is not invertible');
    }

    return right;
  }

  /**
   * Performs full LU decomposition on a matrix.
   */
  public lu(): [Matrix, Matrix, Int32Array] {
    const [r, c] = this.shape;
    const [plu, ipiv] = Matrix.plu(this);
    const lower: Matrix = plu.copy();
    const upper: Matrix = plu.copy();

    let i: number;
    let j: number;
    for (i = 0; i < r; i += 1) {
      for (j = i; j < c; j += 1) {
        lower.data[i * c + j] = i === j ? 1 : 0;
      }
    }

    for (i = 0; i < r; i += 1) {
      for (j = 0; j < i && j < c; j += 1) {
        upper.data[i * c + j] = 0;
      }
    }

    return [lower, upper, ipiv];
  }

  /**
   * Solves an LU factorized matrix with the supplied right hand side(s)
   */
  public lusolve(rhs: Matrix, ipiv: Int32Array): Matrix {
    const { data } = this;
    const [n, nrhs] = rhs.shape;
    const x: TypedArray = rhs.data;

    let i: number;
    let j: number;
    let k: number;

    for (i = 0; i < ipiv.length; i += 1) {
      if (i !== ipiv[i]) {
        rhs.swap(i, ipiv[i]);
      }
    }

    for (k = 0; k < nrhs; k += 1) {
      for (i = 0; i < n; i += 1) {
        for (j = 0; j < i; j += 1) {
          x[i * nrhs + k] -= data[i * n + j] * x[j * nrhs + k];
        }
      }

      for (i = n - 1; i >= 0; i -= 1) {
        for (j = i + 1; j < n; j += 1) {
          x[i * nrhs + k] -= data[i * n + j] * x[j * nrhs + k];
        }

        x[i * nrhs + k] /= data[i * n + i];
      }
    }

    return rhs;
  }

  /**
   * Maps a function `callback` to all elements of a copy of current matrix.
   */
  public map(callback: (value: number, i: number, j: number, src: TypedArray) => number): Matrix {
    const c: number = this.shape[1];
    const { length } = this;
    const mapped: Matrix = this.copy();
    const data: TypedArray = mapped.data;

    let i: number;
    for (i = 0; i < length; i += 1) {
      data[i] = callback.call(mapped, data[i], c === 0 ? 0 : Math.floor(i / c), i % c, data);
    }

    return mapped;
  }

  /**
   * Multiplies two matrices `a` and `b` of matching dimensions.
   */
  public multiply(matrix: Matrix): Matrix {
    const [r1, c1] = this.shape;
    const [r2, c2] = matrix.shape;

    if (c1 !== r2) {
      throw new Error('sizes do not match');
    }

    const { data: d1 } = this;
    const { data: d2 } = matrix;
    const data: TypedArray = new this.type(r1 * c2);

    try {
      nblas.gemm(d1, d2, data, r1, c2, c1);
    } catch (err) {
      let i: number;
      let j: number;
      let k: number;
      let sum: number;
      for (i = 0; i < r1; i += 1) {
        for (j = 0; j < c2; j += 1) {
          sum = 0;
          for (k = 0; k < c1; k += 1) {
            sum += d1[i * c1 + k] * d2[j + k * c2];
          }

          data[i * c2 + j] = sum;
        }
      }

    }

    return new Matrix(data, { shape: [r1, c2] });
  }

  /**
   * Getter for transpose.
   */
  public get T(): Matrix {
    return this.transpose();
  }

  /**
   * Performs LU factorization on current matrix.
   */
  public plu(): [this, Int32Array] {
    const { data } = this;
    const [n] = this.shape;
    const ipiv: Int32Array = new Int32Array(n);

    let max: number;
    let abs: number;
    let diag: number;
    let p: number;

    let i: number;
    let j: number;
    let k: number;
    for (k = 0; k < n; k += 1) {
      p = k;
      max = Math.abs(data[k * n + k]);
      for (j = k + 1; j < n; j += 1) {
        abs = Math.abs(data[j * n + k]);
        if (max < abs) {
          max = abs;
          p = j;
        }
      }

      ipiv[k] = p;

      if (p !== k) {
        this.swap(k, p);
      }

      diag = data[k * n + k];
      for (i = k + 1; i < n; i += 1) {
        data[i * n + k] /= diag;
      }

      for (i = k + 1; i < n; i += 1) {
        for (j = k + 1; j < n - 1; j += 1) {
          data[i * n + j] -= data[i * n + k] * data[k * n + j];
          j += 1;
          data[i * n + j] -= data[i * n + k] * data[k * n + j];
        }

        if (j === n - 1) {
          data[i * n + j] -= data[i * n + k] * data[k * n + j];
        }
      }
    }

    return [this, ipiv];
  }

  /**
   * Finds the rank of the matrix using row echelon form
   */
  public rank(): number {
    const vectors: Vector[] = this.toArray()
      .map((row: number[]) => new Vector(row));

    const [r, c] = this.shape;

    let counter: number = 0;
    let tmp: Vector;
    let pivot: Vector | undefined;
    let target: Vector;
    let scalar: number;

    let i: number;
    let j: number;
    for (i = 0; i < r - 1; i += 1) {
      pivot = undefined;

      for (j = i; j < r; j += 1) {
        if (vectors[i].get(i) !== 0) {
          if (i !== j) {
            tmp = vectors[i];
            vectors[i] = vectors[j];
            vectors[j] = tmp;
          }
          pivot = vectors[i];
          break;
        }
      }

      if (pivot === undefined) {
        continue;
      }

      for (j = (i + 1); j < r; j += 1) {
        target = vectors[j];
        scalar = target.get(i) / pivot.get(i);
        vectors[j] = target.subtract(pivot.scale(scalar));
      }
    }

    for (i = 0; i < r; i += 1) {
      for (j = 0; j < c; j += 1) {
        if (vectors[i].get(j) !== 0) {
          counter += 1;
          break;
        }
      }
    }

    return counter;
  }

  /**
   * Equivalent to `TypedArray.prototype.reduce`.
   */
  public reduce(callback: (acc: number, value: number, i: number, j: number) => number, initialValue?: number): number {
    const c: number = this.shape[1];
    const { length } = this;

    if (length === 0 && initialValue === undefined) {
      throw new Error('reduce of empty matrix with no initial value.');
    }

    const { data } = this;
    let i: number;
    let value: number;

    if (initialValue === undefined) {
      value = data[0];
      i = 1;
    } else {
      value = initialValue;
      i = 0;
    }

    for (; i < length; i += 1) {
      value = callback.call(this, value, data[i], c === 0 ? 0 : Math.floor(i / c), i % c);
    }

    return value;
  }

  /**
   * Adds a multiple of one row to another inside a matrix.
   * INPUT:
   *        - dest (destination) is the row for adding the other
   *          row that was multiplied with the scalar.
   *        - source : is the row that would be multiplied with
   *          the scalar (for adding)
   *        - scalar : the scalar of type number.
   * OUTPUT: The current changed matrix.
   */
  public rowAdd(dest: number, source: number, scalar: number = 1): Matrix {
    this.check(dest, 0);
    this.check(source, 0);

    const c: number = this.shape[1];

    let i: number;
    for (i = 0; i < c; i += 1) {
      this.set(dest, i, (this.get(dest, i) + (this.get(source, i) * scalar)));
    }

    return this;
  }

  /**
   * Sets the element at row `i`, column `j` to value
   */
  public set(i: number, j: number, value: number): Matrix {
    this.check(i, j);
    this.data[i * this.shape[1] + j] = value;

    return this;
  }

  /**
   * Solves AX = B using LU factorization, where A is the current matrix and
   * B is a Vector/Matrix containing the right hand side(s) of the equation.
   */
  public solve(rhs: Matrix): Matrix {
    const [lu, ipiv] = Matrix.plu(this);

    return lu.lusolve(rhs.copy(), ipiv);
  }

  /**
   * Swaps two rows `i` and `j` in a matrix
   */
  public swap(i: number, j: number): Matrix {
    const [r, c] = this.shape;
    if (i < 0 || j < 0 || i > r - 1 || j > r - 1) {
      throw new Error('index out of bounds');
    }

    const copy: TypedArray = this.data.slice(i * c, (i + 1) * c);
    this.data.copyWithin(i * c, j * c, (j + 1) * c);
    this.data.set(copy, j * c);

    return this;
  }

  /**
   * Converts current matrix into a two-dimensional array
   */
  public toArray(): number[][] {
    const [r, c] = this.shape;
    const result: number[][] = [];

    let i: number;
    for (i = 0; i < r; i += 1) {
      result.push(Array.prototype.slice.call(this.data.subarray(i * c, (i + 1) * c)));
    }

    return result;
  }

  /**
   * Converts current matrix into a readable formatted string
   */
  public toString(): string {
    const [r, c] = this.shape;
    const result: string[] = [];

    let i: number;
    for (i = 0; i < r; i += 1) {
      result.push(`[${this.data.subarray(i * c, (i + 1) * c)}]`);
    }

    return `[${result.join(', \n')}]`;
  }

  /**
   * Gets the trace of the matrix (the sum of all diagonal elements).
   */
  public trace(): number {
    const diag: Vector = this.diag();
    const length: number = diag.length;

    let result: number = 0;

    let i: number;
    for (i = 0; i < length; i += 1) {
      result += diag.get(i);
    }

    return result;
  }

  /**
   * Transposes a matrix (mirror across the diagonal).
   */
  public transpose(): Matrix {
    const [r, c] = this.shape;
    const data: TypedArray = new this.type(c * r);

    let i: number;
    let j: number;
    for (i = 0; i < r; i += 1) {
      for (j = 0; j < c; j += 1) {
        data[j * r + i] = this.data[i * c + j];
      }
    }

    return new Matrix(data, { shape: [c, r] });
  }
}

try {
  (window as any).Matrix = Matrix;
} catch (err) {}
