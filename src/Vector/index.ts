import { NDArray } from '../NDArray';

export class Vector extends NDArray {
  public static angle: (x: Vector, y: Vector) => number;
  public static combine: (x: Vector, y: Vector) => Vector;
  public static cross: (x: Vector, y: Vector) => Vector;
  public static normalize: (x: Vector) => Vector;
  public static project: (x: Vector, y: Vector) => Vector;
  public static push: (x: Vector, value: number) => Vector;
  public static toArray: (x: Vector) => number[];
  public static toString: (x: Vector) => string;

  public angle!: (x: Vector) => number;
  public combine!: (x: Vector) => this;
  public cross!: (x: Vector) => this;
  public normalize!: () => this;
  public project!: (x: Vector) => this;
  public push!: (value: number) => this;
  public toArray!: () => number[];
  public toString!: () => string;

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
