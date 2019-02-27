import './types';
import NDArray from './NDArray';

export default class Vector extends NDArray {
  constructor(data?: any) {
    super(typeof data === 'number' ? new Float64Array(data) : data);
  }

  /**
   * Static method. Perform binary operation on two vectors `a` and `b` together.
   */
  static binOp(
    a: Vector,
    b: Vector,
    op: (
      a: number,
      b: number,
      index?: number
    ) => number
  ): Vector {
    return a.copy().binOp(b, op);
  }

  /**
   * Perform binary operation on `vector` to the current vector.
   */
  binOp(
    vector: Vector,
    op: (
      a: number,
      b: number,
      index?: number
    ) => number
  ): Vector {
    const l1 = this.length;
    const l2 = vector.length;

    if (l1 !== l2) {
      throw new Error('sizes do not match!');
    }

    if (!l1 && !l2) {
      return this;
    }

    let i;
    for (i = 0; i < l1; i++) {
      this.data[i] = op(this.data[i], vector.data[i], i);
    }

    return this;
  }

  /**
   * Static method. Adds two vectors `a` and `b` together.
   */
  static add(a: Vector, b: Vector): Vector {
    return a.copy().add(b);
  }

  /**
   * Static method. Subtracts the vector `b` from vector `a`.
   */
  static subtract(a: Vector, b: Vector): Vector {
    return a.copy().subtract(b);
  }

  /**
   * Static method. Multiplies all elements of `vector` with a specified `scalar`.
   */
  static scale(vector: Vector, scalar: number): Vector {
    return vector.copy().scale(scalar);
  }

  /**
   * Static method. Normalizes `vector`, i.e. divides all elements with the magnitude.
   */
  static normalize(vector: Vector): Vector {
    return vector.copy().normalize();
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
    return a.project(b.copy());
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
  static fill(
    count: number,
    value: number | ((index: number) => number) = 0,
    type: TypedArrayConstructor = Float64Array
  ): Vector {
    if (count < 0) {
      throw new Error('invalid size');
    }

    const data = new type(count);

    return new Vector(data).fill(value);
  }

  /**
   * Static method. Creates a vector containing zeros (`0`) of `count` size, takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   */
  static zeros(count: number, type: TypedArrayConstructor = Float64Array): Vector {
    return Vector.fill(count, 0.0, type);
  }

  /**
   * Static method. Creates a vector containing ones (`1`) of `count` size, takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   */
  static ones(count: number, type: TypedArrayConstructor = Float64Array): Vector {
    return Vector.fill(count, 1, type);
  }

  /**
   * Static method. Creates a vector of `count` elements containing random
   * values according to a uniform distribution bounded by `min` and `max`,
   * takes an optional `type` argument which should be an instance of `TypedArray`.
   */
  static random(
    count: number,
    min: number = 0,
    max: number = 1,
    type: TypedArrayConstructor = Float64Array
  ): Vector {
    return Vector.fill(count, min, type)
      .map(value => value + Math.random() * (max - min));
  }

  /**
   * Static method. Creates a vector containing a range (can be either ascending or descending)
   * of numbers specified by the arguments provided (e.g. `Vector.range(0, .5, 2)`
   * gives a vector containing all numbers in the interval `[0, 2)` separated by
   * steps of `0.5`), takes an optional `type` argument which should be an instance of
   * `TypedArray`.
   */
  static range(...args: any[]): Vector {
    let type = Float64Array;
    let backwards = false;
    let start;
    let step;
    let end;

    if (typeof args[args.length - 1] === 'function') {
      type = args.pop();
    }

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
      let copy = end;
      end = start;
      start = copy;
      backwards = true;
    }

    if (step > end - start) {
      throw new Error('invalid range');
    }

    const data = new type(Math.ceil((end - start) / step));

    let i = start;
    let j = 0;

    if (backwards) {
      for (; i < end; i += step, j++) {
        data[j] = end - i + start;
      }
    } else {
      for (; i < end; i += step, j++) {
        data[j] = i;
      }
    }

    return new Vector(data);
  }

  /**
   * Static method. Performs dot multiplication with two vectors `a` and `b`.
   */
  static dot(a: Vector, b: Vector): number {
    return a.dot(b);
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
   * Check if `index` is within the bound for current vector.
   */
  check(index: number): void {  
    if (!isFinite(index) || index < 0 || index > this.length - 1) {
      throw new Error('index out of bounds');
    }
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
    return a.copy().combine(b);
  }

  /**
   * Combines the current vector with `vector`
   */
  combine(vector: Vector): Vector {
    const l1 = this.length;
    const l2 = vector.length;

    if (!l2) {
      return this;
    }

    if (!l1) {
      this.data = new vector.type(vector.data);
      this.length = l2;
      this.type = vector.type;
      return this;
    }

    const d1 = this.data;
    const d2 = vector.data;
    const data = new this.type(l1 + l2);

    data.set(d1);
    data.set(d2, l1);

    this.data = data;
    this.length = l1 + l2;
    this.shape = [l1 + l2];

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
    const l = this.length;
    const mapped = this.copy();
    const data = mapped.data;

    let i;
    for (i = 0; i < l; i++) {
      data[i] = callback.call(mapped, data[i], i, data);
    }

    return mapped;
  }

  /**
   * Functional version of for-looping the vector, is equivalent
   * to `Array.prototype.forEach`.
   */
  each(callback: (value: number, i: number, src: TypedArray) => void): Vector {
    let i;
    for (i = 0; i < this.length; i++) {
      callback.call(this, this.data[i], i, this.data);
    }

    return this;
  }

  /**
   * Equivalent to `TypedArray.prototype.reduce`.
   */
  reduce(
    callback: (
      acc: number,
      value: number,
      i: number,
      src: TypedArray
    ) => number,
    initialValue?: number
  ): number {
    const l = this.length;
    if (!l && !initialValue) {
      throw new Error('Reduce of empty matrix with no initial value.');
    }

    let i = 0;
    let value = initialValue != null ? initialValue : this.data[i++];

    for (; i < l; i++) {
      value = callback.call(this, value, this.data[i], i, this.data);
    }

    return value;
  }

  /**
   * Converts current vector into a readable formatted string.
   */
  toString(): string {
    const l = this.length;
    const result = ['['];

    let i = 0;
    if (i < l) {
      result.push(String(this.data[i++]));
    }

    while (i < l) {
      result.push(', ' + this.data[i++]);
    }

    result.push(']');

    return result.join('');
  }

  /**
   * Converts current vector into a JavaScript array.
   */
  toArray(): number[] {
    if (!this.data) {
      return [];
    }

    return [].slice.call(this.data);
  }

  /**
   * Computes the cross product of the current vector and the vector 'vector'
   * This operation can be only calculate for vectors with three components.
   * Otherwise it's throws an exception.
   * The method returns a new (result) vector.
   */
  cross(vector: Vector) : Vector {

    // precondition
    if (this.length != 3 || vector.length != 3) {
      throw "cross(...) : vectors must have three components.";
    }

    const a = this;
    const b = vector;

    // computes the actual cross product
    // components of the new (result) vector
    const c1 = a.y * b.z - a.z * b.y;
    const c2 = a.z * b.x - a.x * b.z;
    const c3 = a.x * b.y - a.y * b.x;

    return new Vector([c1, c2, c3]);

  }

}

try {
  (<any>window).Vector = Vector;
} catch (error) {}
