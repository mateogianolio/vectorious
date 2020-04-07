import {
  DType,
  INDArray,
  TypedArray,
} from '../types';
import {
  flatten,
  get_dtype,
  get_length,
  get_shape,
  get_strides,
  get_type,
  is_typed_array,
} from '../util';

import { abs, default as _abs } from './abs';
import { acos, default as _acos } from './acos';
import { acosh, default as _acosh } from './acosh';
import { add, default as _add } from './add';
import { angle, default as _angle } from './angle';
import { array } from './array';
import { asin, default as _asin } from './asin';
import { asinh, default as _asinh } from './asinh';
import { atan, default as _atan } from './atan';
import { atanh, default as _atanh } from './atanh';
import { augment, default as _augment } from './augment';
import { binOp, default as _binOp } from './binOp';
import { cbrt, default as _cbrt } from './cbrt';
import { ceil, default as _ceil } from './ceil';
import { check, default as _check } from './check';
import { combine, default as _combine } from './combine';
import { copy, default as _copy } from './copy';
import { cos, default as _cos } from './cos';
import { cosh, default as _cosh } from './cosh';
import { cross, default as _cross } from './cross';
import { det, default as _det } from './det';
import { diagonal, default as _diagonal } from './diagonal';
import { dot, default as _dot } from './dot';
import { eig, default as _eig } from './eig';
import { equals, default as _equals } from './equals';
import { equidimensional, default as _equidimensional } from './equidimensional';
import { equilateral, default as _equilateral } from './equilateral';
import { exp, default as _exp } from './exp';
import { expm1, default as _expm1 } from './expm1';
import { eye } from './eye';
import { fill, default as _fill } from './fill';
import { floor, default as _floor } from './floor';
import { forEach, default as _forEach } from './forEach';
import { fround, default as _fround } from './fround';
import { gauss, default as _gauss } from './gauss';
import { get, default as _get } from './get';
import { inv, default as _inv } from './inv';
import { log, default as _log } from './log';
import { log10, default as _log10 } from './log10';
import { log1p, default as _log1p } from './log1p';
import { log2, default as _log2 } from './log2';
import { lu, default as _lu } from './lu';
import { lu_factor, default as _lu_factor } from './lu_factor';
import { magic } from './magic';
import { map, default as _map } from './map';
import { matrix } from './matrix';
import { max, default as _max } from './max';
import { mean, default as _mean } from './mean';
import { min, default as _min } from './min';
import { multiply, default as _multiply } from './multiply';
import { norm, default as _norm } from './norm';
import { normalize, default as _normalize } from './normalize';
import { ones } from './ones';
import { pow, default as _pow } from './pow';
import { prod, default as _prod } from './prod';
import { product, default as _product } from './product';
import { project, default as _project } from './project';
import { push, default as _push } from './push';
import { random } from './random';
import { range } from './range';
import { rank, default as _rank } from './rank';
import { reciprocal, default as _reciprocal } from './reciprocal';
import { reduce, default as _reduce } from './reduce';
import { reshape, default as _reshape } from './reshape';
import { round, default as _round } from './round';
import { row_add, default as _row_add } from './row_add';
import { scale, default as _scale } from './scale';
import { set, default as _set } from './set';
import { sign, default as _sign } from './sign';
import { sin, default as _sin } from './sin';
import { sinh, default as _sinh } from './sinh';
import { slice, default as _slice } from './slice';
import { solve, default as _solve } from './solve';
import { sqrt, default as _sqrt } from './sqrt';
import { square, default as _square } from './square';
import { subtract, default as _subtract } from './subtract';
import { sum, default as _sum } from './sum';
import { swap, default as _swap } from './swap';
import { tan, default as _tan } from './tan';
import { tanh, default as _tanh } from './tanh';
import { toArray, default as _toArray } from './toArray';
import { toString, default as _toString } from './toString';
import { trace, default as _trace } from './trace';
import { transpose, default as _transpose } from './transpose';
import { trunc, default as _trunc } from './trunc';
import { zeros } from './zeros';

const inspectSymbol: unique symbol = Symbol.for('nodejs.util.inspect.custom');

/**
 * @class NDArray
 */
export class NDArray implements INDArray {
  public static abs = abs;
  public static acos = acos;
  public static acosh = acosh;
  public static add = add;
  public static angle = angle;
  public static array = array;
  public static asin = asin;
  public static asinh = asinh;
  public static atan = atan;
  public static atanh = atanh;
  public static augment = augment;
  public static binOp = binOp;
  public static cbrt = cbrt;
  public static ceil = ceil;
  public static check = check;
  public static combine = combine;
  public static copy = copy;
  public static cos = cos;
  public static cosh = cosh;
  public static cross = cross;
  public static det = det;
  public static diagonal = diagonal;
  public static dot = dot;
  public static eig = eig;
  public static equals = equals;
  public static equidimensional = equidimensional;
  public static equilateral = equilateral;
  public static exp = exp;
  public static expm1 = expm1;
  public static eye = eye;
  public static fill = fill;
  public static floor = floor;
  public static forEach = forEach;
  public static fround = fround;
  public static gauss = gauss;
  public static get = get;
  public static inv = inv;
  public static log = log;
  public static log10 = log10;
  public static log1p = log1p;
  public static log2 = log2;
  public static lu = lu;
  public static lu_factor = lu_factor;
  public static magic = magic;
  public static map = map;
  public static matrix = matrix;
  public static max = max;
  public static mean = mean;
  public static min = min;
  public static multiply = multiply;
  public static norm = norm;
  public static normalize = normalize;
  public static ones = ones;
  public static pow = pow;
  public static prod = prod;
  public static product = product;
  public static project = project;
  public static push = push;
  public static random = random;
  public static range = range;
  public static rank = rank;
  public static reciprocal = reciprocal;
  public static reduce = reduce;
  public static reshape = reshape;
  public static round = round;
  public static row_add = row_add;
  public static scale = scale;
  public static set = set;
  public static sign = sign;
  public static sin = sin;
  public static sinh = sinh;
  public static slice = slice;
  public static solve = solve;
  public static sqrt = sqrt;
  public static square = square;
  public static subtract = subtract;
  public static sum = sum;
  public static swap = swap;
  public static tan = tan;
  public static tanh = tanh;
  public static toArray = toArray;
  public static toString = toString;
  public static trace = trace;
  public static transpose = transpose;
  public static trunc = trunc;
  public static zeros = zeros;
  public [inspectSymbol]: () => string = _toString;
  public abs = _abs;
  public acos = _acos;
  public acosh = _acosh;
  public add = _add;
  public angle = _angle;
  public asin = _asin;
  public asinh = _asinh;
  public atan = _atan;
  public atanh = _atanh;
  public augment = _augment;
  public binOp = _binOp;
  public cbrt = _cbrt;
  public ceil = _ceil;
  public check = _check;
  public combine = _combine;
  public copy = _copy;
  public cos = _cos;
  public cosh = _cosh;
  public cross = _cross;
  public data: TypedArray = new Float32Array(0);
  public det = _det;
  public diagonal = _diagonal;
  public dot = _dot;
  public dtype: DType = 'float32';
  public eig = _eig;
  public equals = _equals;
  public equidimensional = _equidimensional;
  public equilateral = _equilateral;
  public exp = _exp;
  public expm1 = _expm1;
  public fill = _fill;
  public floor = _floor;
  public forEach = _forEach;
  public fround = _fround;
  public gauss = _gauss;
  public get = _get;
  public inv = _inv;
  public length: number = 0;
  public log = _log;
  public log10 = _log10;
  public log1p = _log1p;
  public log2 = _log2;
  public lu = _lu;
  public lu_factor = _lu_factor;
  public map = _map;
  public max = _max;
  public mean = _mean;
  public min = _min;
  public multiply = _multiply;
  public norm = _norm;
  public normalize = _normalize;
  public pow = _pow;
  public prod = _prod;
  public product = _product;
  public project = _project;
  public push = _push;
  public rank = _rank;
  public reciprocal = _reciprocal;
  public reduce = _reduce;
  public reshape = _reshape;
  public round = _round;
  public row_add = _row_add;
  public scale = _scale;
  public set = _set;
  public shape: number[] = [0];
  public sign = _sign;
  public sin = _sin;
  public sinh = _sinh;
  public slice = _slice;
  public solve = _solve;
  public sqrt = _sqrt;
  public square = _square;
  public strides: number[] = [0];
  public subtract = _subtract;
  public sum = _sum;
  public swap = _swap;
  public tan = _tan;
  public tanh = _tanh;
  public toArray = _toArray;
  public toString = _toString;
  public trace = _trace;
  public transpose = _transpose;
  public trunc = _trunc;

  public constructor(
    data?: any,
    options?: any
  ) {
    if (is_typed_array(data)) {
      this.data = data as TypedArray;
      this.shape = typeof options === 'object' && options.hasOwnProperty('shape') ? options.shape : [this.data.length];
      this.length = get_length(this.shape);
      this.dtype = typeof options === 'object' && options.hasOwnProperty('dtype') ? options.dtype : get_dtype(data);
      this.strides = typeof options === 'object' && options.hasOwnProperty('strides') ? options.strides : get_strides(this.shape);
    } else if (data instanceof Array) {
      this.data = new (get_type(this.dtype))(flatten(data));
      this.shape = get_shape(data);
      this.strides = get_strides(this.shape);
      this.length = get_length(this.shape);
    } else if (data instanceof NDArray) {
      return data.copy();
    }
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

  /**
   * Transposes current matrix (mirror across the diagonal).
   */
  public get T() {
    return this.transpose();
  }
}

try {
  (window as any).v = NDArray;
} catch (error) {}
