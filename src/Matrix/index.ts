import { NDArray } from '../NDArray';
import { TypedArrayConstructor } from '../types';

export class Matrix extends NDArray {
  /**
   * Augments `x` and `y`.
   */
  public static augment: <T extends Matrix>(x: T, y: T) => T;

  /**
   * Gets the determinant of `x`.
   */
  public static det: <T extends Matrix>(x: T) => number;

  /**
   * Gets the diagonal of `x`.
   */
  public static diagonal: <T extends Matrix>(x: T) => T;

  /**
   * Gets eigenvalues and eigenvectors of `x` using the Jacobi method.
   * Accelerated with LAPACK `?geev`.
   */
  public static eig: <T extends Matrix>(x: T) => [T, T];

  /**
   * Gauss-Jordan elimination (i.e. returns the reduced row echelon form) of `x`.
   */
  public static gauss: <T extends Matrix>(x: T) => T;

  /**
   * Determines the inverse of `x`.
   * Accelerated with LAPACK `?getri`.
   */
  public static inv: <T extends Matrix>(x: T) => T;

  /**
   * Performs full LU decomposition on `x`.
   * Accelerated with LAPACK `?getrf`.
   */
  public static lu: <T extends Matrix>(x: T) => [T, T, Int32Array];

  /**
   * Performs LU factorization on `x`.
   * Accelerated with LAPACK `?getrf`.
   */
  public static lu_factor: <T extends Matrix>(x: T) => [T, Int32Array];

  /**
   * Creates a magic square matrix of `size`
   */
  public static magic: <T extends Matrix>(size: number, type?: TypedArrayConstructor) => T;

  /**
   * Multiplies two matrices `x` and `y` of matching dimensions.
   * Accelerated with BLAS `?gemm`.
   */
  public static multiply: <T extends Matrix>(x: T, y: T) => T;

  /**
   * Finds the rank of `x` using gaussian elimination.
   */
  public static rank: <T extends Matrix>(x: T) => number;

  /**
   * Adds a multiple of one row multiplied by `scalar` to another inside `x`.
   */
  public static rowAdd: <T extends Matrix>(x: T, dest: number, source: number, scalar?: number) => T;

  /**
   * Solves the equation AX = B (where A is `x` and B is `y`).
   * Accelerated with LAPACK `?gesv`.
   */
  public static solve: <T extends Matrix>(x: T, y: T) => T;

  /**
   * Asserts if `x` is square.
   */
  public static square: <T extends Matrix>(x: T) => void;

  /**
   * Swaps two rows `i` and `j` in `x`.
   */
  public static swap: <T extends Matrix>(x: T, i: number, j: number) => T;

  /**
   * Converts current matrix into a two-dimensional array
   */
  public static toArray: <T extends Matrix>(x: T) => number[][];

  /**
   * Converts `x` into a readable formatted string
   */
  public static toString: <T extends Matrix>(x: T) => string;

  /**
   * Gets the trace of `x` (the sum of all diagonal elements).
   */
  public static trace: <T extends Matrix>(x: T) => number;

  /**
   * Transposes `x` (mirror across the diagonal).
   */
  public static transpose: <T extends Matrix>(x: T) => T;

  /**
   * Augments `x` with current matrix.
   */
  public augment!: <T extends Matrix>(x: T) => this;

  /**
   * Gets the determinant of current matrix using LU factorization.
   */
  public det!: () => number;

  /**
   * Gets the diagonal of current matrix.
   */
  public diagonal!: () => this;

  /**
   * Gets eigenvalues and eigenvectors of the current matrix using the Jacobi method.
   * Accelerated with LAPACK `?geev`.
   */
  public eig!: <T extends Matrix>() => [T, T];

  /**
   * Gauss-Jordan elimination (i.e. returns the reduced row echelon form) of current matrix.
   */
  public gauss!: () => this;

  /**
   * Determines the inverse of current matrix using Gaussian elimination.
   * Accelerated with LAPACK `?getri`.
   */
  public inv!: () => this;

  /**
   * Performs full LU decomposition on current matrix.
   * Accelerated with LAPACK `?getrf`.
   */
  public lu!: <T extends Matrix>() => [T, T, Int32Array];

  /**
   * Performs LU factorization on current matrix.
   * Accelerated with LAPACK `?getrf`.
   */
  public lu_factor!: () => [this, Int32Array];

  /**
   * Multiplies current matrix with `x`.
   * Accelerated with BLAS `?gemm`
   */
  public multiply!: <T extends Matrix>(x: T) => this;

  /**
   * Finds the rank of current matrix using gaussian elimination.
   */
  public rank!: () => number;

  /**
   * Adds a multiple of one row multiplied by `scalar` to another inside current matrix.
   */
  public rowAdd!: (dest: number, source: number, scalar?: number) => this;

  /**
   * Solves the equation AX = B (where A is current matrix and B is `x`).
   * Accelerated with LAPACK `?gesv`.
   */
  public solve!: <T extends Matrix>(x: T) => this;

  /**
   * Asserts if current matrix is square.
   */
  public square!: () => void;

  /**
   * Swaps two rows `i` and `j` in current matrix
   */
  public swap!: (i: number, j: number) => this;

  /**
   * Converts current matrix into a two-dimensional array
   */
  public toArray!: () => number[][];

  /**
   * Converts current matrix into a readable formatted string
   */
  public toString!: () => string;

  /**
   * Gets the trace of the matrix (the sum of all diagonal elements).
   */
  public trace!: () => number;

  /**
   * Transposes current matrix (mirror across the diagonal).
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
