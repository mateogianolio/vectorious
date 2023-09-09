import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @memberof vectorious
 * @function trace
 * @description Gets the trace of `x` (the sum of all diagonal elements).
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { trace } from 'vectorious/core/trace';
 *
 * trace([[1, 2], [3, 4]]); // => 5
 */
export const trace = (x: NDArray | ArrayLike<any>): number => array(x).trace();

export default function (this: NDArray): number {
  const [r, c] = this.shape;
  const { data: d1 } = this;
  const n: number = Math.min(r, c);

  let result: number = 0;

  let j: number;
  for (j = 0; j < n; j += 1) {
    result += d1[j * c + j];
  }

  return result;
}
