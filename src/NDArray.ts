import {
  INDArray,
  TypedArray,
  TypedArrayConstructor,
} from './types';
import { flatten, isTypedArray, shape, type } from './util';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

const {
  abs,
  acos,
  acosh,
  asin,
  asinh,
  atan,
  atanh,
  cbrt,
  ceil,
  cos,
  cosh,
  exp,
  expm1,
  floor,
  fround,
  log,
  log1p,
  log10,
  log2,
  pow,
  round,
  sign,
  sin,
  sinh,
  sqrt,
  tan,
  tanh,
  trunc,
} = Math;

export class NDArray implements INDArray {
  public data: TypedArray = new Float32Array(0);
  public length: number = 0;
  public shape: number[] = [0];
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

  /**
   * Returns the absolute value of each element of current array.
   */
  public abs(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = abs(this.data[i]);
    }

    return this;
  }

  /**
   * Returns the arccosine of each element of current array.
   */
  public acos(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = acos(this.data[i]);
    }

    return this;
  }

  /**
   * Returns the hyperbolic arccosine of each element of current array.
   */
  public acosh(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = acosh(this.data[i]);
    }

    return this;
  }

  /**
   * Adds `x` multiplied by `alpha` to the current array.
   */
  public add(x: NDArray, alpha: number = 1): this {
    this.equilateral(x);
    this.equidimensional(x);

    try {
      nblas.axpy(x.data, this.data, alpha);
    } catch (err) {
      const { data: d1, length: l1 } = this;
      const { data: d2} = x;

      let i: number;
      for (i = 0; i < l1; i += 1) {
        d1[i] += alpha * d2[i];
      }

    }

    return this;
  }

  /**
   * Returns the arcsine of each element of current array.
   */
  public asin(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = asin(this.data[i]);
    }

    return this;
  }

  /**
   * Returns the hyperbolic arcsine of each element of current array.
   */
  public asinh(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = asinh(this.data[i]);
    }

    return this;
  }

  /**
   * Returns the arctangent of each element of current array.
   */
  public atan(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = atan(this.data[i]);
    }

    return this;
  }

  /**
   * Returns the hyperbolic arctangent of each element of current array.
   */
  public atanh(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = atanh(this.data[i]);
    }

    return this;
  }

  /**
   * Returns the cube root of each element of current array.
   */
  public cbrt(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = cbrt(this.data[i]);
    }

    return this;
  }

  /**
   * Returns the smallest integer greater than or equal to each element of current array.
   */
  public ceil(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = ceil(this.data[i]);
    }

    return this;
  }

  /**
   * Makes a copy of the class and underlying data
   */
  public copy(): this {
    const copy: NDArray = Object.assign(Object.create(Object.getPrototypeOf(this)), this) as NDArray;

    copy.data = new this.type(this.data);
    copy.shape = this.shape;
    copy.length = this.length;
    copy.type = this.type;

    return copy as this;
  }

  /**
   * Returns the cosine of each element of current array.
   */
  public cos(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = cos(this.data[i]);
    }

    return this;
  }

  /**
   * Returns the hyperbolic cosine of each element of current array.
   */
  public cosh(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = cosh(this.data[i]);
    }

    return this;
  }

  /**
   * Performs dot multiplication
   */
  public dot(x: NDArray): number {
    this.equilateral(x);
    this.equidimensional(x);

    const { data: d1, length: l1 } = this;
    const { data: d2 } = x;

    try {
      return nblas.dot(d1, d2);
    } catch (err) {
      let result: number = 0;

      let i: number;
      for (i = 0; i < l1; i += 1) {
        result += d1[i] * d2[i];
      }

      return result;
    }
  }

  /**
   * Checks if current array and `x` are equal.
   */
  public equals(x: NDArray): boolean {
    this.equilateral(x);
    this.equidimensional(x);

    const { data: d1, length: l1 } = this;
    const { data: d2 } = x;

    let i: number;
    for (i = 0; i < l1; i += 1) {
      if (d1[i] !== d2[i]) {
        return false;
      }
    }

    return true;
  }

  /**
   * Asserts if current array and `x` have the same shape
   */
  public equidimensional(x: NDArray): void {
    const { shape: s1 } = this;
    const { shape: s2 } = x;

    if (!s1.every((dim: number, i: number) => dim === s2[i])) {
      throw new Error(`shapes ${s1} and ${s2} do not match`);
    }
  }

  /**
   * Asserts if current array and `x` have the same length
   */
  public equilateral(x: NDArray): void {
    const { length: l1 } = this;
    const { length: l2 } = x;

    if (l1 !== l2) {
      throw new Error(`lengths ${l1} and ${l2} do not match`);
    }
  }

  /**
   * Returns e^x of each element of current array, where x is the argument, and e is Euler's constant (2.718…), the base of the natural logarithm.
   */
  public exp(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = exp(this.data[i]);
    }

    return this;
  }

  /**
   * Returns subtracting 1 from exp(x) of each element of current array.
   */
  public expm1(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = expm1(this.data[i]);
    }

    return this;
  }

  /**
   * Fills the array with a scalar value, takes an optional `type` argument
   * which should be an instance of `TypedArray`.
   */
  public fill(value: number | ((index: number) => number) = 0): this {
    const { data, length } = this;

    let i: number;
    for (i = 0; i < length; i += 1) {
      data[i] = value instanceof Function ? value(i) : value;
    }

    return this;
  }

  /**
   * Returns the largest integer less than or equal to a number of each element of current array.
   */
  public floor(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = floor(this.data[i]);
    }

    return this;
  }

  /**
   * Returns the nearest single precision float representation of each element of current array.
   */
  public fround(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = fround(this.data[i]);
    }

    return this;
  }

  /**
   * Returns the natural logarithm (log_e, also ln) of each element of current array.
   */
  public log(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = log(this.data[i]);
    }

    return this;
  }

  /**
   * Returns the natural logarithm (log_e, also ln) of 1 + x for each element of current array.
   */
  public log1p(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = log1p(this.data[i]);
    }

    return this;
  }

  /**
   * Returns the base 10 logarithm of each element of current array.
   */
  public log10(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = log10(this.data[i]);
    }

    return this;
  }

  /**
   * Returns the base 2 logarithm of each element of current array.
   */
  public log2(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = log2(this.data[i]);
    }

    return this;
  }

  /**
   * Calculates the magnitude of an array (also called L2 norm or Euclidean length).
   */
  public magnitude(): number {
    const { length } = this;
    if (length === 0) {
      return 0;
    }

    const { data } = this;
    try {
      return nblas.nrm2(data);
    } catch (err) {
      let result: number = 0;

      let i: number;
      for (i = 0; i < length; i += 1) {
        result += data[i] * data[i];
      }

      return Math.sqrt(result);
    }
  }

  /**
   * Gets the maximum value (largest) element of current array.
   */
  public max(): number {
    const { data } = this;
    try {
      return data[nblas.iamax(data)];
    } catch (err) {
      const { length } = this;
      let result: number = Number.NEGATIVE_INFINITY;

      let i: number;
      for (i = 0; i < length; i += 1) {
        result = result < data[i] ? data[i] : result;
      }

      return result;
    }
  }

  /**
   * Gets the minimum value (smallest) element of current array.
   */
  public min(): number {
    const { data, length } = this;

    let result: number = Number.POSITIVE_INFINITY;

    let i: number;
    for (i = 0; i < length; i += 1) {
      result = result < data[i] ? result : data[i];
    }

    return result;
  }

  /**
   * Returns each element of current array to the exponent power, that is, element^exponent.
   */
  public pow(exponent: number): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = pow(this.data[i], exponent);
    }

    return this;
  }

  /**
   * Hadamard product
   */
  public product(x: NDArray): this {
    this.equilateral(x);
    this.equidimensional(x);

    const { data: d1, length: l1 } = this;
    const { data: d2 } = x;

    let i: number;
    for (i = 0; i < l1; i += 1) {
      d1[i] *= d2[i];
    }

    return this;
  }

  /**
   * Reshapes the array
   */
  public reshape(s: number[]): this {
    const { length } = this;
    if (s.reduce((sum: number, dim: number) => sum * dim, 1) !== length) {
      throw new Error(`shape ${shape} does not match length ${length}`);
    }

    this.shape = s;

    return this;
  }

  /**
   * Returns the value of each element of current array rounded to the nearest integer.
   */
  public round(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = round(this.data[i]);
    }

    return this;
  }

  /**
   * Multiplies all elements of current array with a specified `scalar`.
   */
  public scale(scalar: number): this {
    const { data } = this;

    try {
      nblas.scal(data, scalar);
    } catch (err) {
      const { length } = this;

      let i: number;
      for (i = 0; i < length; i += 1) {
        data[i] *= scalar;
      }
    }

    return this;
  }

  /**
   * Returns the sign of each element of current array, indicating whether it is positive, negative or zero.
   */
  public sign(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = sign(this.data[i]);
    }

    return this;
  }

  /**
   * Returns the sine of each element of current array.
   */
  public sin(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = sin(this.data[i]);
    }

    return this;
  }

  /**
   * Returns the hyperbolic sine of each element of current array.
   */
  public sinh(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = sinh(this.data[i]);
    }

    return this;
  }

  /**
   * Returns the positive square root of each element of current array.
   */
  public sqrt(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = sqrt(this.data[i]);
    }

    return this;
  }

  /**
   * Subtracts `x` to the current array.
   */
  public subtract(x: NDArray): this {
    return this.add(x, -1);
  }

  /**
   * Returns the tangent of each element of current array.
   */
  public tan(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = tan(this.data[i]);
    }

    return this;
  }

  /**
   * Returns the hyperbolic tangent of each element of current array.
   */
  public tanh(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = tanh(this.data[i]);
    }

    return this;
  }

  /**
   * Returns the integer part of each element of current array, removing any fractional digits.
   */
  public trunc(): this {
    const { length: l1 } = this;

    let i: number;
    for (i = 0; i < l1; i++) {
      this.data[i] = trunc(this.data[i]);
    }

    return this;
  }
}

try {
  (window as any).NDArray = NDArray;
} catch (error) {}
