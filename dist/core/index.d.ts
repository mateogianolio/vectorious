import { DType, INDArray, TypedArray } from '../types';
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
declare const inspectSymbol: unique symbol;
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
export declare class NDArray implements INDArray {
    /**
     * @name data
     * @memberof NDArray
     * @instance
     * @type TypedArray
     * @default new Float64Array(0)
     */
    data: TypedArray;
    /**
     * @name dtype
     * @memberof NDArray
     * @instance
     * @type String
     * @default 'float64'
     */
    dtype: DType;
    /**
     * @name length
     * @memberof NDArray
     * @instance
     * @type Number
     * @default 0
     */
    length: number;
    /**
     * @name shape
     * @memberof NDArray
     * @instance
     * @type Number[]
     * @default [0]
     */
    shape: number[];
    /**
     * @name strides
     * @memberof NDArray
     * @instance
     * @type Number[]
     * @default [0]
     */
    strides: number[];
    [inspectSymbol]: () => string;
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
    abs: typeof abs;
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
    acos: typeof acos;
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
    acosh: typeof acosh;
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
    add: typeof add;
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
    angle: typeof angle;
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
    asin: typeof asin;
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
    asinh: typeof asinh;
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
    atan: typeof atan;
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
    atanh: typeof atanh;
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
    augment: typeof augment;
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
    binOp: typeof binOp;
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
    cbrt: typeof cbrt;
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
    ceil: typeof ceil;
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
    check: typeof check;
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
    combine: typeof combine;
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
    copy: typeof copy;
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
    cos: typeof cos;
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
    cosh: typeof cosh;
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
    cross: typeof cross;
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
    det: typeof det;
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
    diagonal: typeof diagonal;
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
    dot: typeof dot;
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
    eig: typeof eig;
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
    equals: typeof equals;
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
    equidimensional: typeof equidimensional;
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
    equilateral: typeof equilateral;
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
    exp: typeof exp;
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
    expm1: typeof expm1;
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
    fill: typeof fill;
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
    floor: typeof floor;
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
    forEach: typeof forEach;
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
    fround: typeof fround;
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
    gauss: typeof gauss;
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
    get: typeof get;
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
    inv: typeof inv;
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
    log: typeof log;
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
    log1p: typeof log1p;
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
    log10: typeof log10;
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
    log2: typeof log2;
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
    lu_factor: typeof lu_factor;
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
    lu: typeof lu;
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
    map: typeof map;
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
    max: typeof max;
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
    mean: typeof mean;
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
    min: typeof min;
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
    multiply: typeof multiply;
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
    norm: typeof norm;
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
    normalize: typeof normalize;
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
    pow: typeof pow;
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
    prod: typeof prod;
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
    product: typeof product;
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
    project: typeof project;
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
    push: typeof push;
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
    rank: typeof rank;
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
    reciprocal: typeof reciprocal;
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
    reduce: typeof reduce;
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
    reshape: typeof reshape;
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
    round: typeof round;
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
    row_add: typeof row_add;
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
    scale: typeof scale;
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
    set: typeof set;
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
    sign: typeof sign;
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
    sin: typeof sin;
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
    sinh: typeof sinh;
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
    slice: typeof slice;
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
    solve: typeof solve;
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
    sqrt: typeof sqrt;
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
    square: typeof square;
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
    subtract: typeof subtract;
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
    sum: typeof sum;
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
    swap: typeof swap;
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
    tan: typeof tan;
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
    tanh: typeof tanh;
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
    toArray: typeof toArray;
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
    toString: typeof toString;
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
    trace: typeof trace;
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
    transpose: typeof transpose;
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
    trunc: typeof trunc;
    constructor(data?: any, options?: {
        shape?: number[];
        length?: number;
        strides?: number[];
        dtype?: DType;
    });
    /**
     * @name x
     * @memberof NDArray
     * @instance
     * @description Gets or sets the value at index 0
     * @type Number
     */
    get x(): number;
    set x(value: number);
    /**
     * @name y
     * @memberof NDArray
     * @instance
     * @description Gets or sets the value at index 1
     * @type Number
     */
    get y(): number;
    set y(value: number);
    /**
     * @name z
     * @memberof NDArray
     * @instance
     * @description Gets or sets the value at index 2
     * @type Number
     */
    get z(): number;
    set z(value: number);
    /**
     * @name w
     * @memberof NDArray
     * @instance
     * @description Gets or sets the value at index 3
     * @type Number
     */
    get w(): number;
    set w(value: number);
    /**
     * @name T
     * @memberof NDArray
     * @instance
     * @description Short for `this.copy().transpose()`
     * @type NDArray
     */
    get T(): NDArray;
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
