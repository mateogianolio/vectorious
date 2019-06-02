import { NDArray } from '../NDArray';
import { copy } from '../NDArray/copy';
import { IMatrix, TypedArray, TypedArrayConstructor } from '../types';

import { augment } from './augment';
import { determinant } from './determinant';
import { diagonal } from './diagonal';
import { gauss } from './gauss';
import { inverse } from './inverse';
import { lu } from './lu';
import { multiply } from './multiply';
import { plu } from './plu';
import { rank } from './rank';
import { rowAdd } from './rowAdd';
import { solve } from './solve';
import { square } from './square';
import { swap } from './swap';
import { toArray } from './toArray';
import { toString } from './toString';
import { trace } from './trace';
import { transpose } from './transpose';

const magicHelper: (n: number, x: number, y: number) => number = (n: number, x: number, y: number): number =>
  (x + y * 2 + 1) % n;

export class Matrix extends NDArray implements IMatrix {
  /**
   * Adds two matrices `x` and `y` together.
   */
  public static add(x: Matrix, y: Matrix): Matrix {
    return x.copy().add(y);
  }

  /**
   * Augments two matrices `x` and `y` of matching dimensions
   * (appends `y` to `x`).
   */
  public static augment(x: Matrix, y: Matrix): Matrix {
    return x.copy().augment(y);
  }

  /**
   * Perform binary operation on two matrices `x` and `y` together.
   */
  public static binOp(x: Matrix, y: Matrix, op: (a: number, b: number, index?: number) => number): Matrix {
    return x.copy().binOp(y, op);
  }

  /**
   * Checks the equality of two matrices `x` and `y`.
   */
  public static equals(x: Matrix, y: Matrix): boolean {
    return x.equals(y);
  }

  /**
   * Creates a `r x c` matrix containing optional 'value' (default 0), takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   */
  public static fill(
    r: number,
    c: number,
    value: number | ((index: number) => number) = 0,
    type: TypedArrayConstructor = Float32Array
  ): Matrix {
    if (r <= 0 || c <= 0) {
      throw new Error('invalid size');
    }

    const size: number = r * c;
    const data: TypedArray = new type(size);

    return new Matrix(data, { shape: [r, c] }).fill(value);
  }

  /**
   * Creates an identity matrix of `size`, takes an optional `type` argument
   * which should be an instance of `TypedArray`.
   */
  public static identity(size: number, type: TypedArrayConstructor = Float32Array): Matrix {
    return Matrix.fill(size, size, (i: number) => (i % size) === Math.floor(i / size) ? 1 : 0, type);
  }

  /**
   * Creates a magic square matrix of `size`, takes an optional `type` argument
   * which should be an instance of `TypedArray`.
   */
  public static magic(size: number, type: TypedArrayConstructor = Float32Array): Matrix {
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
   * Multiplies two matrices `x` and `y` of matching dimensions.
   */
  public static multiply(x: Matrix, y: Matrix): Matrix {
    return x.multiply(y);
  }

  /**
   * Creates an `r x c` matrix containing ones (`1`), takes an
   * optional `type` argument which should be an instance of `TypedArray`.
   */
  public static ones(r: number, c: number, type: TypedArrayConstructor = Float32Array): Matrix {
    return Matrix.fill(r, c, 1, type);
  }

  /**
   * Performs LU factorization on current matrix.
   */
  public static plu(matrix: Matrix): [Matrix, Int32Array] {
    return matrix.copy().plu();
  }

  /**
   * Hadamard product of matrices
   */
  public static product(x: Matrix, y: Matrix): Matrix {
    return x.copy().product(y);
  }

  /**
   * Creates an `r x c` matrix containing random values
   * according to a uniform distribution bounded by `min` and `max`,
   * takes an optional `type` argument which should be an instance of `TypedArray`.
   */
  public static random(
    r: number,
    c: number,
    min: number = 0,
    max: number = 1,
    type: TypedArrayConstructor = Float32Array
  ): Matrix {
    return Matrix.fill(r, c, min, type)
      .map((value: number) => value + Math.random() * (max - min));
  }

  /**
   * Finds the rank of the matrix using row echelon form
   */
  public static rank(x: Matrix): number {
    return x.copy().rank();
  }

  /**
   * Multiplies all elements of a matrix `x` with a specified `scalar`.
   */
  public static scale(x: Matrix, scalar: number): Matrix {
    return x.copy().scale(scalar);
  }

  /**
   * Subtracts the matrix `y` from matrix `x`.
   */
  public static subtract(x: Matrix, y: Matrix): Matrix {
    return x.copy().subtract(y);
  }

  /**
   * Creates an `r x c` matrix containing zeros (`0`), takes an
   * optional `type` argument which should be an instance of `TypedArray`.
   */
  public static zeros(r: number, c: number, type: TypedArrayConstructor = Float32Array): Matrix {
    return Matrix.fill(r, c, 0, type);
  }

  public augment: typeof augment = augment;
  public copy: typeof copy = copy;
  public det: typeof determinant = determinant;
  public determinant: typeof determinant = determinant;
  public diag: typeof diagonal = diagonal;
  public diagonal: typeof diagonal = diagonal;
  public gauss: typeof gauss = gauss;
  public inv: typeof inverse = inverse;
  public inverse: typeof inverse = inverse;
  public lu: typeof lu = lu;
  public mul: typeof multiply = multiply;
  public multiply: typeof multiply = multiply;
  public plu: typeof plu = plu;
  public rank: typeof rank = rank;
  public rk: typeof rank = rank;
  public rowAdd: typeof rowAdd = rowAdd;
  public solve: typeof solve = solve;
  public square: typeof square = square;
  public swap: typeof swap = swap;
  public toArray: typeof toArray = toArray;
  public toString: typeof toString = toString;
  public trace: typeof trace = trace;
  public transpose: typeof transpose = transpose;

  public constructor(data?: any, options?: any) {
    super(
      typeof data === 'number' && typeof options === 'number'
        ? new Float32Array(data * options)
        : data,
      typeof options === 'number'
        ? { shape: [data, options ] }
        : options
    );
  }

  /**
   * Getter for transpose.
   */
  public get T(): Matrix {
    return this.transpose();
  }
}

try {
  (window as any).Matrix = Matrix;
} catch (err) {}
