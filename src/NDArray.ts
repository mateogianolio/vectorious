import './types';

let nblas: any;
try {
  nblas = require('nblas');
} catch (_) {}

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
      this.data = new Float64Array(([] as number[]).concat(...data));
      this.shape = [data.length];
      if ((data[0] as number[]).length) {
        this.shape.push((data[0] as number[]).length);
      }

      this.length = this.data.length;
    } else if (data instanceof NDArray) {
      return data.copy();
    } else {
      this.data = new Float64Array(0);
      this.shape = [0];
      this.length = 0;
      this.type = Float64Array;
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
    const { shape: s1, length: l1 } = this;
    const { shape: s2, length: l2 } = x;

    if (l1 !== l2 || !s1.every((dim, i) => dim === s2[i])) {
      throw new Error('sizes do not match');
    }

    if (nblas && nblas.axpy) {
      nblas.axpy(x.data, this.data, alpha);
      return this;
    }

    for (let i = 0; i < l1; i++) {
      this.data[i] += alpha * x.data[i];
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
    const { shape: s1, length: l1 } = this;
    const { shape: s2, length: l2 } = x;

    if (l1 !== l2 || !s1.every((dim, i) => dim === s2[i])) {
      throw new Error('sizes do not match');
    }

    const { data: d1 } = this;
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
    const { shape: s1, length: l1 } = this;
    const { shape: s2, length: l2 } = x;

    if (l1 !== l2 || !s1.every((dim, i) => dim === s2[i])) {
      throw new Error('sizes do not match');
    }

    const { data: d1 } = this;
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
   * Reshapes the array
   */
  reshape(shape: number[]): this {
    const { length } = this;
    if (shape.reduce((sum, dim) => sum * dim, 1) !== length) {
      throw new Error('new shape does not match length');
    }

    this.shape = shape;
    return this;
  }

  /**
   * Checks if current array and `x` are equal.
   */
  equals(x: NDArray): boolean {
    const { shape: s1, length: l1 } = this;
    const { shape: s2, length: l2 } = x;

    if (l1 !== l2 || !s1.every((dim, i) => dim === s2[i])) {
      return false;
    }

    const { data: d1 } = this;
    const { data: d2 } = x;

    let i = 0;
    while (i < l1 && d1[i] === d2[i]) {
      i++;
    }

    return i === l1;
  }
}
