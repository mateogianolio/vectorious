import { NDArray } from '../NDArray';
import { TypedArrayConstructor } from '../types';

export class Matrix extends NDArray {
  public static augment: <T extends Matrix>(x: T, y: T) => T;
  public static determinant: <T extends Matrix>(x: T) => number;
  public static diagonal: <T extends Matrix>(x: T) => T;
  public static gauss: <T extends Matrix>(x: T) => T;
  public static identity: <T extends Matrix>(size: number) => T;
  public static inverse: <T extends Matrix>(x: T) => T;
  public static jacobi: <T extends Matrix>(x: T) => [T, T];
  public static lu: <T extends Matrix>(x: T) => [T, T, Int32Array];
  public static magic: <T extends Matrix>(size: number, type?: TypedArrayConstructor) => T;
  public static multiply: <T extends Matrix>(x: T, y: T) => T;
  public static plu: <T extends Matrix>(x: T) => [T, Int32Array];
  public static rank: <T extends Matrix>(x: T) => number;
  public static rowAdd: <T extends Matrix>(x: T, dest: number, source: number, scalar?: number) => T;
  public static solve: <T extends Matrix>(x: T, y: T) => T;
  public static square: <T extends Matrix>(x: T) => void;
  public static swap: <T extends Matrix>(x: T, i: number, j: number) => T;
  public static toArray: <T extends Matrix>(x: T) => number[][];
  public static toString: <T extends Matrix>(x: T) => string;
  public static trace: <T extends Matrix>(x: T) => number;
  public static transpose: <T extends Matrix>(x: T) => T;

  public augment!: <T extends Matrix>(x: T) => this;
  public determinant!: () => number;
  public diagonal!: () => this;
  public gauss!: () => this;
  public inverse!: () => this;
  public jacobi!: <T extends Matrix>() => [T, T];
  public lu!: <T extends Matrix>() => [T, T, Int32Array];
  public multiply!: <T extends Matrix>(x: T) => this;
  public plu!: () => [this, Int32Array];
  public rank!: () => number;
  public rowAdd!: (dest: number, source: number, scalar?: number) => this;
  public solve!: <T extends Matrix>(x: T) => this;
  public square!: () => void;
  public swap!: (i: number, j: number) => this;
  public toArray!: () => number[][];
  public toString!: () => string;
  public trace!: () => number;
  public transpose!: () => this;

  public constructor(data?: any, options?: any) {
    super(
      typeof data === 'number' && typeof options === 'number'
        ? new Float32Array(data * options)
        : data,
      typeof options === 'number'
        ? { shape: [data, options ] }
        : options
    );
  }

  public get T(): Matrix {
    return this.transpose();
  }
}

import './augment';
import './determinant';
import './diagonal';
import './gauss';
import './inverse';
import './jacobi';
import './lu';
import './magic';
import './multiply';
import './plu';
import './rank';
import './rowAdd';
import './solve';
import './square';
import './swap';
import './toArray';
import './toString';
import './trace';
import './transpose';

try {
  (window as any).Matrix = Matrix;
} catch (err) {}
