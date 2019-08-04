import {
  INDArray,
  TypedArray,
  TypedArrayConstructor,
} from '../types';
import {
  flatten,
  isTypedArray,
  shape,
  type,
} from '../util';

export class NDArray implements INDArray {
  public static abs: <T extends NDArray>(x: T) => T;
  public static acos: <T extends NDArray>(x: T) => T;
  public static acosh: <T extends NDArray>(x: T) => T;
  public static add: <T extends NDArray>(x: T, y: T, alpha?: number) => T;
  public static asin: <T extends NDArray>(x: T) => T;
  public static asinh: <T extends NDArray>(x: T) => T;
  public static atan: <T extends NDArray>(x: T) => T;
  public static atanh: <T extends NDArray>(x: T) => T;
  public static binOp: <T extends NDArray>(x: T, y: T, f: (a: number, b: number, index: number) => number) => T;
  public static cbrt: <T extends NDArray>(x: T) => T;
  public static ceil: <T extends NDArray>(x: T) => T;
  public static check: <T extends NDArray>(x: T, ...indices: number[]) => void;
  public static copy: <T extends NDArray>(x: T) => T;
  public static cos: <T extends NDArray>(x: T) => T;
  public static cosh: <T extends NDArray>(x: T) => T;
  public static dot: <T extends NDArray>(x: T, y: T) => number;
  public static each: <T extends NDArray>(x: T, f: (value: number, i: number, src: TypedArray) => void) => T;
  public static equals: <T extends NDArray>(x: T, y: T) => boolean;
  public static equidimensional: <T extends NDArray>(x: T, y: T) => void;
  public static equilateral: <T extends NDArray>(x: T, y: T) => void;
  public static exp: <T extends NDArray>(x: T) => T;
  public static expm1: <T extends NDArray>(x: T) => T;
  public static eye: <T extends NDArray>(n: number) => T;
  public static fill: <T extends NDArray>(x: T, value: number | ((index: number) => number)) => T;
  public static floor: <T extends NDArray>(x: T) => T;
  public static fround: <T extends NDArray>(x: T) => T;
  public static get: <T extends NDArray>(x: T, ...indices: number[]) => number;
  public static log: <T extends NDArray>(x: T) => T;
  public static log10: <T extends NDArray>(x: T) => T;
  public static log1p: <T extends NDArray>(x: T) => T;
  public static log2: <T extends NDArray>(x: T) => T;
  public static magnitude: <T extends NDArray>(x: T) => number;
  public static map: <T extends NDArray>(x: T, f: (value: number, i: number, src: TypedArray) => number) => T;
  public static max: <T extends NDArray>(x: T) => number;
  public static min: <T extends NDArray>(x: T) => number;
  public static ones: <T extends NDArray>(...shape: number[]) => T;
  public static pow: <T extends NDArray>(x: T, exponent: number) => T;
  public static product: <T extends NDArray>(x: T, y: T) => T;
  public static random: <T extends NDArray>(...shape: number[]) => T;
  public static range: <T extends NDArray>(...args: number[]) => T;
  public static reduce: (
    x: NDArray,
    f: (acc: number, value: number, i: number, src: TypedArray) => number,
    initialValue?: number
  ) => number;
  public static reshape: <T extends NDArray>(x: T, s: number[]) => T;
  public static round: <T extends NDArray>(x: T) => T;
  public static scale: <T extends NDArray>(x: T, scalar: number) => T;
  public static set: <T extends NDArray>(x: T, ...args: number[]) => void;
  public static sign: <T extends NDArray>(x: T) => T;
  public static sin: <T extends NDArray>(x: T) => T;
  public static sinh: <T extends NDArray>(x: T) => T;
  public static slice: <T extends NDArray>(x: T, start?: number, step?: number, end?: number) => T;
  public static sqrt: <T extends NDArray>(x: T) => T;
  public static subtract: <T extends NDArray>(x: T, y: T) => T;
  public static tan: <T extends NDArray>(x: T) => T;
  public static tanh: <T extends NDArray>(x: T) => T;
  public static trunc: <T extends NDArray>(x: T) => T;
  public static zeros: <T extends NDArray>(...shape: number[]) => T;

  public abs!: () => this;
  public acos!: () => this;
  public acosh!: () => this;
  public add!: (y: NDArray, alpha?: number) => this;
  public asin!: () => this;
  public asinh!: () => this;
  public atan!: () => this;
  public atanh!: () => this;
  public binOp!: (y: NDArray, f: (a: number, b: number, index: number) => number) => this;
  public cbrt!: () => this;
  public ceil!: () => this;
  public check!: (...indices: number[]) => void;
  public copy!: () => this;
  public cos!: () => this;
  public cosh!: () => this;
  public data: TypedArray = new Float32Array(0);
  public dot!: (y: NDArray) => number;
  public each!: (f: (value: number, i: number, src: TypedArray) => void) => this;
  public equals!: (y: NDArray) => boolean;
  public equidimensional!: (y: NDArray) => void;
  public equilateral!: (y: NDArray) => void;
  public exp!: () => this;
  public expm1!: () => this;
  public eye!: (n: number) => this;
  public fill!: (value: number | ((index: number) => number)) => this;
  public floor!: () => this;
  public fround!: () => this;
  public get!: (...indices: number[]) => number;
  public length: number = 0;
  public log!: () => this;
  public log10!: () => this;
  public log1p!: () => this;
  public log2!: () => this;
  public magnitude!: () => number;
  public map!: (f: (value: number, i: number, src: TypedArray) => number) => this;
  public max!: () => number;
  public min!: () => number;
  public pow!: (exponent: number) => this;
  public product!: (y: NDArray) => this;
  public reduce!: (
    f: (acc: number, value: number, i: number, src: TypedArray) => number,
    initialValue?: number
  ) => number;
  public reshape!: (s: number[]) => this;
  public round!: () => this;
  public scale!: (scalar: number) => this;
  public set!: (...args: number[]) => void;
  public shape: number[] = [0];
  public sign!: () => this;
  public sin!: () => this;
  public sinh!: () => this;
  public slice!: (start?: number, step?: number, end?: number) => this;
  public sqrt!: () => this;
  public subtract!: (y: NDArray) => this;
  public tan!: () => this;
  public tanh!: () => this;
  public trunc!: () => this;
  public type: TypedArrayConstructor = Float32Array;

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
      this.data = new Float32Array(flatten(data));
      this.shape = shape(data);
      this.length = this.data.length;
    } else if (data instanceof NDArray) {
      return data.copy();
    }
  }
}

import './abs';
import './acos';
import './acosh';
import './add';
import './asin';
import './asinh';
import './atan';
import './atanh';
import './binOp';
import './cbrt';
import './ceil';
import './check';
import './copy';
import './cos';
import './cosh';
import './dot';
import './each';
import './equals';
import './equidimensional';
import './equilateral';
import './exp';
import './expm1';
import './eye';
import './fill';
import './floor';
import './fround';
import './get';
import './log';
import './log10';
import './log1p';
import './log2';
import './magnitude';
import './map';
import './max';
import './min';
import './ones';
import './pow';
import './product';
import './random';
import './range';
import './reduce';
import './reshape';
import './round';
import './scale';
import './set';
import './sign';
import './sin';
import './sinh';
import './slice';
import './sqrt';
import './subtract';
import './tan';
import './tanh';
import './trunc';
import './zeros';

try {
  (window as any).NDArray = NDArray;
} catch (error) {}
