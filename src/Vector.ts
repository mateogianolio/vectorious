import './types';

let axpy: any;
let scal: any;
let dot: any;
let nrm2: any;
let idamax: any;

try {
  const nblas = require('nblas');

  axpy = nblas.axpy;
  scal = nblas.scal;
  dot = nblas.dot;
  nrm2 = nblas.nrm2;
  idamax = nblas.idamax;
} catch (err) {
  console.log('skipping nblas...');
}

/**
 * @class Vector
 */
export default class Vector {
  type: TypedArrayConstructor
  length: number
  data: TypedArray

  /**
   * Creates a `Vector` from the supplied arguments.
   */
  constructor(data?: any) {
    this.type = Float64Array;
    this.data = new this.type(0);
    this.length = 0;

    if (data instanceof Vector) {
      this.combine(data);
    } else if (data && data.shape) {
      this.data = new data.type(data.data);
      this.length = data.shape[0] * data.shape[1];
      this.type = data.type;
    } else if (data instanceof Array) {
      this.data = new this.type(data);
      this.length = data.length;
    } else if (data && data.buffer && data.buffer instanceof ArrayBuffer) {
      this.data = data;
      this.length = data.length;
      this.type = data.constructor;
    }
  }

  /**
   * Static method. Perform binary operation on two vectors `a` and `b` together.
   */
  static binOp(a: Vector, b: Vector, op: (a: number, b: number, index?: number) => number): Vector {
    return new Vector(a).binOp(b, op);
  }

  /**
   * Perform binary operation on `vector` to the current vector.
   */
  binOp(vector: Vector, op: (a: number, b: number, index?: number) => number): Vector {
    var l1 = this.length,
        l2 = vector.length;
    if (l1 !== l2)
      throw new Error('sizes do not match!');
    if (!l1 && !l2)
      return this;

    var i;
    for (i = 0; i < l1; i++)
      this.data[i] = op(this.data[i], vector.data[i], i);

    return this;
  }

  /**
   * Static method. Adds two vectors `a` and `b` together.
   */
  static add(a: Vector, b: Vector): Vector {
    return new Vector(a).add(b);
  }

  /**
   * Adds `vector` to the current vector.
   */
  add(vector: Vector): Vector {
    try {
      const l1 = this.length;
      const l2 = vector.length;

      if (l1 !== l2)
        throw new Error('sizes do not match!');

      axpy(vector.data, this.data);
      return this;
    } catch (err) {
      return this.binOp(vector, (a, b) => a + b);
    }
  }

  /**
   * Static method. Subtracts the vector `b` from vector `a`.
   */
  static subtract(a: Vector, b: Vector): Vector {
    return new Vector(a).subtract(b);
  }

  /**
   * Subtracts `vector` from the current vector.
   */
  subtract(vector: Vector): Vector {
    try {
      const l1 = this.length;
      const l2 = vector.length;

      if (l1 !== l2)
        throw new Error('sizes do not match!');

      axpy(vector.data, this.data, -1);
      return this;
    } catch (err) {
      return this.binOp(vector, (a, b) => a - b);
    }
  }

  /**
   * Static method. Multiplies all elements of `vector` with a specified `scalar`.
   */
  static scale(vector: Vector, scalar: number): Vector {
    return new Vector(vector).scale(scalar);
  }

  /**
   * Multiplies all elements of current vector with a specified `scalar`.
   */
  scale(scalar: number): Vector {
    try {
      scal(this.data, scalar);
      return this;
    } catch (err) {
      return this.each((_, i, data) => {
        data[i] *= scalar;
      });
    }
  }

  /**
   * Static method. Normalizes `vector`, i.e. divides all elements with the magnitude.
   */
  static normalize(vector: Vector): Vector {
    return new Vector(vector).normalize();
  }

  /**
   * Normalizes current vector.
   */
  normalize(): Vector {
    return this.scale(1 / this.magnitude());
  }

  /**
   * Static method. Projects the vector `a` onto the vector `b` using
   * the projection formula `(b * (a * b / b * b))`.
   */
  static project(a: Vector, b: Vector): Vector {
    return a.project(new Vector(b));
  }

  /**
   * Projects the current vector onto `vector` using
   * the projection formula `(b * (a * b / b * b))`.
   */
  project(vector: Vector): Vector {
    return vector.scale(this.dot(vector) / vector.dot(vector));
  }

    /**
   * Static method. Creates a vector containing optional 'value' (default 0) of `count` size, takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   */
  static fill(count: number, value: number | ((i: number) => number), type?: TypedArrayConstructor): Vector {
    if (count < 0)
      throw new Error('invalid size');
    if (count === 0)
      return new Vector();
    
    if (value == null) {
      value = 0.0;
    }
    if (type == null) {
      type = Float64Array;
    }
    var data = new type(count),
        i;

    if (typeof value === 'function')
      for (i = 0; i < count; i++)
        data[i] = value(i);
    else
      for (i = 0; i < count; i++)
        data[i] = value;

    return new Vector(data);
  }

  /**
   * Static method. Creates a vector containing zeros (`0`) of `count` size, takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   */
  static zeros(count: number, type?: TypedArrayConstructor): Vector {
    return Vector.fill(count, 0.0, type);
  }

  /**
   * Static method. Creates a vector containing ones (`1`) of `count` size, takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   */
  static ones(count: number, type?: TypedArrayConstructor): Vector {
    return Vector.fill(count, 1, type);
  }

  /**
   * Static method. Creates a vector of `count` elements containing random
   * values according to a normal distribution, takes an optional `type`
   * argument which should be an instance of `TypedArray`.
   */
  static random(count: number, deviation?: number, mean?: number, type?: TypedArrayConstructor): Vector {
    if (deviation == null) {
      deviation = 1;
    }
    if (mean == null) {
      mean = 0;
    }

    return Vector.fill(count, function() {
      return (deviation as number) * Math.random() + (mean as number);
    }, type);
  }

  /**
   * Static method. Creates a vector containing a range (can be either ascending or descending)
   * of numbers specified by the arguments provided (e.g. `Vector.range(0, .5, 2)`
   * gives a vector containing all numbers in the interval `[0, 2)` separated by
   * steps of `0.5`), takes an optional `type` argument which should be an instance of
   * `TypedArray`.
   */
  static range(...args: any[]): Vector {
    var backwards = false,
        start, step, end;

    var type = Float64Array;
    if (typeof args[args.length - 1] === 'function')
      type = args.pop();

    switch (args.length) {
      case 2:
        end = args.pop();
        step = 1;
        start = args.pop();
        break;
      case 3:
        end = args.pop();
        step = args.pop();
        start = args.pop();
        break;
      default:
        throw new Error('invalid range');
    }

    if (end - start < 0) {
      var copy = end;
      end = start;
      start = copy;
      backwards = true;
    }

    if (step > end - start)
      throw new Error('invalid range');

    var data = new type(Math.ceil((end - start) / step)),
        i = start,
        j = 0;
    if (backwards)
      for (; i < end; i += step, j++)
        data[j] = end - i + start;
    else
      for (; i < end; i += step, j++)
        data[j] = i;

    return new Vector(data);
  }

  /**
   * Static method. Performs dot multiplication with two vectors `a` and `b`.
   */
  static dot(a: Vector, b: Vector): number {
    return a.dot(b);
  }

  /**
   * Performs dot multiplication with current vector and `vector`
   */
  dot(vector: Vector): number {
    if (this.length !== vector.length)
      throw new Error('sizes do not match');

    try {
      return dot(this.data, vector.data);
    } catch (err) {
      var a = this.data,
          b = vector.data,
          result = 0,
          i, l;

      for (i = 0, l = this.length; i < l; i++)
        result += a[i] * b[i];

      return result;
    }
  }

  /**
   * Calculates the magnitude of a vector (also called L2 norm or Euclidean length).
   */
  magnitude(): number {
    if (!this.length)
      return 0;
    
    try {
      return nrm2(this.data);
    } catch (err) {
      var result = 0,
          data = this.data,
          i, l;

      for (i = 0, l = this.length; i < l; i++)
        result += data[i] * data[i];

      return Math.sqrt(result);
    }
  }

  /**
   * Static method. Determines the angle between two vectors `a` and `b`.
   */
  static angle(a: Vector, b: Vector): number {
    return a.angle(b);
  }

  /**
   * Determines the angle between the current vector and `vector`.
   */
  angle(vector: Vector): number {
    return Math.acos(this.dot(vector) / this.magnitude() / vector.magnitude());
  }

  /**
   * Static method. Checks the equality of two vectors `a` and `b`.
   */
  static equals(a: Vector, b: Vector): boolean {
    return a.equals(b);
  }

  /**
   * Checks the equality of the current vector and `vector`.
   */
  equals(vector: Vector): boolean {
    if (this.length !== vector.length)
      return false;

    var i = 0;
    while (i < this.length && this.data[i] === vector.data[i])
      i++;
    return i === this.length;
  }

  /**
   * Gets the minimum value (smallest) element of current vector.
   */
  min(): number {
    return this.reduce(function(acc, item) {
      return acc < item ? acc : item;
    }, Number.POSITIVE_INFINITY);
  }

  /**
   * Gets the maximum value (largest) element of current vector.
   */
  max(): number {
    try {
      return this.data[idamax(this.length, this.data, 1)];
    } catch (err) {
      return this.reduce(function(acc, item) {
        return acc < item ? item : acc;
      }, Number.NEGATIVE_INFINITY);
    }
  }

  /**
   * Check if `index` is within the bound for current vector.
   */
  check(index: number): void {  
    if (!isFinite(index) || index < 0 || index > this.length - 1)
      throw new Error('index out of bounds');
  }

  /**
   * Gets the element at `index` from current vector.
   */
  get(index: number): number {
    this.check(index);
    return this.data[index];
  }

  /**
   * Sets the element at `index` to `value`.
   */
  set(index: number, value: number): Vector {
    this.check(index);
    this.data[index] = value;
    return this;
  }

  /**
   * Getter for vector[0]
   */
  get x(): number {
    return this.get(0);
  }

  /**
   * Setter for vector[0]
   */
  set x(value: number) {
    this.set(0, value);
  }

  /**
   * Getter for vector[1]
   */
  get y(): number {
    return this.get(1);
  }

  /**
   * Setter for vector[1]
   */
  set y(value: number) {
    this.set(1, value);
  }

  /**
   * Getter for vector[2]
   */
  get z(): number {
    return this.get(2);
  }

  /**
   * Setter for vector[2]
   */
  set z(value: number) {
    this.set(2, value);
  }

  /**
   * Getter for vector[3]
   */
  get w(): number {
    return this.get(3);
  }

  /**
   * Setter for vector[3]
   */
  set w(value: number) {
    this.set(3, value);
  }

  /**
   * Static method. Combines two vectors `a` and `b` (appends `b` to `a`).
   */
  static combine(a: Vector, b: Vector): Vector {
    return new Vector(a).combine(b);
  }

  /**
   * Combines the current vector with `vector`
   */
  combine(vector: Vector): Vector {
    if (!vector.length)
      return this;
    if (!this.length) {
      this.data = new vector.type(vector.data);
      this.length = vector.length;
      this.type = vector.type;
      return this;
    }

    var l1 = this.length,
        l2 = vector.length,
        d1 = this.data,
        d2 = vector.data;

    var data = new this.type(l1 + l2);
    data.set(d1);
    data.set(d2, l1);

    this.data = data;
    this.length = l1 + l2;

    return this;
  }

  /**
   * Pushes a new `value` into current vector.
   */
  push(value: number): Vector {
    return this.combine(new Vector([value]));
  }

  /**
   * Maps a function `callback` to all elements of current vector.
   */
  map(callback: (value: number, i: number, src: TypedArray) => number): Vector {
    var mapped = new Vector(this),
        data = mapped.data,
        i;
    for (i = 0; i < this.length; i++)
      data[i] = callback.call(mapped, data[i], i, data);

    return mapped;
  }

  /**
   * Functional version of for-looping the vector, is equivalent
   * to `Array.prototype.forEach`.
   */
  each(callback: (value: number, i: number, src: TypedArray) => void): Vector {
    var i;
    for (i = 0; i < this.length; i++)
      callback.call(this, this.data[i], i, this.data);

    return this;
  }

  /**
   * Equivalent to `TypedArray.prototype.reduce`.
   */
  reduce(callback: (acc: number, value: number, i: number, src: TypedArray) => number, initialValue?: number): number {
    var l = this.length;
    if (l === 0 && !initialValue)
      throw new Error('Reduce of empty matrix with no initial value.');

    var i = 0,
        value = initialValue != null ? initialValue : this.data[i++];

    for (; i < l; i++)
      value = callback.call(this, value, this.data[i], i, this.data);
    return value;
  }

  /**
   * Converts current vector into a readable formatted string.
   */
  toString(): string {
    var result = ['['],
        i = 0;
    
    if (i < this.length)
      result.push(String(this.data[i++]));
    while (i < this.length)
      result.push(', ' + this.data[i++]);
    
    result.push(']');

    return result.join('');
  }

  /**
   * Converts current vector into a JavaScript array.
   */
  toArray(): number[] {
    if (!this.data)
      return [];

    return [].slice.call(this.data);
  }
}

try {
  (<any>window).Vector = Vector;
} catch (error) {}