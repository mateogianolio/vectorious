import './types';

let nblas: any;
try {
  nblas = require('nblas');
} catch (_) {}

const flatten = (input: any): number[] => input
  .reduce((acc: any, next: any) => acc
    .concat(Array.isArray(next)
      ? flatten(next)
      : next),
  []);

const shape = (input: any): number[] => Array.isArray(input)
  ? [input.length].concat(shape(input[0]))
  : [];

export default class NDArray implements NDInterface {
  type: TypedArrayConstructor = Float64Array;
  shape: number[] = [0];
  length: number = 0;
  data: TypedArray = new Float64Array(0);

  constructor(
    data?: any,
    options?: {
      shape: number[],
    }
  ) {
    if (ArrayBuffer.isView(data)) {
      this.data = data as TypedArray;
      this.shape = typeof options === 'object' ? options.shape : [this.data.length];
      this.length = this.data.length;
      this.type = data.constructor as TypedArrayConstructor;
    } else if (data instanceof Array) {
      this.data = new Float64Array(flatten(data));
      this.shape = shape(data);
      this.length = this.data.length;
    } else if (data instanceof NDArray) {
      return data.copy();
    }
  }

  /**
   * Makes a copy of the class and underlying data
   */
  copy(): this {
    const copy = Object.assign(Object.create(this), this);

    copy.data = new this.type(this.data);
    copy.shape = this.shape;
    copy.length = this.length;
    copy.type = this.type;

    return copy;
  }

  /**
   * Fills the array with a scalar value, takes an optional `type` argument
   * which should be an instance of `TypedArray`.
   */
  fill(value: number | ((index: number) => number) = 0): this {
    const { data, length } = this;

    for (let i = 0; i < length; i++) {
      data[i] = value instanceof Function ? value(i) : value;
    }

    return this;
  }

  /**
   * Multiplies all elements of current array with a specified `scalar`.
   */
  scale(scalar: number): this {
    const { data } = this;

    if (nblas && nblas.scal) {
      nblas.scal(data, scalar);
      return this;
    }

    const { length } = this;

    for (let i = 0; i < length; i++) {
      data[i] *= scalar;
    };

    return this;
  }

  /**
   * Adds `x` multiplied by `alpha` to the current array.
   */
  add(x: NDArray, alpha: number = 1): this {
    this.equilateral(x);
    this.equidimensional(x);

    if (nblas && nblas.axpy) {
      nblas.axpy(x.data, this.data, alpha);
      return this;
    }

    const { data: d1, length: l1 } = this;
    const { data: d2} = x;

    for (let i = 0; i < l1; i++) {
      d1[i] += alpha * d2[i];
    }

    return this;
  }

  /**
   * Subtracts `x` to the current array.
   */
  subtract(x: NDArray): this {
    return this.add(x, -1);
  }

  /**
   * Hadamard product
   */
  product(x: NDArray): this {
    this.equilateral(x);
    this.equidimensional(x);

    const { data: d1, length: l1 } = this;
    const { data: d2 } = x;

    for (let i = 0; i < l1; i++) {
      d1[i] *= d2[i];
    }

    return this;
  }

  /**
   * Performs dot multiplication
   */
  dot(x: NDArray): number {
    this.equilateral(x);
    this.equidimensional(x);

    const { data: d1, length: l1 } = this;
    const { data: d2 } = x;

    if (nblas && nblas.dot) {
      return nblas.dot(d1, d2);
    }

    let result = 0;

    for (let i = 0; i < l1; i++) {
      result += d1[i] * d2[i];
    }

    return result;
  }

  /**
   * Calculates the magnitude of an array (also called L2 norm or Euclidean length).
   */
  magnitude(): number {
    const { length } = this;
    if (!length) {
      return 0;
    }

    const { data } = this;
    if (nblas && nblas.nrm2) {
      return nblas.nrm2(data);
    }

    let result = 0;

    for (let i = 0; i < length; i++) {
      result += data[i] * data[i];
    }

    return Math.sqrt(result);
  }

  /**
   * Gets the maximum value (largest) element of current array.
   */
  max(): number {
    const { data } = this;
    if (nblas && nblas.iamax) {
      return data[nblas.iamax(data)];
    }

    const { length } = this;
    let result = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < length; i++) {
      result = result < data[i] ? data[i] : result;
    }

    return result;
  }

  /**
   * Gets the minimum value (smallest) element of current array.
   */
  min(): number {
    const { data, length } = this;

    let result = Number.POSITIVE_INFINITY;
    for (let i = 0; i < length; i++) {
      result = result < data[i] ? result : data[i];
    }

    return result;
  }

  /**
   * Reshapes the array
   */
  reshape(shape: number[]): this {
    const { length } = this;
    if (shape.reduce((sum, dim) => sum * dim, 1) !== length) {
      throw new Error(`shape ${shape} does not match length ${length}`);
    }

    this.shape = shape;
    return this;
  }

  /**
   * Asserts if current array and `x` have the same length
   */
  equilateral(x: NDArray): void {
    const { length: l1 } = this;
    const { length: l2 } = x;

    if (l1 !== l2) {
      throw new Error(`lengths ${l1} and ${l2} do not match`);
    }
  }

  /**
   * Asserts if current array and `x` have the same shape
   */
  equidimensional(x: NDArray): void {
    const { shape: s1 } = this;
    const { shape: s2 } = x;

    if (!s1.every((dim, i) => dim === s2[i])) {
      throw new Error(`shapes ${s1} and ${s2} do not match`);
    }
  }

  /**
   * Checks if current array and `x` are equal.
   */
  equals(x: NDArray): boolean {
    this.equilateral(x);
    this.equidimensional(x);

    const { data: d1, length: l1 } = this;
    const { data: d2 } = x;

    for (let i = 0; i < l1; i++) {
      if (d1[i] !== d2[i]) {
        return false;
      }
    }

    return true;
  }
}

try {
  (<any>window).NDArray = NDArray;
} catch (error) {}
