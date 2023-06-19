import { TypedArray } from '../types';
import { get_length, get_strides } from '../util';
import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @memberof vectorious
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
): NDArray => array(x).slice(begin, end, step);

export default function (
  this: NDArray,
  begin: number = 0,
  end: number = this.shape[0],
  step: number = 1
): NDArray {
  const { data: d1, shape: s1 } = this;
  const nd = s1.length;

  if (begin < 0 || end < 0) {
    return this.slice(
      begin < 0 ? s1[s1.length - 1] + begin : begin,
      end < 0 ? s1[s1.length - 1] + end : end
    );
  }

  if (begin > end) {
    return this.slice(end, begin, step);
  }

  if (step <= 0) {
    throw new Error('step argument has to be a positive integer');
  }

  const s2: number[] = [Math.ceil((end - begin) / Math.abs(step)), ...s1.slice(1)];
  const l2: number = get_length(s2);
  const st2: number[] = get_strides(s2);
  const d2: TypedArray =
    nd > 1
      ? d1.subarray(begin * s2[s2.length - 1], end * s2[s2.length - 1])
      : d1.subarray(begin, end);

  st2[0] *= step;

  return new NDArray(d2, {
    shape: s2,
    length: l2,
    strides: st2,
  });
}
