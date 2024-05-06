import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterators';

const { log: f } = Math;

/**
 * @static
 * @memberof vectorious
 * @function log
 * @description Returns the natural logarithm (log_e, also ln) of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { log } from 'vectorious/core/log';
 *
 * log([1, 2, 3]); // => array([0, 0.6931471824645996, 1.0986123085021973])
 */
export const log = (x: NDArray | ArrayLike<any>): NDArray => array(x).log();

export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i] = f(d1[i]);
  }

  return this;
}
