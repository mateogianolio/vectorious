import { DType, INDArray, TypedArray } from '../types';
import {
  flatten,
  get_dtype,
  get_length,
  get_shape,
  get_strides,
  get_type,
  is_typed_array,
} from '../util';
import { NDIter } from '../iterators';

import { default as abs } from './abs';
import { default as acos } from './acos';
import { default as acosh } from './acosh';
import { default as add } from './add';
import { default as angle } from './angle';
import { default as asin } from './asin';
import { default as asinh } from './asinh';
import { default as atan } from './atan';
import { default as atanh } from './atanh';
import { default as augment } from './augment';
import { default as binOp } from './binOp';
import { default as cbrt } from './cbrt';
import { default as ceil } from './ceil';
import { default as check } from './check';
import { default as combine } from './combine';
import { default as copy } from './copy';
import { default as cos } from './cos';
import { default as cosh } from './cosh';
import { default as cross } from './cross';
import { default as det } from './det';
import { default as diagonal } from './diagonal';
import { default as dot } from './dot';
import { default as eig } from './eig';
import { default as equals } from './equals';
import { default as equidimensional } from './equidimensional';
import { default as equilateral } from './equilateral';
import { default as exp } from './exp';
import { default as expm1 } from './expm1';
import { default as fill } from './fill';
import { default as floor } from './floor';
import { default as forEach } from './forEach';
import { default as fround } from './fround';
import { default as gauss } from './gauss';
import { default as get } from './get';
import { default as inv } from './inv';
import { default as log } from './log';
import { default as log10 } from './log10';
import { default as log1p } from './log1p';
import { default as log2 } from './log2';
import { default as lu } from './lu';
import { default as lu_factor } from './lu_factor';
import { default as map } from './map';
import { default as max } from './max';
import { default as mean } from './mean';
import { default as min } from './min';
import { default as multiply } from './multiply';
import { default as norm } from './norm';
import { default as normalize } from './normalize';
import { default as pow } from './pow';
import { default as prod } from './prod';
import { default as product } from './product';
import { default as project } from './project';
import { default as push } from './push';
import { default as rank } from './rank';
import { default as reciprocal } from './reciprocal';
import { default as reduce } from './reduce';
import { default as reshape } from './reshape';
import { default as round } from './round';
import { default as row_add } from './row_add';
import { default as scale } from './scale';
import { default as set } from './set';
import { default as sign } from './sign';
import { default as sin } from './sin';
import { default as sinh } from './sinh';
import { default as slice } from './slice';
import { default as solve } from './solve';
import { default as sqrt } from './sqrt';
import { default as square } from './square';
import { default as subtract } from './subtract';
import { default as sum } from './sum';
import { default as swap } from './swap';
import { default as tan } from './tan';
import { default as tanh } from './tanh';
import { default as toArray } from './toArray';
import { default as toString } from './toString';
import { default as trace } from './trace';
import { default as transpose } from './transpose';
import { default as trunc } from './trunc';

const inspectSymbol: unique symbol = Symbol.for('nodejs.util.inspect.custom');

/**
 * @class NDArray
 * @description Constructs or copies an NDArray instance.
 * @param data
 * @param {Object} [options]
 * @param {Number[]} [options.shape]
 * @param {Number} [options.length]
 * @param {Number[]} [options.strides]
 * @param {string} [options.dtype]
 * @example
 * import { NDArray } from 'vectorious';
 *
 * new NDArray() // => array([], dtype=float64)
 * new NDArray([]) // => array([], dtype=float64)
 * new NDArray([1, 2, 3]) // => array([1, 2, 3], dtype=float64)
 * new NDArray([[1, 2], [3, 4]]) // => array([ [ 1, 2 ], [ 3, 4 ] ], dtype=float64)
 * new NDArray(new Int32Array([1, 2, 3])) // => array([ 1, 2, 3 ], dtype=int32)
 * new NDArray([1, 2, 3, 4], {
 *   shape: [2, 2],
 *   dtype: 'uint32'
 * }) // => array([ [ 1, 2 ], [ 3, 4 ] ], dtype=uint32)
 */
export class NDArray implements INDArray {
  /**
   * @name data
   * @memberof NDArray
   * @instance
   * @type TypedArray
   * @default new Float64Array(0)
   */
  public data: TypedArray = new Float64Array(0);

  /**
   * @name dtype
   * @memberof NDArray
   * @instance
   * @type String
   * @default 'float64'
   */
  public dtype: DType = 'float64';

  /**
   * @name length
   * @memberof NDArray
   * @instance
   * @type Number
   * @default 0
   */
  public length: number = 0;

  /**
   * @name shape
   * @memberof NDArray
   * @instance
   * @type Number[]
   * @default [0]
   */
  public shape: number[] = [0];

  /**
   * @name strides
   * @memberof NDArray
   * @instance
   * @type Number[]
   * @default [0]
   */
  public strides: number[] = [0];

  public [inspectSymbol]: () => string = toString;

  /**
   * @function abs
   * @memberof NDArray
   * @instance
   * @description Returns the absolute value of each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([-1, -2, -3]).abs() // <=> array([1, 2, 3])
   */
  public abs = abs;

  /**
   * @function acos
   * @memberof NDArray
   * @instance
   * @description Returns the arccosine of each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([-1, 0, 1]).acos(); // <=> array([3.141592653589793, 1.5707963267948966, 0])
   */
  public acos = acos;

  /**
   * @function acosh
   * @memberof NDArray
   * @instance
   * @description Returns the hyperbolic arccosine of each element of current array.
   * @param {NDArray} x
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).acosh(); // <=> array([0, 1.316957950592041, 1.7627471685409546])
   */
  public acosh = acosh;

  /**
   * @function add
   * @memberof NDArray
   * @instance
   * @description
   * Adds `x` multiplied by `alpha` to the current array.
   * Accelerated with BLAS `?axpy`.
   * @param {NDArray} x
   * @param {Number} [1] alpha
   * @returns {NDArray}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).add([4, 5, 6]); // <=> array([5, 7, 9])
   */
  public add = add;

  /**
   * @function angle
   * @memberof NDArray
   * @instance
   * @description Determines the angle between the current vector and `x`.
   * @param {NDArray} x
   * @returns {number}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).angle([4, 5, 6]); // <=> 0.22572622788897287
   */
  public angle = angle;

  /**
   * @function asin
   * @memberof NDArray
   * @instance
   * @description Returns the arcsine of each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([-1, 0, 1]).asin() // <=> array([-1.5707963705062866, 0, 1.5707963705062866])
   */
  public asin = asin;

  /**
   * @function asinh
   * @memberof NDArray
   * @instance
   * @description Returns the hyperbolic arcsine of each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([0, 1, 2]).asinh() // <=> array([0, 0.8813735842704773, 1.4436354637145996])
   */
  public asinh = asinh;

  /**
   * @function atan
   * @memberof NDArray
   * @instance
   * @description Returns the arctangent of each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).atan() // <=> array([0.7853981852531433, 1.1071487665176392, 1.249045729637146])
   */
  public atan = atan;

  /**
   * @function atanh
   * @memberof NDArray
   * @instance
   * @description Returns the hyperbolic arctangent of each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([0, -0.5]).atanh(); // <=> array([0, -0.5493061542510986])
   */
  public atanh = atanh;

  /**
   * @function augment
   * @memberof NDArray
   * @instance
   * @description Augments `x` with current matrix.
   * @param {NDArray} x
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([[1, 2], [3, 4]]).augment(array([[1], [2]])); // <=> array([[1, 2, 1], [3, 4, 2]])
   */
  public augment = augment;

  /**
   * @function binOp
   * @memberof NDArray
   * @instance
   * @description Perform binary operation `f` on `x` in the current array.
   * @param {NDArray} x
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).binOp([4, 5, 6], (a, b) => a + b); // => array([[5, 7, 9])
   */
  public binOp = binOp;

  /**
   * @function cbrt
   * @memberof NDArray
   * @instance
   * @description Returns the cube root of each element of current array.
   * @returns {this}
   * @example
   * import { cbrt } from 'vectorious';
   *
   * cbrt([1, 8, 27]); // => array([1, 2, 3])
   */
  public cbrt = cbrt;

  /**
   * @function ceil
   * @memberof NDArray
   * @instance
   * @description Returns smallest integer greater than or equal to of each element of current array.
   * @returns {NDArray}
   * @example
   * import { array } from 'vectorious';
   *
   * array([0.5, 1.5, 2.5]).ceil(); // <=> array([1, 2, 3])
   */
  public ceil = ceil;

  /**
   * @function check
   * @memberof NDArray
   * @instance
   * @description Asserts if indices `i, j, ..., n` are within the bounds of current array
   * @param {Number[]} ...indices
   * @throws {Error} index out of bounds
   * @example
   * import { array } from 'vectorious';
   *
   * array([0.5, 1.5, 2.5]).check(3); // Error: index out of bounds
   */
  public check = check;

  /**
   * @function combine
   * @memberof NDArray
   * @instance
   * @description Combines the current vector with `x`
   * @param {NDArray} x
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).combine([4, 5, 6]); // => array([1, 2, 3, 4, 5, 6])
   */
  public combine = combine;

  /**
   * @function copy
   * @memberof NDArray
   * @instance
   * @description Makes a copy of the class and underlying data
   * @returns {NDArray}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).copy(); // => array([1, 2, 3])
   */
  public copy = copy;

  /**
   * @function cos
   * @memberof NDArray
   * @instance
   * @description Returns the cosine of each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([0, Math.PI / 2, Math.PI]).cos(); // => array([1, 0, -1])
   */
  public cos = cos;

  /**
   * @function cosh
   * @memberof NDArray
   * @instance
   * @description Returns the hyperbolic cosine of each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([0, 1, 2]).cosh(); // => array([1, 1.5430806875228882, 3.762195587158203])
   */
  public cosh = cosh;

  /**
   * @function cross
   * @memberof NDArray
   * @instance
   * @description
   * Computes the cross product of the current vector and the vector `x`
   * This operation can only calculated for vectors with three components.
   * Otherwise it throws an exception.
   * @param {NDArray} x
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).cross([4, 5, 6]); // <=> array([-3, 6, -3])
   */
  public cross = cross;

  /**
   * @function det
   * @memberof NDArray
   * @instance
   * @description Gets the determinant of current matrix using LU factorization.
   * @returns {Number}
   * @example
   * import { array } from 'vectorious';
   *
   * array([[0, 1], [2, 3]]).det(); // => -2
   */
  public det = det;

  /**
   * @function diagonal
   * @memberof NDArray
   * @instance
   * @description Gets the diagonal of current matrix.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).diagonal(); // => array([1, 4])
   */
  public diagonal = diagonal;

  /**
   * @function dot
   * @memberof NDArray
   * @instance
   * @description
   * Performs dot multiplication with `x` and current array
   * Accelerated with BLAS `?dot`.
   * @param {NDArray} x
   * @returns {Number}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).dot([4, 5, 6]); // => 32
   */
  public dot = dot;

  /**
   * @function eig
   * @memberof NDArray
   * @instance
   * @description
   * Gets eigenvalues and eigenvectors of the current matrix using the Jacobi method.
   * Accelerated with LAPACK `?geev`.
   * @returns {Array<NDArray>}
   * @example
   * import { array } from 'vectorious';
   *
   * array([[1, 0, 0], [0, 2, 0], [0, 0, 3]]).eig(); // => [array([1, 2, 3]), array([[1, 0, 0], [0, 1, 0], [0, 0, 1]])]
   */
  public eig = eig;

  /**
   * @function equals
   * @memberof NDArray
   * @instance
   * @description Checks if current array and `x` are equal.
   * @param {NDArray} x
   * @param {Number} tolerance
   * @returns {Boolean}
   * @example
   * import { equals } from 'vectorious';
   *
   * array([1, 2, 3]).equals([1, 2, 3]); // => true
   */
  public equals = equals;

  /**
   * @deprecated
   * @function equidimensional
   * @memberof NDArray
   * @instance
   * @description Asserts if current array and `x` have the same shape
   * @param {NDArray} x
   * @throws {Error} shapes x and y do not match
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).equidimensional([1, 2]); // Error: shapes 3 and 2 do not match
   */
  public equidimensional = equidimensional;

  /**
   * @deprecated
   * @function equilateral
   * @memberof NDArray
   * @instance
   * @description Asserts if current array and `x` have the same length
   * @param {NDArray} x
   * @throws {Error} lengths x and y do not match
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).equilateral([1, 2]); // Error: lengths 3 and 2 do not match
   */
  public equilateral = equilateral;

  /**
   * @function exp
   * @memberof NDArray
   * @instance
   * @description
   * Returns e^x of each element of current array, where x is the argument,
   * and e is Euler's constant (2.718…), the base of the natural logarithm.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).exp(); // <=> array([2.7182817459106445, 7.389056205749512, 20.08553695678711])
   */
  public exp = exp;

  /**
   * @function expm1
   * @memberof NDArray
   * @instance
   * @description Returns subtracting 1 from exp(x) of each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).expm1(); // <=> array([1.7182817459106445, 6.389056205749512, 19.08553695678711])
   */
  public expm1 = expm1;

  /**
   * @function fill
   * @memberof NDArray
   * @instance
   * @description Fills the current array with a scalar value
   * @param {Number} value
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).fill(0); // <=> array([0, 0, 0])
   */
  public fill = fill;

  /**
   * @function floor
   * @memberof NDArray
   * @instance
   * @description Returns the largest integer less than or equal to a number of each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1.5, 2.5, 3.5]).floor(); // <=> array([1, 2, 3])
   */
  public floor = floor;

  /**
   * @function forEach
   * @memberof NDArray
   * @instance
   * @description Equivalent to `TypedArray.prototype.forEach`.
   * @param {Function} f
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).forEach(console.log);
   * // 1 0 [ 1, 2, 3 ]
   * // 2 1 [ 1, 2, 3 ]
   * // 3 2 [ 1, 2, 3 ]
   */
  public forEach = forEach;

  /**
   * @function fround
   * @memberof NDArray
   * @instance
   * @description Returns the nearest single precision float representation of each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([-5.05, 5.05]).fround(); // <=> array([-5.050000190734863, 5.050000190734863])
   */
  public fround = fround;

  /**
   * @function gauss
   * @memberof NDArray
   * @instance
   * @description
   * Gauss-Jordan elimination (i.e. returns the reduced row echelon form) of the current matrix.
   * @returns {NDArray}
   * @example
   * import { array } from 'vectorious';
   *
   * array([[1, 2, 3], [4, 5, 6]]).gauss(); // <=> array([[1, 0, -1], [-0, 1, 2]])
   */
  public gauss = gauss;

  /**
   * @function get
   * @memberof NDArray
   * @instance
   * @description Gets the element at `i, j, ..., n` from current vector.
   * @param {Number[]} ...indices
   * @returns {Number}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).get(2); // 3
   */
  public get = get;

  /**
   * @function inv
   * @memberof NDArray
   * @instance
   * @description
   * Determines the inverse of current matrix using Gaussian elimination.
   * Accelerated with LAPACK `?getri`.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([[2, -1, 0], [-1, 2, -1], [0, -1, 2]]).inv(); // <=> array([[0.75, 0.5, 0.25], [0.5, 1, 0.5], [0.25, 0.5, 0.75]])
   */
  public inv = inv;

  /**
   * @function log
   * @memberof NDArray
   * @instance
   * @description Returns the natural logarithm (log_e, also ln) of each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).log(); // <=> array([0, 0.6931471824645996, 1.0986123085021973])
   */
  public log = log;

  /**
   * @function log1p
   * @memberof NDArray
   * @instance
   * @description Returns the natural logarithm (log_e, also ln) of 1 + x for each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]); // <=> array([0.6931471824645996, 1.0986123085021973, 1.3862943649291992])
   */
  public log1p = log1p;

  /**
   * @function log10
   * @memberof NDArray
   * @instance
   * @description Returns the base 10 logarithm of each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([10, 100, 1000]).log10(); // <=> array([1, 2, 3])
   */
  public log10 = log10;

  /**
   * @function log2
   * @memberof NDArray
   * @instance
   * @description Returns the base 2 logarithm of each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 4]).log2(); // => array([0, 1, 2])
   */
  public log2 = log2;

  /**
   * @function lu_factor
   * @memberof NDArray
   * @instance
   * @description
   * Performs LU factorization on current matrix.
   * Accelerated with LAPACK `?getrf`.
   * @returns {Array<NDArray|Int32Array>}
   * @example
   * import { array } from 'vectorious';
   *
   * array([[1, 3, 5], [2, 4, 7], [1, 1, 0]]).lu_factor(); // <=> [array([[2, 4, 7], [0.5, 1, 1.5], [0.5, -1, -2]]), Int32Array([2, 2, 3])]
   */
  public lu_factor = lu_factor;

  /**
   * @function lu
   * @memberof NDArray
   * @instance
   * @description
   * Performs full LU decomposition on current matrix.
   * Accelerated with LAPACK `?getrf`.
   * @returns {Array<NDArray|Int32Array>}
   * @example
   * import { array } from 'vectorious';
   *
   * array([[1, 3, 5], [2, 4, 7], [1, 1, 0]]).lu(); // => [array([[1, 0, 0], [0.5, 1, 0], [0.5, -1, 1]]), array([[2, 4, 7], [0, 1, 1.5], [0, 0, -2]]), Int32Array([2, 2, 3])]
   */
  public lu = lu;

  /**
   * @function map
   * @memberof NDArray
   * @instance
   * @description Equivalent to `TypedArray.prototype.map`.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).map(value => -value); // => array([-1, -2, -3])
   */
  public map = map;

  /**
   * @function max
   * @memberof NDArray
   * @instance
   * @description
   * Gets the maximum value (smallest) element of current array.
   * Accelerated with BLAS `i?amax`.
   * @returns {Number}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).max(); // => 3
   */
  public max = max;

  /**
   * @function mean
   * @memberof NDArray
   * @instance
   * @description Gets the arithmetic mean of current array.
   * @returns {Number}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).mean(); // => 2
   */
  public mean = mean;

  /**
   * @function min
   * @memberof NDArray
   * @instance
   * @description Gets the minimum value (smallest) element of current array.
   * @returns {Number}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).min(); // 1
   */
  public min = min;

  /**
   * @function multiply
   * @memberof NDArray
   * @instance
   * @description
   * Multiplies current matrix with `x`.
   * Accelerated with BLAS `?gemm`.
   * @param {NDArray} x
   * @returns {NDArray}
   * @example
   * import { array } from 'vectorious';
   *
   * array([[1, 2]]).multiply([[1], [2]]); // <=> array([[5]])
   */
  public multiply = multiply;

  /**
   * @function norm
   * @memberof NDArray
   * @instance
   * @description
   * Calculates the norm of current array (also called L2 norm or Euclidean length).
   * Accelerated with BLAS `?nrm2`.
   * @returns {Number}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).norm(); // => 3.7416574954986572
   */
  public norm = norm;

  /**
   * @function normalize
   * @memberof NDArray
   * @instance
   * @description Normalizes current vector.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).normalize(); // => array([0.26726123690605164, 0.5345224738121033, 0.8017836809158325])
   */
  public normalize = normalize;

  /**
   * @function pow
   * @memberof NDArray
   * @instance
   * @description Returns each element of current array to the exponent power, that is, element^exponent.
   * @param {Number} exponent
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).pow(2); // <=> array([1, 4, 9])
   */
  public pow = pow;

  /**
   * @function prod
   * @memberof NDArray
   * @instance
   * @description Product of all elements of current array
   * @returns {Number}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).prod(); // => 6
   */
  public prod = prod;

  /**
   * @function product
   * @memberof NDArray
   * @instance
   * @description Hadamard product of current matrix and `x`
   * @returns {NDArray}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).product([4, 5, 6]); // <=> array([4, 10, 18])
   */
  public product = product;

  /**
   * @function project
   * @memberof NDArray
   * @instance
   * @description Projects the current vector onto `x` using the projection formula `(y * (x * y / y * y))`.
   * @returns {NDArray}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).project([4, 5, 6]); // <=> array([1.6623376607894897, 2.0779221057891846, 2.49350643157959])
   */
  public project = project;

  /**
   * @function push
   * @memberof NDArray
   * @instance
   * @description Pushes a new `value` into current vector.
   * @param {Number} value
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).push(4); // => array([1, 2, 3, 4])
   */
  public push = push;

  /**
   * @function rank
   * @memberof NDArray
   * @instance
   * @description Finds the rank of current matrix using gaussian elimination.
   * @param {Number} tolerance
   * @returns {Number}
   * @example
   * import { array } from 'vectorious';
   *
   * array([[1, 1, 1], [2, 2, 2], [3, 3, 3]]).rank(); // => 1
   * @todo Switch to SVD algorithm
   */
  public rank = rank;

  /**
   * @function reciprocal
   * @memberof NDArray
   * @instance
   * @description Gets the element-wise reciprocal of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]); // => array([1, 0.5, 0.3333333432674408])
   */
  public reciprocal = reciprocal;

  /**
   * @function reduce
   * @memberof NDArray
   * @instance
   * @description Equivalent to `TypedArray.prototype.reduce`.
   * @param {Function} f
   * @param {Number} initialValue
   * @returns {Number}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).reduce((a, b) => a + b, 0); // => 6
   */
  public reduce = reduce;

  /**
   * @function reshape
   * @memberof NDArray
   * @instance
   * @description Reshapes current array
   * @param {Number[]} ...shape
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3, 4]).reshape(2, 2); // <=> array([[1, 2], [3, 4]])
   */
  public reshape = reshape;

  /**
   * @function round
   * @memberof NDArray
   * @instance
   * @description Returns the value of each element of current array rounded to the nearest integer.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1.2, 2.8, 3.5]).round(); // <=> array([1, 3, 4])
   */
  public round = round;

  /**
   * @function row_add
   * @memberof NDArray
   * @instance
   * @description Adds a multiple of one row multiplied by `scalar` to another inside current matrix.
   * @param {Number} dest
   * @param {Number} source
   * @param {Number} scalar
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([[1, 2], [3, 4]]).row_add(1, 0, 2); // <=> array([[1, 2], [5, 8]])
   */
  public row_add = row_add;

  /**
   * @function scale
   * @memberof NDArray
   * @instance
   * @description
   * Multiplies all elements of current array with a specified `scalar`.
   * Accelerated with BLAS `?scal`.
   * @param {Number} scalar
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).scale(2); // <=> array([2, 4, 6])
   */
  public scale = scale;

  /**
   * @function set
   * @memberof NDArray
   * @instance
   * @description Sets the element at `i, j, ..., n` to `value`.
   * @param {Number[]} ...indices
   * @param {Number} value
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).set(1, 0); // <=> array([1, 0, 3])
   */
  public set = set;

  /**
   * @function sign
   * @memberof NDArray
   * @instance
   * @description
   * Returns the sign of each element of current array, indicating
   * whether it is positive, negative or zero.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).sign(); // <=> array([1, 1, 1])
   */
  public sign = sign;

  /**
   * @function sin
   * @memberof NDArray
   * @instance
   * @description Returns the sine of each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([0, Math.PI / 2, Math.PI]).sin(); // <=> array([0, 1, 0])
   */
  public sin = sin;

  /**
   * @function sinh
   * @memberof NDArray
   * @instance
   * @description Returns the hyperbolic sine of each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).sinh(); // <=> array([1.175201177597046, 3.6268603801727295, 10.017874717712402])
   */
  public sinh = sinh;

  /**
   * @function slice
   * @memberof NDArray
   * @instance
   * @description Slices the current array along the leading dimension
   * @param {Number} begin
   * @param {Number} end
   * @param {Number} step
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3, 4]).slice(0, 4, 2); // => array([1, 3])
   */
  public slice = slice;

  /**
   * @function solve
   * @memberof NDArray
   * @instance
   * @description
   * Solves the equation AX = B (where A is current matrix and B is `x`).
   * Accelerated with LAPACK `?gesv`.
   * @param {NDArray} x
   * @returns {NDArray}
   * @example
   * import { array } from 'vectorious';
   *
   * array([[1, 3, 5], [2, 4, 7], [1, 1, 0]]).solve([[1], [3], [5]]); // => array([[3.25], [1.75], [-1.5]])
   */
  public solve = solve;

  /**
   * @function sqrt
   * @memberof NDArray
   * @instance
   * @description Returns the positive square root of each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 4, 9]); // <=> array([1, 2, 3])
   */
  public sqrt = sqrt;

  /**
   * @function square
   * @memberof NDArray
   * @instance
   * @description Asserts if current matrix is square.
   * @throws {Error} matrix is not square
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).square(); // Error: matrix is not square
   */
  public square = square;

  /**
   * @function subtract
   * @memberof NDArray
   * @instance
   * @description
   * Subtracts `x` from the current array.
   * Accelerated with BLAS `?axpy`.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).subtract([1, 1, 1]); // <=> array([0, 1, 2])
   */
  public subtract = subtract;

  /**
   * @function sum
   * @memberof NDArray
   * @instance
   * @description Sum of array elements
   * @returns {Number}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).sum(); // => 6
   */
  public sum = sum;

  /**
   * @function swap
   * @memberof NDArray
   * @instance
   * @description Swaps two rows `i` and `j` in current matrix
   * @param {Number} i
   * @param {Number} j
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([[1, 2], [3, 4]]); // <=> array([[3, 4], [1, 2]])
   */
  public swap = swap;

  /**
   * @function tan
   * @memberof NDArray
   * @instance
   * @description Returns the tangent of each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).tan(); // <=> array([1.5574077367782593, -2.185039758682251, -0.14254654943943024])
   */
  public tan = tan;

  /**
   * @function tanh
   * @memberof NDArray.prototype
   * @description Returns the hyperbolic tangent of each element of current array.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).tanh(); // <=> array([0.7615941762924194, 0.9640275835990906, 0.9950547814369202])
   */
  public tanh = tanh;

  /**
   * @function toArray
   * @memberof NDArray
   * @instance
   * @description Converts current vector into a JavaScript array.
   * @param {Number} index
   * @param {Number} dim
   * @returns {Array}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).toArray(); // => [1, 2, 3]
   */
  public toArray = toArray;

  /**
   * @function toString
   * @memberof NDArray
   * @instance
   * @description Converts current vector into a readable formatted string.
   * @returns {String}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).toString(); // => '1,2,3'
   */
  public toString = toString;

  /**
   * @function trace
   * @memberof NDArray
   * @instance
   * @description Gets the trace of the matrix (the sum of all diagonal elements).
   * @returns {Number}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1, 2, 3]).trace(); // => 5
   */
  public trace = trace;

  /**
   * @function transpose
   * @memberof NDArray
   * @instance
   * @description Transposes current matrix (mirror across the diagonal).
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); // <=> array([[1, 4, 7], [2, 5, 8], [3, 6, 9]])
   */
  public transpose = transpose;

  /**
   * @function trunc
   * @memberof NDArray
   * @instance
   * @description
   * Returns the integer part of each element of current array,
   * removing any fractional digits.
   * @returns {this}
   * @example
   * import { array } from 'vectorious';
   *
   * array([1.2, 2.8, 3.5]).trunc(); // => array([1, 2, 3])
   */
  public trunc = trunc;

  public constructor(
    data?: any,
    options?: {
      shape?: number[];
      length?: number;
      strides?: number[];
      dtype?: DType;
    }
  ) {
    if (!data) {
      return;
    }

    if (data instanceof NDArray) {
      return data;
    }

    if (data instanceof NDIter) {
      if (!options || !options.dtype) {
        throw new Error('dtype is missing');
      }

      if (data.shape) {
        options.shape = data.shape;
      }

      const length = data.length;
      data = new (get_type(options.dtype))(length);
    }

    const {
      shape = get_shape(data),
      length = get_length(shape),
      strides = get_strides(shape),
      dtype = get_dtype(data),
    } = options || {};

    this.data = is_typed_array(data) ? data : new (get_type(dtype))(flatten(data));
    this.shape = shape;
    this.length = length;
    this.dtype = dtype;
    this.strides = strides;
  }

  /**
   * @name x
   * @memberof NDArray
   * @instance
   * @description Gets or sets the value at index 0
   * @type Number
   */
  public get x(): number {
    return this.get(0);
  }

  public set x(value: number) {
    this.set(0, value);
  }

  /**
   * @name y
   * @memberof NDArray
   * @instance
   * @description Gets or sets the value at index 1
   * @type Number
   */
  public get y(): number {
    return this.get(1);
  }

  public set y(value: number) {
    this.set(1, value);
  }

  /**
   * @name z
   * @memberof NDArray
   * @instance
   * @description Gets or sets the value at index 2
   * @type Number
   */
  public get z(): number {
    return this.get(2);
  }

  public set z(value: number) {
    this.set(2, value);
  }

  /**
   * @name w
   * @memberof NDArray
   * @instance
   * @description Gets or sets the value at index 3
   * @type Number
   */
  public get w(): number {
    return this.get(3);
  }

  public set w(value: number) {
    this.set(3, value);
  }

  /**
   * @name T
   * @memberof NDArray
   * @instance
   * @description Short for `this.copy().transpose()`
   * @type NDArray
   */
  public get T() {
    return this.copy().transpose();
  }
}

export { abs } from './abs';
export { acos } from './acos';
export { acosh } from './acosh';
export { add } from './add';
export { angle } from './angle';
export { array } from './array';
export { asin } from './asin';
export { asinh } from './asinh';
export { atan } from './atan';
export { atanh } from './atanh';
export { augment } from './augment';
export { binOp } from './binOp';
export { cbrt } from './cbrt';
export { ceil } from './ceil';
export { check } from './check';
export { combine } from './combine';
export { copy } from './copy';
export { cos } from './cos';
export { cosh } from './cosh';
export { cross } from './cross';
export { det } from './det';
export { diagonal } from './diagonal';
export { dot } from './dot';
export { eig } from './eig';
export { equals } from './equals';
export { equidimensional } from './equidimensional';
export { equilateral } from './equilateral';
export { exp } from './exp';
export { expm1 } from './expm1';
export { eye } from './eye';
export { fill } from './fill';
export { floor } from './floor';
export { forEach } from './forEach';
export { fround } from './fround';
export { gauss } from './gauss';
export { get } from './get';
export { inv } from './inv';
export { log } from './log';
export { log10 } from './log10';
export { log1p } from './log1p';
export { log2 } from './log2';
export { lu } from './lu';
export { lu_factor } from './lu_factor';
export { magic } from './magic';
export { map } from './map';
export { matrix } from './matrix';
export { max } from './max';
export { mean } from './mean';
export { min } from './min';
export { multiply } from './multiply';
export { norm } from './norm';
export { normalize } from './normalize';
export { ones } from './ones';
export { pow } from './pow';
export { prod } from './prod';
export { product } from './product';
export { project } from './project';
export { push } from './push';
export { random } from './random';
export { range } from './range';
export { rank } from './rank';
export { reciprocal } from './reciprocal';
export { reduce } from './reduce';
export { reshape } from './reshape';
export { round } from './round';
export { row_add } from './row_add';
export { scale } from './scale';
export { set } from './set';
export { sign } from './sign';
export { sin } from './sin';
export { sinh } from './sinh';
export { slice } from './slice';
export { solve } from './solve';
export { sqrt } from './sqrt';
export { square } from './square';
export { subtract } from './subtract';
export { sum } from './sum';
export { swap } from './swap';
export { tan } from './tan';
export { tanh } from './tanh';
export { toArray } from './toArray';
export { toString } from './toString';
export { trace } from './trace';
export { transpose } from './transpose';
export { trunc } from './trunc';
export { zeros } from './zeros';

try {
  (window as any).v = NDArray;
} catch (error) {}
