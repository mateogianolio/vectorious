import {
  DType,
  INDArray,
  TypedArray,
} from '../types';
import {
  flatten,
  get_dtype,
  get_shape,
  get_type,
  is_typed_array,
} from '../util';

export const inspectSymbol: unique symbol = Symbol.for('nodejs.util.inspect.custom');

export class NDArray implements INDArray {
  /**
   * Returns the absolute value of each element of `x`.
   */
  public static abs: <T extends NDArray>(x: T) => T;

  /**
   * Returns the arccosine of each element of `x`.
   */
  public static acos: <T extends NDArray>(x: T) => T;

  /**
   * Returns the hyperbolic arccosine of each element of `x`.
   */
  public static acosh: <T extends NDArray>(x: T) => T;

  /**
   * Adds `y` multiplied by `alpha` to `x`.
   * Accelerated with BLAS `?axpy`.
   */
  public static add: <T extends NDArray>(x: T, y: T, alpha?: number) => T;

  /**
   * Determines the angle between the `x` and `y`
   */
  public static angle: <T extends NDArray>(x: T, y: T) => number;

  /**
   * Constructor alias
   */
  public static array: <T extends NDArray>(...args: any[]) => T;

  /**
   * Returns the arcsine of each element of `x`.
   */
  public static asin: <T extends NDArray>(x: T) => T;

  /**
   * Returns the hyperbolic arcsine of each element of `x`.
   */
  public static asinh: <T extends NDArray>(x: T) => T;

  /**
   * Returns the arctangent of each element of `x`.
   */
  public static atan: <T extends NDArray>(x: T) => T;

  /**
   * Returns the hyperbolic arctangent of each element of `x`.
   */
  public static atanh: <T extends NDArray>(x: T) => T;

  /**
   * Augments `x` and `y`.
   */
  public static augment: <T extends NDArray>(x: T, y: T) => T;

  /**
   * Perform binary operation `f` on `y` in `x`.
   */
  public static binOp: <T extends NDArray>(x: T, y: T, f: (a: number, b: number, index: number) => number) => T;

  /**
   * Returns the cube root of each element of `x`.
   */
  public static cbrt: <T extends NDArray>(x: T) => T;

  /**
   * Returns smallest integer greater than or equal to of each element of `x`.
   */
  public static ceil: <T extends NDArray>(x: T) => T;

  /**
   * Asserts if indices `i, j, ..., n` are within the bounds of `x`
   */
  public static check: <T extends NDArray>(x: T, ...indices: number[]) => void;

  /**
   * Combines the vector `x` with `y`
   */
  public static combine: <T extends NDArray>(x: T, y: T) => T;

  /**
   * Makes a copy of `x`
   */
  public static copy: <T extends NDArray>(x: T) => T;

  /**
   * Returns the cosine of each element of `x`.
   */
  public static cos: <T extends NDArray>(x: T) => T;

  /**
   * Returns the hyperbolic cosine of each element of `x`.
   */
  public static cosh: <T extends NDArray>(x: T) => T;

  /**
   * Computes the cross product of the `x` and the vector `y`
   * This operation can only calculated for vectors with three components.
   * Otherwise it throws an exception.
   * The method returns a new (result) vector.
   */
  public static cross: <T extends NDArray>(x: T, y: T) => T;

  /**
   * Gets the determinant of `x`.
   */
  public static det: <T extends NDArray>(x: T) => number;

  /**
   * Gets the diagonal of `x`.
   */
  public static diagonal: <T extends NDArray>(x: T) => T;

  /**
   * Performs dot multiplication with `x` and `y`.
   * Accelerated with BLAS `?dot`.
   */
  public static dot: <T extends NDArray>(x: T, y: T) => number;

  /**
   * Equivalent to `TypedArray.prototype.forEach`.
   */
  public static each: <T extends NDArray>(x: T, f: (value: number, i: number, src: TypedArray) => void) => T;

  /**
   * Gets eigenvalues and eigenvectors of `x` using the Jacobi method.
   * Accelerated with LAPACK `?geev`.
   */
  public static eig: <T extends NDArray>(x: T) => [T, T];

  /**
   * Checks if `x` and `y` are equal.
   */
  public static equals: <T extends NDArray>(x: T, y: T) => boolean;

  /**
   * Asserts if `x` and `y` have the same shape
   */
  public static equidimensional: <T extends NDArray>(x: T, y: T) => void;

  /**
   * Asserts if `x` and `y` have the same length
   */
  public static equilateral: <T extends NDArray>(x: T, y: T) => void;

  /**
   * Returns e^x of each element of `x`, where x is the argument,
   * and e is Euler's constant (2.718…), the base of the natural logarithm.
   */
  public static exp: <T extends NDArray>(x: T) => T;

  /**
   * Returns subtracting 1 from exp(x) of each element of `x`.
   */
  public static expm1: <T extends NDArray>(x: T) => T;

  /**
   * Creates an identity matrix of size `n` and type `type`.
   */
  public static eye: <T extends NDArray>(n: number) => T;

  /**
   * Fills `x` with a scalar value
   */
  public static fill: <T extends NDArray>(x: T, value: number | ((index: number) => number)) => T;

  /**
   * Returns the largest integer less than or equal to a number of each element of `x`.
   */
  public static floor: <T extends NDArray>(x: T) => T;

  /**
   * Returns the nearest single precision float representation of each element of `x`.
   */
  public static fround: <T extends NDArray>(x: T) => T;

  /**
   * Gauss-Jordan elimination (i.e. returns the reduced row echelon form) of `x`.
   */
  public static gauss: <T extends NDArray>(x: T) => T;

  /**
   * Gets the element at `i, j, ..., n` from `x`
   */
  public static get: <T extends NDArray>(x: T, ...indices: number[]) => number;

  /**
   * Determines the inverse of `x`.
   * Accelerated with LAPACK `?getri`.
   */
  public static inv: <T extends NDArray>(x: T) => T;

  /**
   * Returns the natural logarithm (log_e, also ln) of each element of `x`.
   */
  public static log: <T extends NDArray>(x: T) => T;

  /**
   * Returns the natural logarithm (log_e, also ln) of 1 + x for each element of `x`.
   */
  public static log10: <T extends NDArray>(x: T) => T;

  /**
   * Returns the base 2 logarithm of each element of `x`.
   */
  public static log1p: <T extends NDArray>(x: T) => T;

  /**
   * Returns the base 10 logarithm of each element of `x`.
   */
  public static log2: <T extends NDArray>(x: T) => T;

  /**
   * Performs full LU decomposition on `x`.
   * Accelerated with LAPACK `?getrf`.
   */
  public static lu: <T extends NDArray>(x: T) => [T, T, Int32Array];

  /**
   * Performs LU factorization on `x`.
   * Accelerated with LAPACK `?getrf`.
   */
  public static lu_factor: <T extends NDArray>(x: T) => [T, Int32Array];

  /**
   * Creates a magic square matrix of `size`
   */
  public static magic: <T extends NDArray>(size: number) => T;

  /**
   * Equivalent to `TypedArray.prototype.map`.
   */
  public static map: <T extends NDArray>(x: T, f: (value: number, i: number, src: TypedArray) => number) => T;

  /**
   * Creates a matrix of `r` rows and `c` columns.
   */
  public static matrix: <T extends NDArray>(r: number, c: number) => T;

  /**
   * Gets the maximum value (largest) element of `x`.
   * Accelerated with BLAS `i?amax`.
   */
  public static max: <T extends NDArray>(x: T) => number;

  /**
   * Gets the minimum value (smallest) element of `x`.
   */
  public static min: <T extends NDArray>(x: T) => number;

  /**
   * Multiplies two matrices `x` and `y` of matching dimensions.
   * Accelerated with BLAS `?gemm`.
   */
  public static multiply: <T extends NDArray>(x: T, y: T) => T;

  /**
   * Calculates the norm of current array (also called L2 norm or Euclidean length).
   * Accelerated with BLAS `?nrm2`.
   */
  public static norm: <T extends NDArray>(x: T) => number;

  /**
   * Normalizes `x`.
   */
  public static normalize: <T extends NDArray>(x: T) => T;

  /**
   * Creates an array containing ones (`1`) of shape `shape`
   */
  public static ones: <T extends NDArray>(...shape: number[]) => T;

  /**
   * Returns each element of `x` to the exponent power, that is, element^exponent.
   */
  public static pow: <T extends NDArray>(x: T, exponent: number) => T;

  /**
   * Hadamard product of `x` and `y`
   */
  public static product: <T extends NDArray>(x: T, y: T) => T;

  /**
   * Projects the `y` onto `x` using the projection formula `(y * (x * y / y * y))`.
   */
  public static project: <T extends NDArray>(x: T, y: T) => T;

  /**
   * Pushes a new `value` into `x`.
   */
  public static push: <T extends NDArray>(x: T, value: number) => T;

  /**
   * Creates a vector containing random samples from a uniform distribution over `[0, 1)` of shape `shape`
   */
  public static random: <T extends NDArray>(...shape: number[]) => T;

  /**
   * Creates an array containing a range (can be either ascending or descending)
   * of numbers specified by the arguments provided (e.g. `NDArray.range(0, .5, 2)`
   * gives an array containing all numbers in the interval `[0, 2)` separated by
   * steps of `0.5`)
   */
  public static range: <T extends NDArray>(...args: number[]) => T;

  /**
   * Finds the rank of `x` using gaussian elimination.
   */
  public static rank: <T extends NDArray>(x: T) => number;

  /**
   * Equivalent to `TypedArray.prototype.reduce`.
   */
  public static reduce: (
    x: NDArray,
    f: (acc: number, value: number, i: number, src: TypedArray) => number,
    initialValue?: number
  ) => number;

  /**
   * Reshapes `x`
   */
  public static reshape: <T extends NDArray>(x: T, ...shape: number[]) => T;

  /**
   * Returns the value of each element of `x` rounded to the nearest integer.
   */
  public static round: <T extends NDArray>(x: T) => T;

  /**
   * Adds a multiple of one row multiplied by `scalar` to another inside `x`.
   */
  public static row_add: <T extends NDArray>(x: T, dest: number, source: number, scalar?: number) => T;

  /**
   * Multiplies all elements of `x` with a specified `scalar`.
   * Accelerated with BLAS `?scal`.
   */
  public static scale: <T extends NDArray>(x: T, scalar: number) => T;

  /**
   * Sets the element at `i, j, ..., n` to `value`.
   */
  public static set: <T extends NDArray>(x: T, ...args: number[]) => void;

  /**
   * Returns the sign of each element of `x`, indicating
   * whether it is positive, negative or zero.
   */
  public static sign: <T extends NDArray>(x: T) => T;

  /**
   * Returns the sine of each element of `x`.
   */
  public static sin: <T extends NDArray>(x: T) => T;

  /**
   * Returns the hyperbolic sine of each element of `x`.
   */
  public static sinh: <T extends NDArray>(x: T) => T;

  /**
   * Slices `x` in the corresponding dimension
   */
  public static slice: <T extends NDArray>(x: T, start?: number, step?: number, end?: number) => T;

  /**
   * Solves the equation AX = B (where A is `x` and B is `y`).
   * Accelerated with LAPACK `?gesv`.
   */
  public static solve: <T extends NDArray>(x: T, y: T) => T;

  /**
   * Returns the positive square root of each element of `x`.
   */
  public static sqrt: <T extends NDArray>(x: T) => T;

  /**
   * Asserts if `x` is square.
   */
  public static square: <T extends NDArray>(x: T) => void;

  /**
   * Subtracts `y` from `x`.
   */
  public static subtract: <T extends NDArray>(x: T, y: T) => T;

  /**
   * Swaps two rows `i` and `j` in `x`.
   */
  public static swap: <T extends NDArray>(x: T, i: number, j: number) => T;

  /**
   * Returns the tangent of each element of `x`.
   */
  public static tan: <T extends NDArray>(x: T) => T;

  /**
   * Returns the hyperbolic tangent of each element of `x`.
   */
  public static tanh: <T extends NDArray>(x: T) => T;

  /**
   * Converts `x` into a JavaScript array.
   */
  public static toArray: <T extends NDArray>(x: T) => number[];

  /**
   * Converts `x` into a readable formatted string.
   */
  public static toString: <T extends NDArray>(x: T) => string;

  /**
   * Gets the trace of `x` (the sum of all diagonal elements).
   */
  public static trace: <T extends NDArray>(x: T) => number;

  /**
   * Transposes `x` (mirror across the diagonal).
   */
  public static transpose: <T extends NDArray>(x: T) => T;

  /**
   * Returns the integer part of each element of `x`,
   * removing any fractional digits.
   */
  public static trunc: <T extends NDArray>(x: T) => T;

  /**
   * Creates an array containing zeros (`0`) of shape `shape`
   */
  public static zeros: <T extends NDArray>(...shape: number[]) => T;

  public [inspectSymbol]!: () => string;

  /**
   * Returns the absolute value of each element of current array.
   */
  public abs!: () => this;

  /**
   * Returns the arccosine of each element of current array.
   */
  public acos!: () => this;

  /**
   * Returns the hyperbolic arccosine of each element of current array.
   */
  public acosh!: () => this;

  /**
   * Adds `x` multiplied by `alpha` to the current array.
   * Accelerated with BLAS `?axpy`.
   */
  public add!: <T extends NDArray>(y: T, alpha?: number) => this;

  /**
   * Determines the angle between the current vector and `x`.
   */
  public angle!: <T extends NDArray>(x: T) => number;

  /**
   * Returns the arcsine of each element of current array.
   */
  public asin!: () => this;

  /**
   * Returns the hyperbolic arcsine of each element of current array.
   */
  public asinh!: () => this;

  /**
   * Returns the arctangent of each element of current array.
   */
  public atan!: () => this;

  /**
   * Returns the hyperbolic arctangent of each element of current array.
   */
  public atanh!: () => this;

  /**
   * Augments `x` with current matrix.
   */
  public augment!: <T extends NDArray>(x: T) => this;

  /**
   * Perform binary operation `f` on `x` in the current array.
   */
  public binOp!: <T extends NDArray>(y: T, f: (a: number, b: number, index: number) => number) => this;

  /**
   * Returns the cube root of each element of current array.
   */
  public cbrt!: () => this;

  /**
   * Returns smallest integer greater than or equal to of each element of current array.
   */
  public ceil!: () => this;

  /**
   * Asserts if indices `i, j, ..., n` are within the bounds of current array
   */
  public check!: (...indices: number[]) => void;

  /**
   * Combines the current vector with `x`
   */
  public combine!: <T extends NDArray>(x: T) => this;

  /**
   * Makes a copy of the class and underlying data
   */
  public copy!: () => this;

  /**
   * Returns the cosine of each element of current array.
   */
  public cos!: () => this;

  /**
   * Returns the hyperbolic cosine of each element of current array.
   */
  public cosh!: () => this;

  /**
   * Computes the cross product of the current vector and the vector `x`
   * This operation can only be calculated for vectors with three components.
   * Otherwise it throws an exception.
   * The method returns a new (result) vector.
   */
  public cross!: <T extends NDArray>(x: T) => this;

  public data: TypedArray = new Float32Array(0);

  /**
   * Gets the determinant of current matrix using LU factorization.
   */
  public det!: () => number;

  /**
   * Gets the diagonal of current matrix.
   */
  public diagonal!: () => this;

  /**
   * Performs dot multiplication with `x` and current array
   * Accelerated with BLAS `?dot`.
   */
  public dot!: <T extends NDArray>(y: T) => number;

  public dtype: DType = 'float32';

  /**
   * Equivalent to `TypedArray.prototype.forEach`.
   */
  public each!: (f: (value: number, i: number, src: TypedArray) => void) => this;

  /**
   * Gets eigenvalues and eigenvectors of the current matrix using the Jacobi method.
   * Accelerated with LAPACK `?geev`.
   */
  public eig!: <T extends NDArray>() => [T, T];

  /**
   * Checks if current array and `x` are equal.
   */
  public equals!: <T extends NDArray>(y: T) => boolean;

  /**
   * Asserts if current array and `x` have the same shape
   */
  public equidimensional!: <T extends NDArray>(y: T) => void;

  /**
   * Asserts if current array and `x` have the same length
   */
  public equilateral!: <T extends NDArray>(y: T) => void;

  /**
   * Returns e^x of each element of current array, where x is the argument,
   * and e is Euler's constant (2.718…), the base of the natural logarithm.
   */
  public exp!: () => this;

  /**
   * Returns subtracting 1 from exp(x) of each element of current array.
   */
  public expm1!: () => this;

  /**
   * Fills the current array with a scalar value
   */
  public fill!: (value: number | ((index: number) => number)) => this;

  /**
   * Returns the largest integer less than or equal to a number of each element of current array.
   */
  public floor!: () => this;

  /**
   * Returns the nearest single precision float representation of each element of current array.
   */
  public fround!: () => this;

  /**
   * Gauss-Jordan elimination (i.e. returns the reduced row echelon form) of current matrix.
   */
  public gauss!: () => this;

  /**
   * Gets the element at `i, j, ..., n` from current vector.
   */
  public get!: (...indices: number[]) => number;

  /**
   * Determines the inverse of current matrix using Gaussian elimination.
   * Accelerated with LAPACK `?getri`.
   */
  public inv!: () => this;

  public length: number = 0;

  /**
   * Returns the natural logarithm (log_e, also ln) of each element of current array.
   */
  public log!: () => this;

  /**
   * Returns the natural logarithm (log_e, also ln) of 1 + x for each element of current array.
   */
  public log10!: () => this;

  /**
   * Returns the base 2 logarithm of each element of current array.
   */
  public log1p!: () => this;

  /**
   * Returns the base 10 logarithm of each element of current array.
   */
  public log2!: () => this;

  /**
   * Performs full LU decomposition on current matrix.
   * Accelerated with LAPACK `?getrf`.
   */
  public lu!: <T extends NDArray>() => [T, T, Int32Array];

  /**
   * Performs LU factorization on current matrix.
   * Accelerated with LAPACK `?getrf`.
   */
  public lu_factor!: () => [this, Int32Array];

  /**
   * Equivalent to `TypedArray.prototype.map`.
   */
  public map!: (f: (value: number, i: number, src: TypedArray) => number) => this;

  /**
   * Gets the maximum value (smallest) element of current array.
   */
  public max!: () => number;

  /**
   * Gets the minimum value (smallest) element of current array.
   */
  public min!: () => number;

  /**
   * Multiplies current matrix with `x`.
   * Accelerated with BLAS `?gemm`.
   */
  public multiply!: <T extends NDArray>(x: T) => this;

  /**
   * Calculates the norm of current array (also called L2 norm or Euclidean length).
   * Accelerated with BLAS `?nrm2`.
   */
  public norm!: () => number;

  /**
   * Normalizes current vector.
   */
  public normalize!: () => this;

  /**
   * Returns each element of current array to the exponent power, that is, element^exponent.
   */
  public pow!: (exponent: number) => this;

  /**
   * Hadamard product of current matrix and `x`
   */
  public product!: <T extends NDArray>(y: T) => this;

  /**
   * Projects the current vector onto `x` using the projection formula `(y * (x * y / y * y))`.
   */
  public project!: <T extends NDArray>(x: T) => this;

  /**
   * Pushes a new `value` into current vector.
   */
  public push!: (value: number) => this;

  /**
   * Finds the rank of current matrix using gaussian elimination.
   */
  public rank!: () => number;

  /**
   * Equivalent to `TypedArray.prototype.reduce`.
   */
  public reduce!: (
    f: (acc: number, value: number, i: number, src: TypedArray) => number,
    initialValue?: number
  ) => number;

  /**
   * Reshapes current array
   */
  public reshape!: (...shape: number[]) => this;

  /**
   * Returns the value of each element of current array rounded to the nearest integer.
   */
  public round!: () => this;

  /**
   * Adds a multiple of one row multiplied by `scalar` to another inside current matrix.
   */
  public row_add!: (dest: number, source: number, scalar?: number) => this;

  /**
   * Multiplies all elements of current array with a specified `scalar`.
   * Accelerated with BLAS `?scal`.
   */
  public scale!: (scalar: number) => this;

  /**
   * Sets the element at `i, j, ..., n` to `value`.
   */
  public set!: (...args: number[]) => void;

  public shape: number[] = [0];

  /**
   * Returns the sign of each element of current array, indicating
   * whether it is positive, negative or zero.
   */
  public sign!: () => this;

  /**
   * Returns the sine of each element of current array.
   */
  public sin!: () => this;

  /**
   * Returns the hyperbolic sine of each element of current array.
   */
  public sinh!: () => this;

  /**
   * Slices the current array in the corresponding dimension
   */
  public slice!: (start?: number, step?: number, end?: number) => this;

  /**
   * Solves the equation AX = B (where A is current matrix and B is `x`).
   * Accelerated with LAPACK `?gesv`.
   */
  public solve!: <T extends NDArray>(x: T) => this;

  /**
   * Returns the positive square root of each element of current array.
   */
  public sqrt!: () => this;

  /**
   * Asserts if current matrix is square.
   */
  public square!: () => void;

  /**
   * Subtracts `x` from the current array.
   * Accelerated with BLAS `?axpy`.
   */
  public subtract!: <T extends NDArray>(y: T) => this;

  /**
   * Swaps two rows `i` and `j` in current matrix
   */
  public swap!: (i: number, j: number) => this;

  /**
   * Returns the tangent of each element of current array.
   */
  public tan!: () => this;

  /**
   * Returns the hyperbolic tangent of each element of current array.
   */
  public tanh!: () => this;

  /**
   * Converts current vector into a JavaScript array.
   */
  public toArray!: () => number[];

  /**
   * Converts current vector into a readable formatted string.
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

  /**
   * Returns the integer part of each element of current array,
   * removing any fractional digits.
   */
  public trunc!: () => this;

  public constructor(
    data?: any,
    options?: any
  ) {
    if (is_typed_array(data)) {
      this.data = data as TypedArray;
      this.shape = typeof options === 'object' && options.hasOwnProperty('shape') ? options.shape : [this.data.length];
      this.length = this.data.length;
      this.dtype = typeof options === 'object' && options.hasOwnProperty('dtype') ? options.dtype : get_dtype(data);
    } else if (data instanceof Array) {
      this.data = new (get_type(this.dtype))(flatten(data));
      this.shape = get_shape(data);
      this.length = this.data.length;
    } else if (data instanceof NDArray) {
      return data.copy();
    }
  }

  /**
   * Equivalent to this.get(0)
   */
  public get x(): number {
    return this.get(0);
  }

  /**
   * Equivalent to this.set(0, value)
   */
  public set x(value: number) {
    this.set(0, value);
  }

  /**
   * Equivalent to this.get(1)
   */
  public get y(): number {
    return this.get(1);
  }

  /**
   * Equivalent to this.set(1, value)
   */
  public set y(value: number) {
    this.set(1, value);
  }

  /**
   * Equivalent to this.get(2)
   */
  public get z(): number {
    return this.get(2);
  }

  /**
   * Equivalent to this.set(2, value)
   */
  public set z(value: number) {
    this.set(2, value);
  }

  /**
   * Equivalent to this.get(3)
   */
  public get w(): number {
    return this.get(3);
  }

  /**
   * Equivalent to this.set(3, value)
   */
  public set w(value: number) {
    this.set(3, value);
  }

  /**
   * Transposes current matrix (mirror across the diagonal).
   */
  public get T(): this {
    return this.transpose();
  }
}

import './abs';
import './acos';
import './acosh';
import './add';
import './angle';
import './array';
import './asin';
import './asinh';
import './atan';
import './atanh';
import './augment';
import './binOp';
import './cbrt';
import './ceil';
import './check';
import './combine';
import './copy';
import './cos';
import './cosh';
import './cross';
import './det';
import './diagonal';
import './dot';
import './each';
import './eig';
import './equals';
import './equidimensional';
import './equilateral';
import './exp';
import './expm1';
import './eye';
import './fill';
import './floor';
import './fround';
import './gauss';
import './get';
import './inv';
import './log';
import './log10';
import './log1p';
import './log2';
import './lu';
import './lu_factor';
import './magic';
import './map';
import './matrix';
import './max';
import './min';
import './multiply';
import './norm';
import './normalize';
import './ones';
import './pow';
import './product';
import './project';
import './push';
import './random';
import './range';
import './rank';
import './reduce';
import './reshape';
import './round';
import './row_add';
import './scale';
import './set';
import './sign';
import './sin';
import './sinh';
import './slice';
import './solve';
import './sqrt';
import './square';
import './subtract';
import './swap';
import './tan';
import './tanh';
import './toArray';
import './toString';
import './trace';
import './transpose';
import './trunc';
import './zeros';

try {
  (window as any).v = NDArray;
} catch (error) {}
