import { NDArray } from '../NDArray';
import { TypedArray, TypedArrayConstructor } from '../types';

import { angle } from './angle';
import { combine } from './combine';
import { cross } from './cross';
import { normalize } from './normalize';
import { project } from './project';
import { push } from './push';
import { toArray } from './toArray';
import { toString } from './toString';

export class Vector extends NDArray {
  /**
   * Adds two vectors `x` and `y` together.
   */
  public static add = (a: Vector, b: Vector): Vector => a.copy().add(b);

  /**
   * Determines the angle between two vectors `x` and `y`.
   */
  public static angle = (x: Vector, y: Vector): number => x.angle(y);

  /**
   * Perform binary operation on two vectors `x` and `y` together.
   */
  public static binOp = (
    x: Vector,
    y: Vector,
    op: (
      a: number,
      b: number,
      index?: number
    ) => number
  ): Vector => x.copy().binOp(y, op)

  /**
   * Combines two vectors `x` and `y` (appends `b` to `a`).
   */
  public static combine = (x: Vector, y: Vector): Vector => x.copy().combine(y);

  /**
   * Performs dot multiplication with two vectors `x` and `y`.
   */
  public static dot = (x: Vector, y: Vector): number => x.dot(y);

  /**
   * Checks the equality of two vectors `x` and `y`.
   */
  public static equals = (x: Vector, y: Vector): boolean => x.equals(y);

  /**
   * Creates a vector containing optional 'value' (default 0) of `count` size, takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   */
  public static fill = (
    count: number,
    value: number | ((index: number) => number) = 0,
    type: TypedArrayConstructor = Float32Array
  ): Vector => {
    if (count < 0) {
      throw new Error('invalid size');
    }
    const data: TypedArray = new type(count);

    return new Vector(data).fill(value);
  }

  /**
   * Normalizes `vector`, i.e. divides all elements with the magnitude.
   */
  public static normalize = (x: Vector): Vector => x.copy().normalize();

  /**
   * Creates a vector containing ones (`1`) of `count` size, takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   */
  public static ones = (
    count: number,
    type: TypedArrayConstructor = Float32Array
  ): Vector => Vector.fill(count, 1, type)

  /**
   * Projects the vector `a` onto the vector `b` using
   * the projection formula `(b * (a * b / b * b))`.
   */
  public static project = (x: Vector, y: Vector): Vector => x.project(y.copy());

  /**
   * Creates a vector of `count` elements containing random
   * values according to a uniform distribution bounded by `min` and `max`,
   * takes an optional `type` argument which should be an instance of `TypedArray`.
   */
  public static random = (
    count: number,
    min: number = 0,
    max: number = 1,
    type: TypedArrayConstructor = Float32Array
  ): Vector => Vector.fill(count, min, type)
    .map((value: number) => value + Math.random() * (max - min))

  /**
   * Creates a vector containing a range (can be either ascending or descending)
   * of numbers specified by the arguments provided (e.g. `Vector.range(0, .5, 2)`
   * gives a vector containing all numbers in the interval `[0, 2)` separated by
   * steps of `0.5`), takes an optional `type` argument which should be an instance of
   * `TypedArray`.
   */
  public static range = (...args: Array<number | TypedArrayConstructor>): Vector => {
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
   * Multiplies all elements of `x` with a specified `scalar`.
   */
  public static scale = (x: Vector, scalar: number): Vector => x.copy().scale(scalar);

  /**
   * Subtracts the vector `y` from vector `x`.
   */
  public static subtract = (x: Vector, y: Vector): Vector => x.copy().subtract(y);

  /**
   * Creates a vector containing zeros (`0`) of `count` size, takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   */
  public static zeros = (
    count: number,
    type: TypedArrayConstructor = Float32Array
  ): Vector => Vector.fill(count, 0, type)

  public angle: typeof angle = angle;
  public combine: typeof combine = combine;
  public cross: typeof cross = cross;
  public normalize: typeof normalize = normalize;
  public project: typeof project = project;
  public push: typeof push = push;
  public toArray: typeof toArray = toArray;
  public toString: typeof toString = toString;

  public constructor(data?: any) {
    super(typeof data === 'number' ? new Float32Array(data) : data);
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
}

try {
  (window as any).Vector = Vector;
} catch (error) {}
