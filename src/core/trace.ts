import { NDArray } from './';

/**
 * @static
 * @function trace
 * @memberof NDArray
 * @description Gets the trace of `x` (the sum of all diagonal elements).
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { trace } from 'vectorious/core/trace';
 * 
 * trace([[1, 2], [3, 4]]); // => 5
 */
export const trace = (x: NDArray | ArrayLike<any>): number => NDArray.array(x).trace();

/**
 * @function trace
 * @memberof NDArray.prototype
 * @description Gets the trace of the matrix (the sum of all diagonal elements).
 * @returns {Number}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).trace(); // => 5
 */
export default function(this: NDArray): number {
  const [r, c] = this.shape;
  const { data: d1 } = this;
  const n: number = Math.min(r, c);

  let result: number = 0;

  let j: number;
  for (j = 0; j < n; j += 1) {
    result += d1[j * c + j];
  }

  return result;
};
