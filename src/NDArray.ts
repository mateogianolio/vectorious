import {
  INDArray,
  TypedArray,
  TypedArrayConstructor,
} from './types';
import { flatten, isTypedArray, shape, type } from './util';

import abs from './NDArray/abs';
import acos from './NDArray/acos';
import acosh from './NDArray/acosh';
import add from './NDArray/add';
import asin from './NDArray/asin';
import asinh from './NDArray/asinh';
import atan from './NDArray/atan';
import atanh from './NDArray/atanh';
import cbrt from './NDArray/cbrt';
import ceil from './NDArray/ceil';
import copy from './NDArray/copy';
import cos from './NDArray/cos';
import cosh from './NDArray/cosh';
import dot from './NDArray/dot';
import equals from './NDArray/equals';
import equidimensional from './NDArray/equidimensional';
import equilateral from './NDArray/equilateral';
import exp from './NDArray/exp';
import expm1 from './NDArray/expm1';
import fill from './NDArray/fill';
import floor from './NDArray/floor';
import fround from './NDArray/fround';
import log from './NDArray/log';
import log10 from './NDArray/log10';
import log1p from './NDArray/log1p';
import log2 from './NDArray/log2';
import magnitude from './NDArray/magnitude';
import max from './NDArray/max';
import min from './NDArray/min';
import pow from './NDArray/pow';
import product from './NDArray/product';
import reshape from './NDArray/reshape';
import round from './NDArray/round';
import scale from './NDArray/scale';
import sign from './NDArray/sign';
import sin from './NDArray/sin';
import sinh from './NDArray/sinh';
import sqrt from './NDArray/sqrt';
import subtract from './NDArray/subtract';
import tan from './NDArray/tan';
import tanh from './NDArray/tanh';
import trunc from './NDArray/trunc';

export class NDArray implements INDArray<NDArray> {
  public data: TypedArray = new Float32Array(0);
  public length: number = 0;
  public shape: number[] = [0];
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

  public abs = abs;
  public acos = acos;
  public acosh = acosh;
  public add = add;
  public asin = asin;
  public asinh = asinh;
  public atan = atan;
  public atanh = atanh;
  public cbrt = cbrt;
  public ceil = ceil;
  public copy = copy;
  public cos = cos;
  public cosh = cosh;
  public dot = dot;
  public equals = equals;
  public equidimensional = equidimensional;
  public equilateral = equilateral;
  public exp = exp;
  public expm1 = expm1;
  public fill = fill;
  public floor = floor;
  public fround = fround;
  public log = log;
  public log10 = log10;
  public log1p = log1p;
  public log2 = log2;
  public magnitude = magnitude;
  public max = max;
  public min = min;
  public pow = pow;
  public product = product;
  public reshape = reshape;
  public round = round;
  public scale = scale;
  public sign = sign;
  public sin = sin;
  public sinh = sinh;
  public sqrt = sqrt;
  public subtract = subtract;
  public tan = tan;
  public tanh = tanh;
  public trunc = trunc;
}

try {
  (window as any).NDArray = NDArray;
} catch (error) {}
