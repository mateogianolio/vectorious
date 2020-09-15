import { get_strides } from '../util';
import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @memberof module:Globals
 * @function slice
 * @description Slices `x` in the corresponding dimension
 * @param {NDArray} x
 * @param {Number} begin
 * @param {Number} end
 * @param {Number} step
 * @returns {NDArray}
 * @example
 * import { slice } from 'vectorious/core/slice';
 * 
 * slice([1, 2, 3, 4], 0, 4, 2); // => array([1, 3])
 */
export const slice = (
  x: NDArray | ArrayLike<any>,
  begin?: number,
  end?: number,
  step?: number
): NDArray =>
  array(x).slice(begin, end, step);

/**
 * @function slice
 * @memberof NDArray.prototype
 * @description Slices the current array in the corresponding dimension
 * @param {Number} begin
 * @param {Number} end
 * @param {Number} step
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3, 4]).slice(0, 4, 2); // => array([1, 3])
 */
export default function(
  this: NDArray,
  begin: number = 0,
  end: number = this.shape[0],
  step: number = 1
): NDArray {
  const { shape: s1 } = this;
  const nd = s1.length;

  if (begin < 0 || end < 0) {
    return this.slice(begin < 0 ? nd + begin : begin, end < 0 ? nd + end : end);
  }

  if (step === 0) {
    throw new Error('step argument cannot be 0');
  }

  const s2: number[] = [Math.ceil((end - begin) / step), ...s1.slice(1)];
  const l2: number = s2.reduce((sum: number, dim: number) => sum * dim, 1);
  const st2: number[] = get_strides(s2);

  this.shape = s2;
  this.length = l2;
  this.strides = st2;

  return this;
};
