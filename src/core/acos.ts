import { NDArray } from './';
import { NDIter } from '../iterator';

const { acos: f } = Math;

/**
 * @static
 * @function acos
 * @memberof NDArray
 * @description Returns the arccosine of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { acos } from 'vectorious/core/acos';
 * 
 * acos([-1, 0, 1]); // => array([3.141592653589793, 1.5707963267948966, 0])
 */
export const acos = (x: NDArray | ArrayLike<any>): NDArray => NDArray.array(x).acos();

/**
 * @function acos
 * @memberof NDArray.prototype
 * @description Returns the arccosine of each element of current array.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([-1, 0, 1]).acos(); // <=> array([3.141592653589793, 1.5707963267948966, 0])
 */
export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = f(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
