import {
  INDArray,
  TypedArray,
  TypedArrayConstructor,
} from '../types';
import {
  flatten,
  isTypedArray,
  shape,
  type,
} from '../util';

export class NDArray implements INDArray {
  /**
   * Returns the absolute value of each element of `x`.
   * ![](media://NDArray/abs.png)
   */
  public static abs: <T extends NDArray>(x: T) => T;

  /**
   * Returns the arccosine of each element of `x`.
   * ![](media://NDArray/acos.png)
   */
  public static acos: <T extends NDArray>(x: T) => T;

  /**
   * Returns the hyperbolic arccosine of each element of `x`.
   * ![](media://NDArray/acosh.png)
   */
  public static acosh: <T extends NDArray>(x: T) => T;

  /**
   * Adds `y` multiplied by `alpha` to `x`.
   * Accelerated with BLAS `?axpy`.
   * ![](media://NDArray/add.png)
   */
  public static add: <T extends NDArray>(x: T, y: T, alpha?: number) => T;

  /**
   * Returns the arcsine of each element of `x`.
   * ![](media://NDArray/asin.png)
   */
  public static asin: <T extends NDArray>(x: T) => T;

  /**
   * Returns the hyperbolic arcsine of each element of `x`.
   * ![](media://NDArray/asinh.png)
   */
  public static asinh: <T extends NDArray>(x: T) => T;

  /**
   * Returns the arctangent of each element of `x`.
   * ![](media://NDArray/atan.png)
   */
  public static atan: <T extends NDArray>(x: T) => T;

  /**
   * Returns the hyperbolic arctangent of each element of `x`.
   * ![](media://NDArray/atanh.png)
   */
  public static atanh: <T extends NDArray>(x: T) => T;

  /**
   * Perform binary operation `f` on `y` in `x`.
   * ![](media://NDArray/binOp.png)
   */
  public static binOp: <T extends NDArray>(x: T, y: T, f: (a: number, b: number, index: number) => number) => T;

  /**
   * Returns the cube root of each element of `x`.
   * ![](media://NDArray/cbrt.png)
   */
  public static cbrt: <T extends NDArray>(x: T) => T;

  /**
   * Returns smallest integer greater than or equal to of each element of `x`.
   * ![](media://NDArray/ceil.png)
   */
  public static ceil: <T extends NDArray>(x: T) => T;

  /**
   * Asserts if indices `i, j, ..., n` are within the bounds of `x`
   * ![](media://NDArray/check.png)
   */
  public static check: <T extends NDArray>(x: T, ...indices: number[]) => void;

  /**
   * Makes a copy of `x`
   * ![](media://NDArray/copy.png)
   */
  public static copy: <T extends NDArray>(x: T) => T;

  /**
   * Returns the cosine of each element of `x`.
   * ![](media://NDArray/cos.png)
   */
  public static cos: <T extends NDArray>(x: T) => T;

  /**
   * Returns the hyperbolic cosine of each element of `x`.
   * ![](media://NDArray/cosh.png)
   */
  public static cosh: <T extends NDArray>(x: T) => T;

  /**
   * Performs dot multiplication with `x` and `y`.
   * Accelerated with BLAS `?dot`.
   * ![](media://NDArray/dot.png)
   */
  public static dot: <T extends NDArray>(x: T, y: T) => number;

  /**
   * Equivalent to `TypedArray.prototype.forEach`.
   * ![](media://NDArray/each.png)
   */
  public static each: <T extends NDArray>(x: T, f: (value: number, i: number, src: TypedArray) => void) => T;

  /**
   * Checks if `x` and `y` are equal.
   * ![](media://NDArray/equals.png)
   */
  public static equals: <T extends NDArray>(x: T, y: T) => boolean;

  /**
   * Asserts if `x` and `y` have the same shape
   * ![](media://NDArray/equidimensional.png)
   */
  public static equidimensional: <T extends NDArray>(x: T, y: T) => void;

  /**
   * Asserts if `x` and `y` have the same length
   * ![](media://NDArray/equilateral.png)
   */
  public static equilateral: <T extends NDArray>(x: T, y: T) => void;

  /**
   * Returns e^x of each element of `x`, where x is the argument,
   * and e is Euler's constant (2.718…), the base of the natural logarithm.
   * ![](media://NDArray/exp.png)
   */
  public static exp: <T extends NDArray>(x: T) => T;

  /**
   * Returns subtracting 1 from exp(x) of each element of `x`.
   * ![](media://NDArray/expm1.png)
   */
  public static expm1: <T extends NDArray>(x: T) => T;

  /**
   * Creates an identity matrix of size `n` and type `type`.
   * ![](media://NDArray/eye.png)
   */
  public static eye: <T extends NDArray>(n: number) => T;

  /**
   * Fills `x` with a scalar value
   * ![](media://NDArray/fill.png)
   */
  public static fill: <T extends NDArray>(x: T, value: number | ((index: number) => number)) => T;

  /**
   * Returns the largest integer less than or equal to a number of each element of `x`.
   * ![](media://NDArray/floor.png)
   */
  public static floor: <T extends NDArray>(x: T) => T;

  /**
   * Returns the nearest single precision float representation of each element of `x`.
   * ![](media://NDArray/fround.png)
   */
  public static fround: <T extends NDArray>(x: T) => T;

  /**
   * Gets the element at `i, j, ..., n` from `x`
   * ![](media://NDArray/get.png)
   */
  public static get: <T extends NDArray>(x: T, ...indices: number[]) => number;

  /**
   * Returns the natural logarithm (log_e, also ln) of each element of `x`.
   * ![](media://NDArray/log.png)
   */
  public static log: <T extends NDArray>(x: T) => T;

  /**
   * Returns the natural logarithm (log_e, also ln) of 1 + x for each element of `x`.
   * ![](media://NDArray/log10.png)
   */
  public static log10: <T extends NDArray>(x: T) => T;

  /**
   * Returns the base 2 logarithm of each element of `x`.
   * ![](media://NDArray/log1p.png)
   */
  public static log1p: <T extends NDArray>(x: T) => T;

  /**
   * Returns the base 10 logarithm of each element of `x`.
   * ![](media://NDArray/log2.png)
   */
  public static log2: <T extends NDArray>(x: T) => T;

  /**
   * Equivalent to `TypedArray.prototype.map`.
   * ![](media://NDArray/map.png)
   */
  public static map: <T extends NDArray>(x: T, f: (value: number, i: number, src: TypedArray) => number) => T;

  /**
   * Gets the maximum value (largest) element of `x`.
   * Accelerated with BLAS `i?amax`.
   * ![](media://NDArray/max.png)
   */
  public static max: <T extends NDArray>(x: T) => number;

  /**
   * Gets the minimum value (smallest) element of `x`.
   * ![](media://NDArray/min.png)
   */
  public static min: <T extends NDArray>(x: T) => number;

  /**
   * Calculates the norm of current array (also called L2 norm or Euclidean length).
   * Accelerated with BLAS `?nrm2`.
   * ![](media://NDArray/norm.png)
   */
  public static norm: <T extends NDArray>(x: T) => number;

  /**
   * Creates an array containing ones (`1`) of shape `shape`
   * ![](media://NDArray/ones.png)
   */
  public static ones: <T extends NDArray>(...shape: number[]) => T;

  /**
   * Returns each element of `x` to the exponent power, that is, element^exponent.
   * ![](media://NDArray/pow.png)
   */
  public static pow: <T extends NDArray>(x: T, exponent: number) => T;

  /**
   * Hadamard product of `x` and `y`
   * ![](media://NDArray/product.png)
   */
  public static product: <T extends NDArray>(x: T, y: T) => T;

  /**
   * Creates a vector containing random samples from a uniform distribution over `[0, 1)` of shape `shape`
   * ![](media://NDArray/random.png)
   */
  public static random: <T extends NDArray>(...shape: number[]) => T;

  /**
   * Creates an array containing a range (can be either ascending or descending)
   * of numbers specified by the arguments provided (e.g. `NDArray.range(0, .5, 2)`
   * gives an array containing all numbers in the interval `[0, 2)` separated by
   * steps of `0.5`)
   * ![](media://NDArray/range.png)
   */
  public static range: <T extends NDArray>(...args: number[]) => T;

  /**
   * Equivalent to `TypedArray.prototype.reduce`.
   * ![](media://NDArray/reduce.png)
   */
  public static reduce: (
    x: NDArray,
    f: (acc: number, value: number, i: number, src: TypedArray) => number,
    initialValue?: number
  ) => number;

  /**
   * Reshapes `x`
   * ![](media://NDArray/reshape.png)
   */
  public static reshape: <T extends NDArray>(x: T, s: number[]) => T;

  /**
   * Returns the value of each element of `x` rounded to the nearest integer.
   * ![](media://NDArray/round.png)
   */
  public static round: <T extends NDArray>(x: T) => T;

  /**
   * Multiplies all elements of `x` with a specified `scalar`.
   * Accelerated with BLAS `?scal`.
   * ![](media://NDArray/scale.png)
   */
  public static scale: <T extends NDArray>(x: T, scalar: number) => T;

  /**
   * Sets the element at `i, j, ..., n` to `value`.
   * ![](media://NDArray/set.png)
   */
  public static set: <T extends NDArray>(x: T, ...args: number[]) => void;

  /**
   * Returns the sign of each element of `x`, indicating
   * whether it is positive, negative or zero.
   * ![](media://NDArray/sign.png)
   */
  public static sign: <T extends NDArray>(x: T) => T;

  /**
   * Returns the sine of each element of `x`.
   * ![](media://NDArray/sin.png)
   */
  public static sin: <T extends NDArray>(x: T) => T;

  /**
   * Returns the hyperbolic sine of each element of `x`.
   * ![](media://NDArray/sinh.png)
   */
  public static sinh: <T extends NDArray>(x: T) => T;

  /**
   * Slices `x` in the corresponding dimesion
   * ![](media://NDArray/slice.png)
   */
  public static slice: <T extends NDArray>(x: T, start?: number, step?: number, end?: number) => T;

  /**
   * Returns the positive square root of each element of `x`.
   * ![](media://NDArray/sqrt.png)
   */
  public static sqrt: <T extends NDArray>(x: T) => T;

  /**
   * Subtracts `y` from `x`.
   * ![](media://NDArray/subtract.png)
   */
  public static subtract: <T extends NDArray>(x: T, y: T) => T;

  /**
   * Returns the tangent of each element of `x`.
   * ![](media://NDArray/tan.png)
   */
  public static tan: <T extends NDArray>(x: T) => T;

  /**
   * Returns the hyperbolic tangent of each element of `x`.
   * ![](media://NDArray/tanh.png)
   */
  public static tanh: <T extends NDArray>(x: T) => T;

  /**
   * Returns the integer part of each element of `x`,
   * removing any fractional digits.
   * ![](media://NDArray/trunc.png)
   */
  public static trunc: <T extends NDArray>(x: T) => T;

  /**
   * Creates an array containing zeros (`0`) of shape `shape`
   * ![](media://NDArray/zeros.png)
   */
  public static zeros: <T extends NDArray>(...shape: number[]) => T;

  /**
   * Returns the absolute value of each element of current array.
   * ![](media://NDArray/abs.png)
   */
  public abs!: () => this;

  /**
   * Returns the arccosine of each element of current array.
   * ![](media://NDArray/acos.png)
   */
  public acos!: () => this;

  /**
   * Returns the hyperbolic arccosine of each element of current array.
   * ![](media://NDArray/acosh.png)
   */
  public acosh!: () => this;

  /**
   * Adds `x` multiplied by `alpha` to the current array.
   * Accelerated with BLAS `?axpy`.
   * ![](media://NDArray/add.png)
   */
  public add!: (y: NDArray, alpha?: number) => this;

  /**
   * Returns the arcsine of each element of current array.
   * ![](media://NDArray/asin.png)
   */
  public asin!: () => this;

  /**
   * Returns the hyperbolic arcsine of each element of current array.
   * ![](media://NDArray/asinh.png)
   */
  public asinh!: () => this;

  /**
   * Returns the arctangent of each element of current array.
   * ![](media://NDArray/atan.png)
   */
  public atan!: () => this;

  /**
   * Returns the hyperbolic arctangent of each element of current array.
   * ![](media://NDArray/atanh.png)
   */
  public atanh!: () => this;

  /**
   * Perform binary operation `f` on `x` in the current array.
   * ![](media://NDArray/binOp.png)
   */
  public binOp!: (y: NDArray, f: (a: number, b: number, index: number) => number) => this;

  /**
   * Returns the cube root of each element of current array.
   * ![](media://NDArray/cbrt.png)
   */
  public cbrt!: () => this;

  /**
   * Returns smallest integer greater than or equal to of each element of current array.
   * ![](media://NDArray/ceil.png)
   */
  public ceil!: () => this;

  /**
   * Asserts if indices `i, j, ..., n` are within the bounds of current array
   * ![](media://NDArray/check.png)
   */
  public check!: (...indices: number[]) => void;

  /**
   * Makes a copy of the class and underlying data
   * ![](media://NDArray/copy.png)
   */
  public copy!: () => this;

  /**
   * Returns the cosine of each element of current array.
   * ![](media://NDArray/cos.png)
   */
  public cos!: () => this;

  /**
   * Returns the hyperbolic cosine of each element of current array.
   * ![](media://NDArray/cosh.png)
   */
  public cosh!: () => this;

  public data: TypedArray = new Float32Array(0);

  /**
   * Performs dot multiplication with `x` and current array
   * Accelerated with BLAS `?dot`.
   * ![](media://NDArray/dot.png)
   */
  public dot!: (y: NDArray) => number;

  /**
   * Equivalent to `TypedArray.prototype.forEach`.
   * ![](media://NDArray/each.png)
   */
  public each!: (f: (value: number, i: number, src: TypedArray) => void) => this;

  /**
   * Checks if current array and `x` are equal.
   * ![](media://NDArray/equals.png)
   */
  public equals!: (y: NDArray) => boolean;

  /**
   * Asserts if current array and `x` have the same shape
   * ![](media://NDArray/equidimensional.png)
   */
  public equidimensional!: (y: NDArray) => void;

  /**
   * Asserts if current array and `x` have the same length
   * ![](media://NDArray/equilateral.png)
   */
  public equilateral!: (y: NDArray) => void;

  /**
   * Returns e^x of each element of current array, where x is the argument,
   * and e is Euler's constant (2.718…), the base of the natural logarithm.
   * ![](media://NDArray/exp.png)
   */
  public exp!: () => this;

  /**
   * Returns subtracting 1 from exp(x) of each element of current array.
   * ![](media://NDArray/expm1.png)
   */
  public expm1!: () => this;

  /**
   * Fills the current array with a scalar value
   * ![](media://NDArray/fill.png)
   */
  public fill!: (value: number | ((index: number) => number)) => this;

  /**
   * Returns the largest integer less than or equal to a number of each element of current array.
   * ![](media://NDArray/floor.png)
   */
  public floor!: () => this;

  /**
   * Returns the nearest single precision float representation of each element of current array.
   * ![](media://NDArray/fround.png)
   */
  public fround!: () => this;

  /**
   * Gets the element at `i, j, ..., n` from current vector.
   * ![](media://NDArray/get.png)
   */
  public get!: (...indices: number[]) => number;

  public length: number = 0;

  /**
   * Returns the natural logarithm (log_e, also ln) of each element of current array.
   * ![](media://NDArray/log.png)
   */
  public log!: () => this;

  /**
   * Returns the natural logarithm (log_e, also ln) of 1 + x for each element of current array.
   * ![](media://NDArray/log10.png)
   */
  public log10!: () => this;

  /**
   * Returns the base 2 logarithm of each element of current array.
   * ![](media://NDArray/log1p.png)
   */
  public log1p!: () => this;

  /**
   * Returns the base 10 logarithm of each element of current array.
   * ![](media://NDArray/log2.png)
   */
  public log2!: () => this;

  /**
   * Equivalent to `TypedArray.prototype.map`.
   * ![](media://NDArray/map.png)
   */
  public map!: (f: (value: number, i: number, src: TypedArray) => number) => this;

  /**
   * Gets the maximum value (smallest) element of current array.
   * ![](media://NDArray/max.png)
   */
  public max!: () => number;

  /**
   * Gets the minimum value (smallest) element of current array.
   * ![](media://NDArray/min.png)
   */
  public min!: () => number;

  /**
   * Calculates the norm of current array (also called L2 norm or Euclidean length).
   * Accelerated with BLAS `?nrm2`.
   * ![](media://NDArray/norm.png)
   */
  public norm!: () => number;

  /**
   * Returns each element of current array to the exponent power, that is, element^exponent.
   * ![](media://NDArray/pow.png)
   */
  public pow!: (exponent: number) => this;

  /**
   * Hadamard product of current matrix and `x`
   * ![](media://NDArray/product.png)
   */
  public product!: (y: NDArray) => this;

  /**
   * Equivalent to `TypedArray.prototype.reduce`.
   * ![](media://NDArray/reduce.png)
   */
  public reduce!: (
    f: (acc: number, value: number, i: number, src: TypedArray) => number,
    initialValue?: number
  ) => number;

  /**
   * Reshapes current array
   * ![](media://NDArray/reshape.png)
   */
  public reshape!: (s: number[]) => this;

  /**
   * Returns the value of each element of current array rounded to the nearest integer.
   * ![](media://NDArray/round.png)
   */
  public round!: () => this;

  /**
   * Multiplies all elements of current array with a specified `scalar`.
   * Accelerated with BLAS `?scal`.
   * ![](media://NDArray/scale.png)
   */
  public scale!: (scalar: number) => this;

  /**
   * Sets the element at `i, j, ..., n` to `value`.
   * ![](media://NDArray/set.png)
   */
  public set!: (...args: number[]) => void;

  public shape: number[] = [0];

  /**
   * Returns the sign of each element of current array, indicating
   * whether it is positive, negative or zero.
   * ![](media://NDArray/sign.png)
   */
  public sign!: () => this;

  /**
   * Returns the sine of each element of current array.
   * ![](media://NDArray/sin.png)
   */
  public sin!: () => this;

  /**
   * Returns the hyperbolic sine of each element of current array.
   * ![](media://NDArray/sinh.png)
   */
  public sinh!: () => this;

  /**
   * Slices the current array in the corresponding dimesion
   * ![](media://NDArray/slice.png)
   */
  public slice!: (start?: number, step?: number, end?: number) => this;

  /**
   * Returns the positive square root of each element of current array.
   * ![](media://NDArray/sqrt.png)
   */
  public sqrt!: () => this;

  /**
   * Subtracts `x` from the current array.
   * Accelerated with BLAS `?axpy`.
   * ![](media://NDArray/subtract.png)
   */
  public subtract!: (y: NDArray) => this;

  /**
   * Returns the tangent of each element of current array.
   * ![](media://NDArray/tan.png)
   */
  public tan!: () => this;

  /**
   * Returns the hyperbolic tangent of each element of current array.
   * ![](media://NDArray/tanh.png)
   */
  public tanh!: () => this;

  /**
   * Returns the integer part of each element of current array,
   * removing any fractional digits.
   * ![](media://NDArray/trunc.png)
   */
  public trunc!: () => this;

  public type: TypedArrayConstructor = Float32Array;

  public constructor(
    data?: any,
    options?: {
      shape: number[];
    }
  ) {
    if (isTypedArray(data)) {
      this.data = data as TypedArray;
      this.shape = typeof options === 'object' ? options.shape : [this.data.length];
      this.length = this.data.length;
      this.type = type(data);
    } else if (data instanceof Array) {
      this.data = new Float32Array(flatten(data));
      this.shape = shape(data);
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
import './norm';
import './map';
import './max';
import './min';
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
