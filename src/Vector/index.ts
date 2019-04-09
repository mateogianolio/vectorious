import { NDArray } from '../NDArray';
import { IVector, TypedArray, TypedArrayConstructor } from '../types';

export class Vector extends NDArray implements IVector {
  /**
   * Static method. Adds two vectors `a` and `b` together.
   */
  public static add(a: Vector, b: Vector): Vector {
    return a.copy()
      .add(b);
  }

  /**
   * Static method. Determines the angle between two vectors `a` and `b`.
   */
  public static angle(x: Vector, y: Vector): number {
    return x.angle(y);
  }

  /**
   * Static method. Perform binary operation on two vectors `a` and `b` together.
   */
  public static binOp(
    x: Vector,
    y: Vector,
    op: (
      a: number,
      b: number,
      index?: number
    ) => number
  ): Vector {
    return x.copy().binOp(y, op);
  }

  /**
   * Static method. Combines two vectors `a` and `b` (appends `b` to `a`).
   */
  public static combine(x: Vector, y: Vector): Vector {
    return x.copy().combine(y);
  }

  /**
   * Static method. Performs dot multiplication with two vectors `a` and `b`.
   */
  public static dot(x: Vector, y: Vector): number {
    return x.dot(y);
  }

  /**
   * Static method. Checks the equality of two vectors `a` and `b`.
   */
  public static equals(x: Vector, y: Vector): boolean {
    return x.equals(y);
  }

  /**
   * Static method. Creates a vector containing optional 'value' (default 0) of `count` size, takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   */
  public static fill(
    count: number,
    value: number | ((index: number) => number) = 0,
    type: TypedArrayConstructor = Float32Array
  ): Vector {
    if (count < 0) {
      throw new Error('invalid size');
    }
    const data: TypedArray = new type(count);

    return new Vector(data).fill(value);
  }

  /**
   * Static method. Normalizes `vector`, i.e. divides all elements with the magnitude.
   */
  public static normalize(x: Vector): Vector {
    return x.copy().normalize();
  }

  /**
   * Static method. Creates a vector containing ones (`1`) of `count` size, takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   */
  public static ones(count: number, type: TypedArrayConstructor = Float32Array): Vector {
    return Vector.fill(count, 1, type);
  }

  /**
   * Static method. Projects the vector `a` onto the vector `b` using
   * the projection formula `(b * (a * b / b * b))`.
   */
  public static project(x: Vector, y: Vector): Vector {
    return x.project(y.copy());
  }

  /**
   * Static method. Creates a vector of `count` elements containing random
   * values according to a uniform distribution bounded by `min` and `max`,
   * takes an optional `type` argument which should be an instance of `TypedArray`.
   */
  public static random(
    count: number,
    min: number = 0,
    max: number = 1,
    type: TypedArrayConstructor = Float32Array
  ): Vector {
    return Vector.fill(count, min, type)
      .map((value: number) => value + Math.random() * (max - min));
  }

  /**
   * Static method. Creates a vector containing a range (can be either ascending or descending)
   * of numbers specified by the arguments provided (e.g. `Vector.range(0, .5, 2)`
   * gives a vector containing all numbers in the interval `[0, 2)` separated by
   * steps of `0.5`), takes an optional `type` argument which should be an instance of
   * `TypedArray`.
   */
  public static range(...args: Array<number | TypedArrayConstructor>): Vector {
    let type: TypedArrayConstructor = Float32Array;
    let backwards: boolean = false;
    let start: number;
    let step: number;
    let end: number;

    if (typeof args[args.length - 1] === 'function') {
      type = args.pop() as TypedArrayConstructor;
    }

    switch (args.length) {
      case 2:
        end = args.pop() as number;
        step = 1;
        start = args.pop() as number;
        break;
      case 3:
        end = args.pop() as number;
        step = args.pop() as number;
        start = args.pop() as number;
        break;
      default:
        throw new Error('invalid range');
    }

    if (end - start < 0) {
      const copy: number = end;
      end = start;
      start = copy;
      backwards = true;
    }

    if (step > end - start) {
      throw new Error('invalid range');
    }

    const data: TypedArray = new type(Math.ceil((end - start) / step));

    let i: number = start;
    let j: number = 0;

    if (backwards) {
      for (; i < end; i += step, j += 1) {
        data[j] = end - i + start;
      }
    } else {
      for (; i < end; i += step, j += 1) {
        data[j] = i;
      }
    }

    return new Vector(data);
  }

  /**
   * Static method. Multiplies all elements of `x` with a specified `scalar`.
   */
  public static scale(x: Vector, scalar: number): Vector {
    return x.copy().scale(scalar);
  }

  /**
   * Static method. Subtracts the vector `y` from vector `x`.
   */
  public static subtract(x: Vector, y: Vector): Vector {
    return x.copy().subtract(y);
  }

  /**
   * Static method. Creates a vector containing zeros (`0`) of `count` size, takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   */
  public static zeros(count: number, type: TypedArrayConstructor = Float32Array): Vector {
    return Vector.fill(count, 0, type);
  }

  public constructor(data?: any) {
    super(typeof data === 'number' ? new Float32Array(data) : data);
  }

  /**
   * Determines the angle between the current vector and `x`.
   */
  public angle(x: Vector): number {
    return Math.acos(this.dot(x) / this.magnitude() / x.magnitude());
  }

  /**
   * Perform binary operation on `x` to the current vector.
   */
  public binOp(
    x: Vector,
    op: (
      a: number,
      b: number,
      index?: number
    ) => number
  ): Vector {
    const l1: number = this.length;
    const l2: number = x.length;

    if (l1 !== l2) {
      throw new Error('sizes do not match!');
    }

    let i: number;
    for (i = 0; i < l1; i += 1) {
      this.data[i] = op(this.data[i], x.data[i], i);
    }

    return this;
  }

  /**
   * Check if `i` is within the bound for current vector.
   */
  public check(i: number): void {
    if (!isFinite(i) || i < 0 || i > this.length - 1) {
      throw new Error('index out of bounds');
    }
  }

  /**
   * Combines the current vector with `x`
   */
  public combine(x: Vector): Vector {
    const l1: number = this.length;
    const l2: number = x.length;

    if (l2 === 0) {
      return this;
    }

    if (l1 === 0) {
      this.data = new x.type(x.data);
      this.length = l2;
      this.type = x.type;

      return this;
    }

    const d1: TypedArray = this.data;
    const d2: TypedArray = x.data;
    const data: TypedArray = new this.type(l1 + l2);

    data.set(d1);
    data.set(d2, l1);

    this.data = data;
    this.length = l1 + l2;
    this.shape = [l1 + l2];

    return this;
  }

  /**
   * Computes the cross product of the current vector and the vector 'x'
   * This operation can be only calculate for vectors with three components.
   * Otherwise it's throws an exception.
   * The method returns a new (result) vector.
   */
  public cross(x: Vector): Vector {
    if (this.length !== 3 || x.length !== 3) {
      throw new Error('cross(...) : vectors must have three components.');
    }

    const c1: number = this.y * x.z - this.z * x.y;
    const c2: number = this.z * x.x - this.x * x.z;
    const c3: number = this.x * x.y - this.y * x.x;

    return new Vector([c1, c2, c3]);
  }

  /**
   * Functional version of for-looping the vector, is equivalent
   * to `Array.prototype.forEach`.
   */
  public each(callback: (value: number, i: number, src: TypedArray) => void): Vector {
    let i: number;
    for (i = 0; i < this.length; i += 1) {
      callback.call(this, this.data[i], i, this.data);
    }

    return this;
  }

  /**
   * Gets the element at `index` from current vector.
   */
  public get(index: number): number {
    this.check(index);

    return this.data[index];
  }

  /**
   * Maps a function `callback` to all elements of current vector.
   */
  public map(callback: (value: number, i: number, src: TypedArray) => number): Vector {
    const l: number = this.length;
    const mapped: Vector = this.copy();
    const data: TypedArray = mapped.data;

    let i: number;
    for (i = 0; i < l; i += 1) {
      data[i] = callback.call(mapped, data[i], i, data);
    }

    return mapped;
  }

  /**
   * Normalizes current vector.
   */
  public normalize(): Vector {
    return this.scale(1 / this.magnitude());
  }

  /**
   * Projects the current vector onto `x` using
   * the projection formula `(y * (x * y / y * y))`.
   */
  public project(x: Vector): Vector {
    return x.scale(this.dot(x) / x.dot(x));
  }

  /**
   * Pushes a new `value` into current vector.
   */
  public push(value: number): Vector {
    return this.combine(new Vector([value]));
  }

  /**
   * Equivalent to `TypedArray.prototype.reduce`.
   */
  public reduce(
    callback: (
      acc: number,
      value: number,
      i: number,
      src: TypedArray
    ) => number,
    initialValue?: number
  ): number {
    const l: number = this.length;
    if (l === 0 && initialValue === undefined) {
      throw new Error('Reduce of empty matrix with no initial value.');
    }

    let i: number;
    let value: number;

    if (initialValue === undefined) {
      value = this.data[0];
      i = 1;
    } else {
      value = initialValue;
      i = 0;
    }

    for (; i < l; i += 1) {
      value = callback.call(this, value, this.data[i], i, this.data);
    }

    return value;
  }

  /**
   * Sets the element at `index` to `value`.
   */
  public set(index: number, value: number): Vector {
    this.check(index);
    this.data[index] = value;

    return this;
  }

  /**
   * Getter for vector[0]
   */
  public get x(): number {
    return this.get(0);
  }

  /**
   * Setter for vector[0]
   */
  public set x(value: number) {
    this.set(0, value);
  }

  /**
   * Getter for vector[1]
   */
  public get y(): number {
    return this.get(1);
  }

  /**
   * Setter for vector[1]
   */
  public set y(value: number) {
    this.set(1, value);
  }

  /**
   * Getter for vector[2]
   */
  public get z(): number {
    return this.get(2);
  }

  /**
   * Setter for vector[2]
   */
  public set z(value: number) {
    this.set(2, value);
  }

  /**
   * Getter for vector[3]
   */
  public get w(): number {
    return this.get(3);
  }

  /**
   * Setter for vector[3]
   */
  public set w(value: number) {
    this.set(3, value);
  }

  /**
   * Converts current vector into a JavaScript array.
   */
  public toArray(): number[] {
    return [].slice.call(this.data);
  }

  /**
   * Converts current vector into a readable formatted string.
   */
  public toString(): string {
    const l: number = this.length;
    const result: string[] = ['['];

    let i: number = 0;
    if (i < l) {
      result.push(String(this.data[i]));
      i += 1;
    }

    while (i < l) {
      result.push(`, ${this.data[i]}`);
      i += 1;
    }

    result.push(']');

    return result.join('');
  }
}

try {
  (window as any).Vector = Vector;
} catch (error) {}
