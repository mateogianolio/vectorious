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

import { abs } from './abs';
import { acos } from './acos';
import { acosh } from './acosh';
import { add } from './add';
import { asin } from './asin';
import { asinh } from './asinh';
import { atan } from './atan';
import { atanh } from './atanh';
import { cbrt } from './cbrt';
import { ceil } from './ceil';
import { copy } from './copy';
import { cos } from './cos';
import { cosh } from './cosh';
import { dot } from './dot';
import { equals } from './equals';
import { equidimensional } from './equidimensional';
import { equilateral } from './equilateral';
import { exp } from './exp';
import { expm1 } from './expm1';
import { fill } from './fill';
import { floor } from './floor';
import { fround } from './fround';
import { log } from './log';
import { log10 } from './log10';
import { log1p } from './log1p';
import { log2 } from './log2';
import { magnitude } from './magnitude';
import { max } from './max';
import { min } from './min';
import { pow } from './pow';
import { product } from './product';
import { reshape } from './reshape';
import { round } from './round';
import { scale } from './scale';
import { sign } from './sign';
import { sin } from './sin';
import { sinh } from './sinh';
import { sqrt } from './sqrt';
import { subtract } from './subtract';
import { tan } from './tan';
import { tanh } from './tanh';
import { trunc } from './trunc';

export class NDArray implements INDArray {
  public abs: typeof abs = abs;
  public acos: typeof acos = acos;
  public acosh: typeof acosh = acosh;
  public add: typeof add = add;
  public asin: typeof asin = asin;
  public asinh: typeof asinh = asinh;
  public atan: typeof atan = atan;
  public atanh: typeof atanh = atanh;
  public cbrt: typeof cbrt = cbrt;
  public ceil: typeof ceil = ceil;
  public copy: typeof copy = copy;
  public cos: typeof cos = cos;
  public cosh: typeof cosh = cosh;
  public data: TypedArray = new Float32Array(0);
  public dot: typeof dot = dot;
  public equals: typeof equals = equals;
  public equidimensional: typeof equidimensional = equidimensional;
  public equilateral: typeof equilateral = equilateral;
  public exp: typeof exp = exp;
  public expm1: typeof expm1 = expm1;
  public fill: typeof fill = fill;
  public floor: typeof floor = floor;
  public fround: typeof fround = fround;
  public length: number = 0;
  public log: typeof log = log;
  public log10: typeof log10 = log10;
  public log1p: typeof log1p = log1p;
  public log2: typeof log2 = log2;
  public magnitude: typeof magnitude = magnitude;
  public max: typeof max = max;
  public min: typeof min = min;
  public pow: typeof pow = pow;
  public product: typeof product = product;
  public reshape: typeof reshape = reshape;
  public round: typeof round = round;
  public scale: typeof scale = scale;
  public shape: number[] = [0];
  public sign: typeof sign = sign;
  public sin: typeof sin = sin;
  public sinh: typeof sinh = sinh;
  public sqrt: typeof sqrt = sqrt;
  public subtract: typeof subtract = subtract;
  public tan: typeof tan = tan;
  public tanh: typeof tanh = tanh;
  public trunc: typeof trunc = trunc;
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

try {
  (window as any).NDArray = NDArray;
} catch (error) {}
