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
   * Performs dot multiplication with `x` and `y`.
   * Accelerated with BLAS `?dot`.
   */
  public static dot: <T extends NDArray>(x: T, y: T) => number;

  /**
   * Equivalent to `TypedArray.prototype.forEach`.
   */
  public static each: <T extends NDArray>(x: T, f: (value: number, i: number, src: TypedArray) => void) => T;

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
   * Gets the element at `i, j, ..., n` from `x`
   */
  public static get: <T extends NDArray>(x: T, ...indices: number[]) => number;

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
   * Equivalent to `TypedArray.prototype.map`.
   */
  public static map: <T extends NDArray>(x: T, f: (value: number, i: number, src: TypedArray) => number) => T;

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
   * Calculates the norm of current array (also called L2 norm or Euclidean length).
   * Accelerated with BLAS `?nrm2`.
   */
  public static norm: <T extends NDArray>(x: T) => number;

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
   * Returns the positive square root of each element of `x`.
   */
  public static sqrt: <T extends NDArray>(x: T) => T;

  /**
   * Subtracts `y` from `x`.
   */
  public static subtract: <T extends NDArray>(x: T, y: T) => T;

  /**
   * Returns the tangent of each element of `x`.
   */
  public static tan: <T extends NDArray>(x: T) => T;

  /**
   * Returns the hyperbolic tangent of each element of `x`.
   */
  public static tanh: <T extends NDArray>(x: T) => T;

  /**
   * Returns the integer part of each element of `x`,
   * removing any fractional digits.
   */
  public static trunc: <T extends NDArray>(x: T) => T;

  /**
   * Creates an array containing zeros (`0`) of shape `shape`
   */
  public static zeros: <T extends NDArray>(...shape: number[]) => T;

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
  public add!: (y: NDArray, alpha?: number) => this;

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
   * Perform binary operation `f` on `x` in the current array.
   */
  public binOp!: (y: NDArray, f: (a: number, b: number, index: number) => number) => this;

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

  public data: TypedArray = new Float32Array(0);

  /**
   * Performs dot multiplication with `x` and current array
   * Accelerated with BLAS `?dot`.
   */
  public dot!: (y: NDArray) => number;

  public dtype: DType = 'float32';

  /**
   * Equivalent to `TypedArray.prototype.forEach`.
   */
  public each!: (f: (value: number, i: number, src: TypedArray) => void) => this;

  /**
   * Checks if current array and `x` are equal.
   */
  public equals!: (y: NDArray) => boolean;

  /**
   * Asserts if current array and `x` have the same shape
   */
  public equidimensional!: (y: NDArray) => void;

  /**
   * Asserts if current array and `x` have the same length
   */
  public equilateral!: (y: NDArray) => void;

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
   * Gets the element at `i, j, ..., n` from current vector.
   */
  public get!: (...indices: number[]) => number;

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
   * Calculates the norm of current array (also called L2 norm or Euclidean length).
   * Accelerated with BLAS `?nrm2`.
   */
  public norm!: () => number;

  /**
   * Returns each element of current array to the exponent power, that is, element^exponent.
   */
  public pow!: (exponent: number) => this;

  /**
   * Hadamard product of current matrix and `x`
   */
  public product!: (y: NDArray) => this;

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
   * Returns the positive square root of each element of current array.
   */
  public sqrt!: () => this;

  /**
   * Subtracts `x` from the current array.
   * Accelerated with BLAS `?axpy`.
   */
  public subtract!: (y: NDArray) => this;

  /**
   * Returns the tangent of each element of current array.
   */
  public tan!: () => this;

  /**
   * Returns the hyperbolic tangent of each element of current array.
   */
  public tanh!: () => this;

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
}

import './abs';
import './acos';
import './acosh';
import './add';
import './asin';
import './asinh';
import './atan';
import './atanh';
import './binOp';
import './cbrt';
import './ceil';
import './check';
import './copy';
import './cos';
import './cosh';
import './dot';
import './each';
import './equals';
import './equidimensional';
import './equilateral';
import './exp';
import './expm1';
import './eye';
import './fill';
import './floor';
import './fround';
import './get';
import './log';
import './log10';
import './log1p';
import './log2';
import './map';
import './max';
import './min';
import './norm';
import './ones';
import './pow';
import './product';
import './random';
import './range';
import './reduce';
import './reshape';
import './round';
import './scale';
import './set';
import './sign';
import './sin';
import './sinh';
import './slice';
import './sqrt';
import './subtract';
import './tan';
import './tanh';
import './trunc';
import './zeros';

try {
  (window as any).NDArray = NDArray;
} catch (error) {}
