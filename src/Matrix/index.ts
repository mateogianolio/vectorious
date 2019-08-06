import { NDArray } from '../NDArray';
import { TypedArrayConstructor } from '../types';

export class Matrix extends NDArray {
  /**
   * Augments `x` and `y`.
   * ![](media://Matrix/augment.png)
   */
  public static augment: <T extends Matrix>(x: T, y: T) => T;

  /**
   * Gets the determinant of `x`.
   * ![](media://Matrix/det.png)
   */
  public static det: <T extends Matrix>(x: T) => number;

  /**
   * Gets the diagonal of `x`.
   * ![](media://Matrix/diagonal.png)
   */
  public static diagonal: <T extends Matrix>(x: T) => T;

  /**
   * Gets eigenvalues and eigenvectors of `x` using the Jacobi method.
   * Accelerated with LAPACK `?geev`.
   * ![](media://Matrix/eig.png)
   */
  public static eig: <T extends Matrix>(x: T) => [T, T];

  /**
   * Gauss-Jordan elimination (i.e. returns the reduced row echelon form) of `x`.
   * ![](media://Matrix/gauss.png)
   */
  public static gauss: <T extends Matrix>(x: T) => T;

  /**
   * Determines the inverse of `x`.
   * Accelerated with LAPACK `?getri`.
   * ![](media://Matrix/inv.png)
   */
  public static inv: <T extends Matrix>(x: T) => T;

  /**
   * Performs full LU decomposition on `x`.
   * Accelerated with LAPACK `?getrf`.
   * ![](media://Matrix/lu.png)
   */
  public static lu: <T extends Matrix>(x: T) => [T, T, Int32Array];

  /**
   * Performs LU factorization on `x`.
   * Accelerated with LAPACK `?getrf`.
   * ![](media://Matrix/lu_factor.png)
   */
  public static lu_factor: <T extends Matrix>(x: T) => [T, Int32Array];

  /**
   * Creates a magic square matrix of `size`
   * ![](media://Matrix/magic.png)
   */
  public static magic: <T extends Matrix>(size: number, type?: TypedArrayConstructor) => T;

  /**
   * Multiplies two matrices `x` and `y` of matching dimensions.
   * Accelerated with BLAS `?gemm`.
   * ![](media://Matrix/multiply.png)
   */
  public static multiply: <T extends Matrix>(x: T, y: T) => T;

  /**
   * Finds the rank of `x` using gaussian elimination.
   * ![](media://Matrix/rank.png)
   */
  public static rank: <T extends Matrix>(x: T) => number;

  /**
   * Adds a multiple of one row multiplied by `scalar` to another inside `x`.
   * ![](media://Matrix/rowAdd.png)
   */
  public static rowAdd: <T extends Matrix>(x: T, dest: number, source: number, scalar?: number) => T;

  /**
   * Solves the equation AX = B (where A is `x` and B is `y`).
   * Accelerated with LAPACK `?gesv`.
   * ![](media://Matrix/solve.png)
   */
  public static solve: <T extends Matrix>(x: T, y: T) => T;

  /**
   * Asserts if `x` is square.
   * ![](media://Matrix/square.png)
   */
  public static square: <T extends Matrix>(x: T) => void;

  /**
   * Swaps two rows `i` and `j` in `x`.
   * ![](media://Matrix/swap.png)
   */
  public static swap: <T extends Matrix>(x: T, i: number, j: number) => T;

  /**
   * Converts current matrix into a two-dimensional array
   * ![](media://Matrix/toArray.png)
   */
  public static toArray: <T extends Matrix>(x: T) => number[][];

  /**
   * Converts `x` into a readable formatted string
   * ![](media://Matrix/toString.png)
   */
  public static toString: <T extends Matrix>(x: T) => string;

  /**
   * Gets the trace of `x` (the sum of all diagonal elements).
   * ![](media://Matrix/trace.png)
   */
  public static trace: <T extends Matrix>(x: T) => number;

  /**
   * Transposes `x` (mirror across the diagonal).
   * ![](media://Matrix/transpose.png)
   */
  public static transpose: <T extends Matrix>(x: T) => T;

  /**
   * Augments `x` with current matrix.
   * ![](media://Matrix/augment.png)
   */
  public augment!: <T extends Matrix>(x: T) => this;

  /**
   * Gets the determinant of current matrix using LU factorization.
   * ![](media://Matrix/det.png)
   */
  public det!: () => number;

  /**
   * Gets the diagonal of current matrix.
   * ![](media://Matrix/diagonal.png)
   */
  public diagonal!: () => this;

  /**
   * Gets eigenvalues and eigenvectors of the current matrix using the Jacobi method.
   * Accelerated with LAPACK `?geev`.
   * ![](media://Matrix/eig.png)
   */
  public eig!: <T extends Matrix>() => [T, T];

  /**
   * Gauss-Jordan elimination (i.e. returns the reduced row echelon form) of current matrix.
   * ![](media://Matrix/gauss.png)
   */
  public gauss!: () => this;

  /**
   * Determines the inverse of current matrix using Gaussian elimination.
   * Accelerated with LAPACK `?getri`.
   * ![](media://Matrix/inv.png)
   */
  public inv!: () => this;

  /**
   * Performs full LU decomposition on current matrix.
   * Accelerated with LAPACK `?getrf`.
   * ![](media://Matrix/lu.png)
   */
  public lu!: <T extends Matrix>() => [T, T, Int32Array];

  /**
   * Performs LU factorization on current matrix.
   * Accelerated with LAPACK `?getrf`.
   * ![](media://Matrix/lu_factor.png)
   */
  public lu_factor!: () => [this, Int32Array];

  /**
   * Multiplies current matrix with `x`.
   * Accelerated with BLAS `?gemm`.
   * ![](media://Matrix/multiply.png)
   */
  public multiply!: <T extends Matrix>(x: T) => this;

  /**
   * Finds the rank of current matrix using gaussian elimination.
   * ![](media://Matrix/rank.png)
   */
  public rank!: () => number;

  /**
   * Adds a multiple of one row multiplied by `scalar` to another inside current matrix.
   * ![](media://Matrix/rowAdd.png)
   */
  public rowAdd!: (dest: number, source: number, scalar?: number) => this;

  /**
   * Solves the equation AX = B (where A is current matrix and B is `x`).
   * Accelerated with LAPACK `?gesv`.
   * ![](media://Matrix/solve.png)
   */
  public solve!: <T extends Matrix>(x: T) => this;

  /**
   * Asserts if current matrix is square.
   * ![](media://Matrix/square.png)
   */
  public square!: () => void;

  /**
   * Swaps two rows `i` and `j` in current matrix
   * ![](media://Matrix/swap.png)
   */
  public swap!: (i: number, j: number) => this;

  /**
   * Converts current matrix into a two-dimensional array
   * ![](media://Matrix/toArray.png)
   */
  public toArray!: () => number[][];

  /**
   * Converts current matrix into a readable formatted string.
   * ![](media://Matrix/toString.png)
   */
  public toString!: () => string;

  /**
   * Gets the trace of the matrix (the sum of all diagonal elements).
   * ![](media://Matrix/trace.png)
   */
  public trace!: () => number;

  /**
   * Transposes current matrix (mirror across the diagonal).
   * ![](media://Matrix/transpose.png)
   */
  public transpose!: () => this;

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
   * Transposes current matrix (mirror across the diagonal).
   */
  public get T(): Matrix {
    return this.transpose();
  }
}

import './augment';
import './det';
import './diagonal';
import './gauss';
import './inv';
import './eig';
import './lu';
import './lu_factor';
import './magic';
import './multiply';
import './rank';
import './rowAdd';
import './solve';
import './square';
import './swap';
import './toArray';
import './toString';
import './trace';
import './transpose';

try {
  (window as any).Matrix = Matrix;
} catch (err) {}
