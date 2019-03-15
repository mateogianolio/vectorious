import {
  INDArray,
  TypedArray,
  TypedArrayConstructor,
} from './types';
import { flatten, isTypedArray, shape, type } from './util';

let nblas: any;
try {
  nblas = require('nblas');
} catch (_) {}

export class NDArray implements INDArray {
  public data: TypedArray = new Float64Array(0);
  public length: number = 0;
  public shape: number[] = [0];
  public type: TypedArrayConstructor = Float64Array;

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
      this.data = new Float64Array(flatten(data));
      this.shape = shape(data);
      this.length = this.data.length;
    } else if (data instanceof NDArray) {
      return data.copy();
    }
  }

  /**
   * Adds `x` multiplied by `alpha` to the current array.
   */
  public add(x: NDArray, alpha: number = 1): this {
    this.equilateral(x);
    this.equidimensional(x);

    try {
      nblas.axpy(x.data, this.data, alpha);
    } catch (_) {
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
   * Performs dot multiplication
   */
  public dot(x: NDArray): number {
    this.equilateral(x);
    this.equidimensional(x);

    const { data: d1, length: l1 } = this;
    const { data: d2 } = x;

    try {
      return nblas.dot(d1, d2);
    } catch (_) {
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
    } catch (_) {
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
    } catch (_) {
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
   * Multiplies all elements of current array with a specified `scalar`.
   */
  public scale(scalar: number): this {
    const { data } = this;

    try {
      nblas.scal(data, scalar);
    } catch (_) {
      const { length } = this;

      let i: number;
      for (i = 0; i < length; i += 1) {
        data[i] *= scalar;
      }
    }

    return this;
  }

  /**
   * Subtracts `x` to the current array.
   */
  public subtract(x: NDArray): this {
    return this.add(x, -1);
  }
}

try {
  (window as any).NDArray = NDArray;
} catch (error) {}
