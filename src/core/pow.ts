import { NDArray, array } from './';
import { NDIter } from '../iterator';

const { pow: f } = Math;

/**
 * @static
 * @function pow
 * @description Returns each element of `x` to the exponent power, that is, element^exponent.
 * @param {NDArray} x
 * @param {Number} exponent
 * @returns {NDArray}
 * @example
 * import { pow } from 'vectorious/core/pow';
 * 
 * pow([1, 2, 3], 2); // => array([1, 4, 9])
 */
export const pow = (x: NDArray | ArrayLike<any>, exponent: number): NDArray =>
  array(x).pow(exponent);

/**
 * @function pow
 * @memberof NDArray.prototype
 * @description Returns each element of current array to the exponent power, that is, element^exponent.
 * @param {Number} exponent
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).pow(2); // <=> array([1, 4, 9])
 */
export default function(this: NDArray, exponent: number): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = f(d1[iter.pos], exponent);

    iter.next();
  } while (!iter.done());

  return this;
};
