import { NDArray } from './';
import { NDIter } from '../iterator';

const { asin: f } = Math;

/**
 * @static
 * @function asin
 * @memberof NDArray
 * @description Returns the arcsine of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { asin } from 'vectorious/core/asin';
 * 
 * asin([-1, 0, 1]) // => array([-1.5707963705062866, 0, 1.5707963705062866])
 */
export const asin = (x: NDArray | ArrayLike<any>): NDArray => NDArray.array(x).asin();

/**
 * @function asin
 * @memberof NDArray.prototype
 * @description Returns the arcsine of each element of current array.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([-1, 0, 1]).asin() // <=> array([-1.5707963705062866, 0, 1.5707963705062866])
 */
export default function(this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = f(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
