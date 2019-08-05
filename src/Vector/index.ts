import { NDArray } from '../NDArray';

export class Vector extends NDArray {
  /**
   * Determines the angle between the `x` and `y`
   */
  public static angle: (x: Vector, y: Vector) => number;

  /**
   * Combines the vector `x` with `y`
   */
  public static combine: (x: Vector, y: Vector) => Vector;

  /**
   * Computes the cross product of the `x` and the vector `y`
   * This operation can only calculated for vectors with three components.
   * Otherwise it throws an exception.
   * The method returns a new (result) vector.
   */
  public static cross: (x: Vector, y: Vector) => Vector;

  /**
   * Normalizes `x`.
   */
  public static normalize: (x: Vector) => Vector;

  /**
   * Projects the `y` onto `x` using the projection formula `(y * (x * y / y * y))`.
   */
  public static project: (x: Vector, y: Vector) => Vector;

  /**
   * Pushes a new `value` into `x`.
   */
  public static push: (x: Vector, value: number) => Vector;

  /**
   * Converts `x` into a JavaScript array.
   */
  public static toArray: (x: Vector) => number[];

  /**
   * Converts `x` into a readable formatted string.
   */
  public static toString: (x: Vector) => string;

  /**
   * Determines the angle between the current vector and `x`
   */
  public angle!: (x: Vector) => number;

  /**
   * Combines the current vector with `x`
   */
  public combine!: (x: Vector) => this;

  /**
   * Computes the cross product of the current vector and the vector `x`
   * This operation can only be calculated for vectors with three components.
   * Otherwise it throws an exception.
   * The method returns a new (result) vector.
   */
  public cross!: (x: Vector) => this;

  /**
   * Normalizes current vector.
   */
  public normalize!: () => this;

  /**
   * Projects the current vector onto `x` using the projection formula `(y * (x * y / y * y))`.
   */
  public project!: (x: Vector) => this;

  /**
   * Pushes a new `value` into current vector.
   */
  public push!: (value: number) => this;

  /**
   * Converts current vector into a JavaScript array.
   */
  public toArray!: () => number[];

  /**
   * Converts current vector into a readable formatted string.
   */
  public toString!: () => string;

  public constructor(data?: any) {
    super(typeof data === 'number' ? new Float32Array(data) : data);
  }

  /**
   * Equivalent to this.get(0)
   */
  public get x(): number {
    return this.get(0);
  }

  /**
   * Equivalent to this.set(0, value)
   */
  public set x(value: number) {
    this.set(0, value);
  }

  /**
   * Equivalent to this.get(1)
   */
  public get y(): number {
    return this.get(1);
  }

  /**
   * Equivalent to this.set(1, value)
   */
  public set y(value: number) {
    this.set(1, value);
  }

  /**
   * Equivalent to this.get(2)
   */
  public get z(): number {
    return this.get(2);
  }

  /**
   * Equivalent to this.set(2, value)
   */
  public set z(value: number) {
    this.set(2, value);
  }

  /**
   * Equivalent to this.get(3)
   */
  public get w(): number {
    return this.get(3);
  }

  /**
   * Equivalent to this.set(3, value)
   */
  public set w(value: number) {
    this.set(3, value);
  }
}

import './angle';
import './combine';
import './cross';
import './normalize';
import './project';
import './push';
import './toArray';
import './toString';

try {
  (window as any).Vector = Vector;
} catch (error) {}
